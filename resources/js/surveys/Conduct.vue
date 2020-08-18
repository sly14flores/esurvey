<template>
	<div>
		<div class="page-wrapper">
			<div class="page-header">
				<div class="row align-items-end">
					<div class="col-lg-8">
						<div class="page-header-title">
							<div class="d-inline">
								<h4>Conduct Survey</h4>
							</div>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="page-header-breadcrumb">
							<ul class="breadcrumb-title">
								<li class="breadcrumb-item">
									<router-link to="/dashboard">
										<i class="feather icon-home"></i>
									</router-link>
								</li>
								<li class="breadcrumb-item">
									<a href="javascript:;">Surveys</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="page-body">
				<div class="row">
					<div class="col-lg-6">
						<div class="card">
							<div class="card-header">
								<h5>Recursive conduct</h5>
							</div>
							<div class="card-block">
								<form class="needs-validation" novalidate>
									<div class="form-row">
										<div class="form-group col-lg-12">
											<label>Select survey</label>
											  <select class="form-control" v-model.trim="$v.conduct.survey.$model" :class="{'is-invalid': $v.conduct.survey.$error}">
												<option disabled :value="null"></option>
												<option v-for="s in surveys" :value="s.token" :key="s.id">{{s.name}}</option>							  
											  </select>
											  <div class="invalid-feedback">Survey is required</div>												
										</div>
									</div>
									<div class="f-right">
										<button type="button" class="btn btn-info btn-sm" @click="conductSurvey">Go!</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

	.cursorize {
		cursor: pointer;
	}

</style>

<script>

	import { required, email, minLength, requiredIf, requiredUnless } from "vuelidate/lib/validators";
	import selections from '../mixins/selections'

	export default {
	
		name: 'Conduct',
		
		mixins: [selections],
		
		components: {

		},		
		
		data() {
		
			return {
				conduct: {
					survey: null
				}
			}
		
		},
		
		methods: {
		
			conductSurvey() {
			
				this.$v.conduct.$touch()

				if (this.$v.conduct.$invalid) return
				
				window.open('/survey#/'+this.conduct.survey)
			
			}
		
		},
		
		validations: {
			conduct: {
				survey: {required}
			}
		},
		
		created() {

		},
	
		mounted() {
		
			this.$parent.hide()
			this.selectSurveys()
		
		}	
	
	}

</script>