<template>
    <div>
		<div class="page-wrapper">
			<div class="page-header">
				<div class="row align-items-end">
					<div class="col-lg-8">
						<div class="page-header-title">
							<div class="d-inline">
								<h4>Analytics</h4>
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
						  <button type="button" class="btn btn-primary my-1" @click="getAnalytics">Go!</button>
						</form>					
					</div>
				</div>				                
			</div>
			<div class="page-body">
				<div class="small">
					<bar-chart :chart-data="datacollection"></bar-chart>
					<button @click="fillData()">Randomize</button>
				</div>
			</div>			
        </div>        
    </div>
</template>

<style scoped>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>

<script>

import OfficeSurveys from './mixins/OfficeSurveys'
import LineChart from './charts/LineChart.js'
import BarChart from './charts/BarChart.js'

export default {

    components: {
	  LineChart,
	  BarChart
    },	

	name: 'SurveysReports',

    data () {
      return {
        datacollection: null
      }
    },

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

		getAnalytics() {

			window.open('/reports/survey')

		},

		fillData () {
			this.datacollection = {
				labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
				datasets: [{
					label: '# of Votes',
					data: [100, 19, 3, 5, 2, 3],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
					],
					borderWidth: 1
				}]				
			}
		},
		getRandomInt () {
			return Math.floor(Math.random() * (50 - 5 + 1)) + 5
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