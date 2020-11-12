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
						  <label class="my-1 mr-2">Survey</label>
						  <select class="custom-select my-1 mr-sm-2" v-model="survey">
							<option v-for="survey in surveys" :value="survey.id" :key="survey.id">{{survey.name}}</option>
						  </select>
						  <!-- <button type="button" class="btn btn-primary my-1">Go!</button> -->
						</form>					
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12">
						<form class="form-inline mt-4">
						  <label class="my-1 mr-2">Chart</label>
						  <select class="custom-select my-1 mr-sm-2" v-model="chart">
							<option v-for="chart in charts" :value="chart.id" :key="chart.id">{{chart.name}}</option>
						  </select>
						  <button type="button" class="btn btn-sm btn-warning my-1" @click="addChart">Add</button>
						</form>						
					</div>
				</div>				         
			</div>
			<div class="page-body">
				<div v-if="true">
				</div>
				<bar-chart :barIndex=1></bar-chart>
				<bar-chart :barIndex=2></bar-chart>				
				<bar-chart :barIndex=3></bar-chart>
				<div class="row">
					<div class="col-6">
						<pie-chart :pieIndex=1></pie-chart>
					</div>
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

import BarChart from './charts/BarChart'
import PieChart from './charts/PieChart'

export default {

	name: 'SurveysReports', 

	data() {

		return {
			chart: 1,
			charts: [
				{id: 1, type: 'pie', name: 'Pie'},
				{id: 2, type: 'bar', name: 'Bar'},
			],
			chartComponent: 'bar-chart',
		}

	},

	mixins: [OfficeSurveys],

	components: {
		BarChart,
		PieChart,
	},

	methods: {

		addChart() {

		},

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