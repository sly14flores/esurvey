<template>
    <div>
		<div class="page-wrapper">
			<div class="page-header">
				<div class="row align-items-end">
					<div class="col-lg-8">
						<div class="page-header-title">
							<div class="d-inline">
								<h4>Respondents</h4>
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
						  <button type="button" class="btn btn-primary my-1" @click="respondents">Go!</button>
						</form>					
					</div>
				</div>								
			</div>
			<div class="page-body">
				<div class="card">
					<div class="card-header">
						<h5>Responses</h5>			
					</div>
					<div class="card-block">
						<transition>
							<div class="preloader3 loader-block" v-if="!dataFetched">
								<div class="circ1"></div>
								<div class="circ2"></div>
								<div class="circ3"></div>
								<div class="circ4"></div>
							</div>
							<div class="table-responsive" v-else>
								<table class="table table-xs">
									<thead>
										<tr>
											<th v-for="(header, i) in responses.columns" :key="i">{{header}}</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="row in responses.rows">
											<td v-for="value in row" :key="i">{{value}}</td>										
										</tr>
									</tbody>
								</table>
							</div>							
						</transition>
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

	import OfficeSurveys from './mixins/OfficeSurveys'

	export default {
	
		name: 'SurveyRespondents',

		mixins: [OfficeSurveys],		

		data() {

			return {
				dataFetched: false,
				responses: [],
			}

		},

		components: {
			SurveysHeader: () => import(/* webpackChunkName: "SurveysHeader" */'./SurveysHeader'),
			SlyPagination: () => import(/* webpackChunkName: "SlyPagination" */'../components/SlyPagination')
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

			respondents() {

				// 

				this.dataFetched = false
				
				axios.get('api/conduct/survey/respondent/'+this.$store.state.dashboard.survey, this.$store.state.config).then(response => {
				
					this.responses = response.data;
					this.dataFetched = true;
				
				}).catch(e => {
				
					this.dataFetched = true;				
				
				});

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

			this.dataFetched = true

		}	
	
	}

</script>