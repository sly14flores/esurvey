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
						  <button type="button" class="btn btn-sm btn-warning my-1" @click="showFieldsForChart">Select</button>
						</form>						
					</div>
				</div>				         
			</div>
			<div class="page-body">
				<div class="row">
					<div class="col-12">
						<p>Select Field</p>
						<div class="border-checkbox-section mb-4">
							<div class="border-checkbox-group border-checkbox-group-danger">
								<input class="border-checkbox" type="checkbox" id="tag-">
								<label class="border-checkbox-label" for="tag-">Field</label>
							</div>
						</div>
						<button type="button" class="btn btn-sm btn-danger my-1" @click="addChart">Add</button>
					</div>
				</div>
				<div class="row">
					<div class="col-6" v-for="pie in pies" :key="pie.no">
						<pie-chart :pieIndex="pie.no" :pieData="pie.data" :pieOptions="pie.options"></pie-chart>
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
			charts: [
				{id: 1, type: 'pie', name: 'Pie'},
				{id: 2, type: 'bar', name: 'Bar'},
			],
			pies: [],
            chartColors: {
                red: 'rgb(255, 99, 132)',
                orange: 'rgb(255, 159, 64)',
                yellow: 'rgb(255, 205, 86)',
                green: 'rgb(75, 192, 192)',
                blue: 'rgb(54, 162, 235)',
                purple: 'rgb(153, 102, 255)',
                grey: 'rgb(201, 203, 207)'
            },	
		}

	},

	mixins: [OfficeSurveys],

	components: {
		BarChart,
		PieChart,
	},
	
	computed: {

		survey: {
			get() {
				return this.$store.state.analytics.survey
			},
			set(value) {
				this.$store.dispatch('analytics/survey', value)
			}
		},

		surveys() {
			return this.$store.state.analytics.surveys
		},

		chart() {
			return this.$store.state.analytics.chart
		}
	
	},

	methods: {

		showFieldsForChart() {

		},

		addChart() {

			const data = {
				datasets: [{
					data: [
						5,
						5,
						5,
						5,
						5,
					],
					backgroundColor: [
						this.chartColors.red,
						this.chartColors.orange,
						this.chartColors.yellow,
						this.chartColors.green,
						this.chartColors.blue,
					],
					label: 'Dataset 1'
				}],
				labels: [
					'Red',
					'Orange',
					'Yellow',
					'Green',
					'Blue'
				]
			}

			const options = {
				responsive: true
			}

			this.pies.push({no: this.pies.length+1, data, options});

		},

	},

    created() {

	},

    mounted() {

		this.$parent.hide()
		this.$store.dispatch('analytics/surveys')

    }
 
}

</script>