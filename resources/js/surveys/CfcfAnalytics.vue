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
						  <select class="custom-select my-1 mr-sm-2" :class="{'is-invalid': $v.chart.$error}" v-model="chart">
							<option v-for="chart in charts" :value="chart.id" :key="chart.id">{{chart.name}}</option>
						  </select>
						  <div class="invalid-feedback">Please select chart&nbsp;</div>
						  <button type="button" class="btn btn-sm btn-warning my-1" @click="showFieldsForChart">Show Fields</button>
						</form>						
					</div>
				</div>				         
			</div>
			<div class="page-body">
				<div class="row">
					<div class="preloader3 loader-block" v-if="!dataFetched">
						<div class="circ1"></div>
						<div class="circ2"></div>
						<div class="circ3"></div>
						<div class="circ4"></div>
					</div>
					<div class="col-12" v-else>
						<div v-if="fieldsFetched">
							<p>Select Field</p>
							<div class="border-checkbox-section mb-4">
								<div v-for="(tag, i) in fields" :key="i" class="border-checkbox-group border-checkbox-group-danger">
									<input class="border-checkbox" type="checkbox" :id="'tag-'+i" v-model="tag.show">
									<label class="border-checkbox-label" :for="'tag-'+i">{{tag.value}}</label>
								</div>
							</div>
							<button type="button" class="btn btn-sm btn-danger my-1" @click="generateChart">Generate</button>
						</div>
					</div>
				</div>
				<div class="row mt-4">
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

import { required } from "vuelidate/lib/validators";
import OfficeSurveys from './mixins/OfficeSurveys'

import BarChart from './charts/BarChart'
import PieChart from './charts/PieChart'

export default {

	name: 'SurveysReports', 

	data() {

		return {

		}

	},

	mixins: [OfficeSurveys],

	components: {
		BarChart,
		PieChart,
	},
	
	computed: {

		dataFetched() {
			return this.$store.state.analytics.dataFetched
		},

		fieldsFetched() {
			return this.$store.state.analytics.fieldsFetched
		},

		fields() {
			return this.$store.state.analytics.fields
		},

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

		charts() {
			return this.$store.state.analytics.charts
		},

		chart: {
			get() {
				return this.$store.state.analytics.chart
			},
			set(value) {
				this.$store.dispatch('analytics/chart', value)
			}
		},

		pies() {
			return this.$store.state.analytics.pies
		}
	
	},

	methods: {

		showFieldsForChart() {

			this.$v.chart.$touch()
			
			if (this.$v.chart.$invalid) return

			this.$store.dispatch('analytics/fields')

		},

		generateChart() {

			this.$store.dispatch('analytics/addPie')

		},

	},

	validations: {
		chart: {required}
	},

    created() {
		this.$store.dispatch('analytics/resetState')
	},

    mounted() {

		this.$parent.hide()
		this.$store.dispatch('analytics/surveys')

    }
 
}

</script>