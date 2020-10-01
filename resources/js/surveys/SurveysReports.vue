<template>
    <div>
		<div class="page-wrapper">
			<div class="page-header">
				<div class="row align-items-end">
					<div class="col-lg-8">
						<div class="page-header-title">
							<div class="d-inline">
								<h4>Reports</h4>
							</div>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="page-header-breadcrumb">
							<ul class="breadcrumb-title">
								<li class="breadcrumb-item">
									<router-link to="/surveys">
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
						  <label class="my-1 mr-2">Surveys</label>
						  <select class="custom-select my-1 mr-sm-2" v-model="survey">
							<option v-for="survey in surveys" :value="survey.id" :key="survey.id">{{survey.name}}</option>
						  </select>
						  <button type="button" class="btn btn-primary my-1" @click="getReports">Go!</button>
						</form>					
					</div>
				</div>				                
			</div>
			<div class="page-body">

			</div>			
        </div>        
    </div>
</template>

<style scoped>

</style>

<script>

import OfficeSurveys from './mixins/OfficeSurveys'

export default {

	name: 'SurveysReports',

	mixins: [OfficeSurveys],
 
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

		getReports() {

			window.open('/reports/survey')

		}
	
	},

    created() {

    },

    mounted() {

		this.$parent.hide()
	
		this.$store.dispatch('async_profile').then(() => {

			this.fetchOfficeSurveys().then(response => {

				this.$store.commit('dashboardSurveys', response.data)
				if (_.size(response.data)) this.$store.commit('dashboardSurvey', this.surveys[0].id)		

			}).catch(e => {

			})
			
		})

    }
 
}

</script>