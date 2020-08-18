<template>
	<div>
		<div class="page-wrapper">
			<surveys-header :isList="true"></surveys-header>
			<div class="page-body">		
				<div class="card">
					<div class="card-header">
						<h5>Surveys</h5>
						<form class="f-right">
							<div class="right-icon-control">
								<input type="text" class="form-control search-text" v-model="search" placeholder="Search current page">
							</div>
						</form>				
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
											<th>Id</th>
											<th>Name</th>
											<th>Description</th>
											<th>Office</th>
											<th>Date</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="(survey,i) in surveys" :key="survey.id">
											<td>{{ survey.id }}</td>
											<td>{{ survey.name }}</td>
											<td>{{ survey.description }}</td>
											<td>{{ survey.office_name }}</td>
											<td>{{ survey.created_at }}</td>
											<td>
												<label class="label label-info cursorize" @click="view(survey)" data-toggle="tooltip" data-placement="top" title="View Survey"><i class="ion-search"></i></label>
												<label class="label label-warning cursorize" @click="clone(survey)" data-toggle="tooltip" data-placement="top" title="Close Survey"><i class="ion-ios-copy-outline"></i></label>
												<label class="label label-danger cursorize" @click="confirmDelete(survey)" data-toggle="tooltip" data-placement="top" title="Delete Survey"><i class="ion-close"></i></label>
												<b-modal :id="'confirm-survey-delete-'+i" title="Confirmation" @ok="deleteItem(survey)">
													Are you sure you want to delete this section survey?
												</b-modal>													
											</td>
										</tr>
									</tbody>								
								</table>
								<sly-pagination style="margin-top: 50px;" :currentPage="pagination.current_page" :perPage="pagination.per_page" :lastPage="pagination.last_page" :totalItems="pagination.total" :fetchData="fetchSurveys"></sly-pagination>						
							</div>
						</transition>
					</div>						
				</div>
			</div>
		</div>
		<b-modal :id="'clone-survey'" :title="'Clone '+survey.name" @ok="okClone">
			<form class="needs-validation" novalidate>
				<div class="form-row">
					<div class="form-group col-lg-12">
						<label>Name</label>
						<input type="text" class="form-control" v-model.trim="$v.survey.name.$model" :class="{'is-invalid': $v.survey.name.$error}">
						<div class="invalid-feedback">Name is required</div>					  
					</div>
				</div>
				<div class="form-row">				
					<div class="form-group col-lg-12">
						<label>Description</label>
						<input type="text" class="form-control" v-model.trim="$v.survey.description.$model" :class="{'is-invalid': $v.survey.description.$error}">
						<div class="invalid-feedback">Description is required</div>					  
					</div>
				</div>
				<div class="form-row">				
					<div class="form-group col-lg-12">
						<label>Office</label>
						<select class="form-control" v-model.trim="$v.survey.office.$model" :class="{'is-invalid': $v.survey.office.$error}">
							<option disabled :value="0">Select office</option>
							<option v-for="office in offices" :value="office.id" :key="office.id">{{office.name}}</option>
						</select>
						<div class="invalid-feedback">Office is required</div>					  					  
					</div>					
				</div>
			</form>
		</b-modal>				
	</div>
</template>

<style>

	.cursorize {
		cursor: pointer;
	}

</style>

<script>

	import { required, email, minLength, requiredIf, requiredUnless } from "vuelidate/lib/validators";

	export default {

		name: 'SurveysList',
	
		components: {
			SurveysHeader: () => import(/* webpackChunkName: "SurveysHeader" */'./SurveysHeader'),
			SlyPagination: () => import(/* webpackChunkName: "SlyPagination" */'../components/SlyPagination')
		},

		data() {
			
			return {
				
				search: '',
				pagination: {},
				dataFetched: false,
				survey: {},
				offices: []
			
			}
			
		},

		computed: {
		
			surveys() {
				
				return this.$store.state.surveys.surveys.filter(survey => {
				
					return survey.name.toLowerCase().includes(this.search.toLowerCase()) ||
						   survey.description.toLowerCase().includes(this.search.toLowerCase())
				
				})
			
			}
		
		},
		
		validations: {
			survey: {
				name: {required},
				description: {required},
				office: {required}
			}
		},

		methods: {
		
			fetchSurvey(survey_id) {
			
				return axios.get('api/survey/'+survey_id, this.$store.state.config)
			
			},		

			fetchSurveys(currentPage) {
		
				this.dataFetched = false
		
				axios.get('api/surveys?page='+currentPage, this.$store.state.config).then(response => {
					
					this.$store.commit('surveys',response.data.data)
					this.pagination = response.data.meta
					
					this.dataFetched = true
					$('[data-toggle="tooltip"]').tooltip({trigger: 'hover'})					
					
				}).catch(e => {

					this.dataFetched = true
					
				})
			},
			
			fetchOffices() {
			
				axios.get('api/selections/offices', this.$store.state.config).then(response => {
				
					this.offices = response.data
				
				}).catch(e => {
				
				})
			
			},			
			
			view(survey) {
			
				this.$router.push({name: 'survey_view', params: {survey_id: survey.id}})
			
			},
			
			clone(survey) {
			
				this.fetchOffices()
			
				this.$bvModal.show('clone-survey')
				
				this.fetchSurvey(survey.id).then(response => {
				
					this.survey = response.data.data
				
				}).catch(e => {})
			
			},
			
			okClone() {
			
				this.$root.show()			
			
				// reset ids
				this.survey.id = 0
				
				_.forEach(this.survey.sections, section => {
				
					section.id = 0
					
					_.forEach(section.items, item => {
						
						item.id = 0
						
						_.forEach(item.values, value => {
						
							value.id = 0
							
							_.forEach(value.sub_items, sub_item => sub_item.id = 0)							
						
						})
					
					})
					
					_.forEach(section.aspetcs, aspect => {
					
						aspect.id = 0
						
						_.forEach(aspect.items, item => {
							
							item.id = 0
							
							_.forEach(item.values, value => {
							
								value.id = 0
								
								_.forEach(value.sub_items, sub_item => sub_item.id = 0)							
							
							})
						
						})
					
					})
				
				})

				axios.post('api/survey', this.survey, this.$store.state.config).then(response => {

					this.fetchSurveys(1)
					this.$root.hide()
					// this.$router.push({name: 'surveys_list'})
					this.$parent.$refs.pnotify.show({type: 'success',title: 'Notification', text: 'Survey successfully cloned'})		
					
				}).catch(e => {
					
					this.$root.hide()
					
				})				
			
			},
			
			confirmDelete(survey) {
			
				let index = this.surveys.indexOf(survey)			
			
				this.$bvModal.show('confirm-survey-delete-'+index)			
			
			},
			
			deleteItem(survey) {
			
				this.$parent.show()
			
				let index = this.surveys.indexOf(survey)				
			
				axios.delete('api/survey/'+survey.id, this.$store.state.config).then(response => {
					
					this.fetchSurveys(1)
					this.$parent.hide()
					
				}).catch(e => {
				
					this.$parent.hide()
					
				})			
			
			},			
		
		},

		created() {

		},
	
		mounted() {
		
			this.$parent.hide()
		
		},
		
		beforeRouteEnter (to, from, next) {

			next(vm => {

				const refresh = from.fullPath == '/'
				
				if (refresh) {
				
					vm.$store.dispatch('api_token').then(() => {
					
						vm.fetchSurveys(1)
					
					})
				
				} else {
				
					vm.fetchSurveys(1)
				
				}			

			})

		}
	
	}

</script>