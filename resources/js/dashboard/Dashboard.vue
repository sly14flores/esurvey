<template>
	<div>
		<div class="page-wrapper">
			<div class="page-header">
				<div class="row align-items-end">
					<div class="col-lg-8">
						<div class="page-header-title">
							<div class="d-inline">
								<h4>Dashboard</h4>
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
							</ul>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12">
						<form class="form-inline mt-4">
						  <label class="my-1 mr-2">Choose a survey</label>
						  <select class="custom-select my-1 mr-sm-2" v-model="survey">
							<option v-for="survey in surveys" :value="survey.id" :key="survey.id">{{survey.name}}</option>
						  </select>
						  <button type="button" class="btn btn-primary my-1" @click="fetchData">Go!</button>
						</form>					
					</div>
				</div>
			</div>
			<div class="page-body">
				<Items :survey="survey"></Items>
			</div>
		</div>
	</div>
</template>

<style>
</style>

<script>

	import Items from './Items'
	
	import Data from './mixins/Data'	

	export default {
	
		name: 'Dashboard',

		mixins: [Data],	
	
		data() {
		
			return {

			}
		
		},
		
		components: {
			Items
		},
	
		beforeRouteEnter (to, from, next) {
			
			next(vm => {
			
			})

		},
		
		computed: {
		
			survey: {
				
				get() {

					return this.$store.state.dashboard.survey
					
				},
				
				set(value) {
				
					this.$store.commit('dashboardSurvey', value)
				
				}
			
			},
		
			surveys() {
			
				return this.$store.state.dashboard.surveys
			
			}
		
		},
	
		methods: {
		
			fetchOfficeSurveys() {

				axios.get('/api/selections/surveys/'+this.$store.state.profile.office, this.$store.state.config).then(response => {
					
					this.$store.commit('dashboardSurveys', response.data)
					if (_.size(response.data)) this.$store.commit('dashboardSurvey', this.surveys[0].id)
					
					this.fetchData()
					
				}).catch(e => {
					
				})
			
			},
		
		},
		
		created() {	
		
		},
	
		mounted() {
		
			this.$parent.hide()
		
			this.$store.dispatch('async_profile').then(() => {

				this.fetchOfficeSurveys()
				
			})	
		
		}
	
	}

</script>