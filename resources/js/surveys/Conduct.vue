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
								<h5>General Survey</h5>
							</div>
							<div class="card-block">
								<form class="needs-validation" novalidate>
									<div class="form-row">
										<div class="form-group col-lg-12">
											<label>Select survey</label>
											  <select class="form-control" v-model.trim="$v.conduct.general.survey.$model" :class="{'is-invalid': $v.conduct.general.survey.$error}">
												<option disabled :value="null"></option>
												<option v-for="s in general_surveys" :value="s.token" :key="s.id">{{s.name}}</option>							  
											  </select>
											  <div class="invalid-feedback">Survey is required</div>												
										</div>
										<div class="form-check">
											<label class="form-check-label"><input type="checkbox" class="form-check-input" v-model="conduct.general.recursive"> Recursive</label>
										</div>
									</div>
									<div class="f-right">
										<button type="button" class="btn btn-info btn-sm" @click="conductGeneralSurvey">Go!</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="card">
							<div class="card-header">
								<h5>Office Specific Survey</h5>
							</div>
							<div class="card-block">
								<form class="needs-validation" novalidate>
									<div class="form-row">
										<div class="form-group col-lg-12">
											<label>Select survey</label>
											  <select class="form-control" v-model.trim="$v.conduct.specific.survey.$model" :class="{'is-invalid': $v.conduct.specific.survey.$error}">
												<option disabled :value="null"></option>
												<option v-for="s in specific_surveys" :value="s.token" :key="s.id">{{s.name}}</option>							  
											  </select>
											  <div class="invalid-feedback">Survey is required</div>												
										</div>
										<div class="form-check">
											<label class="form-check-label"><input type="checkbox" class="form-check-input" v-model="conduct.specific.recursive"> Recursive</label>
										</div>
									</div>
									<div class="f-right">
										<button type="button" class="btn btn-info btn-sm" @click="conductSpecificSurvey">Go!</button>
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
					general: {
						survey: null,
						recursive: false
					},
					specific: {
						survey: null,
						recursive: true
					}
				}
			}
		
		},
		
		methods: {
		
			conductGeneralSurvey() {
			
				this.$v.conduct.general.$touch()

				if (this.$v.conduct.general.$invalid) return
				
				if (this.conduct.general.recursive) window.open('/survey#/general/recursive/'+this.conduct.general.survey)
				else window.open('/survey#/general/once/'+this.conduct.general.survey)
			
			},
			
			conductSpecificSurvey() {
			
				this.$v.conduct.specific.$touch()

				if (this.$v.conduct.specific.$invalid) return
				
				if (this.conduct.specific.recursive) window.open('/survey#/specific/recursive/'+this.conduct.specific.survey)
				else  window.open('/survey#/specific/once/'+this.conduct.specific.survey)
			
			}			
		
		},
		
		validations: {
			conduct: {
				general: {
					survey: {required}
				},
				specific: {
					survey: {required}
				}				
			}
		},
		
		created() {

		},
	
		mounted() {
		
			this.$parent.hide()
			this.selectGeneralSurveys()
			this.selectSpecificSurveys()
		
		}	
	
	}

</script>