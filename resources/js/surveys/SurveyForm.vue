<template>
	<div>
		<div class="page-wrapper">
			<surveys-header :isList="false"></surveys-header>
			<div class="page-body">	
				<div class="card">
					<div class="card-header">
						<h5>Survey Form</h5>
						<form class="f-right">
							<div class="right-icon-control">
								<button type="button" class="btn btn-primary btn-sm" @click="edit" v-if="oldSurvey">{{(onEdit)?'Cancel':'Edit'}}</button>
								<button type="button" class="btn btn-danger btn-sm" @click="confirmDelete" v-if="oldSurvey">Delete</button>
							</div>
						</form>					
					</div>
					<div class="card-block">
						<form class="needs-validation" novalidate>
							<div class="form-row">
								<div class="form-group col-lg-4">
									<label>Name</label>
									<input type="text" class="form-control" v-model.trim="$v.survey.name.$model" :class="{'is-invalid': $v.survey.name.$error}" :disabled="oldSurvey && !onEdit">
									<div class="invalid-feedback">Name is required</div>					  
								</div>
								<div class="form-group col-lg-4">
									<label>Description</label>
									<input type="text" class="form-control" v-model="survey.description" :disabled="oldSurvey && !onEdit">
								</div>
								<div class="form-group col-lg-4">
									<label>Office</label>
									<select class="form-control" v-model.trim="$v.survey.office.$model" :class="{'is-invalid': $v.survey.office.$error}" :disabled="oldSurvey && !onEdit">
										<option disabled :value="0">Select office</option>
										<option v-for="office in offices" :value="office.id" :key="office.id">{{office.name}}</option>
									</select>
									<div class="invalid-feedback">Office is required</div>					  					  
								</div>								
							</div>
							<div class="form-row">
								<div class="form-group col-lg-4">
									<div class="form-check add-item">
										<label class="form-check-label">
											<input class="form-check-input" type="checkbox" v-model="survey.include_office" :disabled="oldSurvey && !onEdit"> Include office
										</label>
									</div>									
								</div>
							</div>
							<introductions ref="introductions"></introductions>
							<survey-sections ref="survey-sections"></survey-sections>
							<div class="f-right m-t-20">
								<button type="button" class="btn btn-info btn-sm" @click="confirmAdd" v-if="!oldSurvey">Save</button>
								<button type="button" class="btn btn-info btn-sm" @click="confirmUpdate" v-if="oldSurvey" :disabled="!onEdit">Update</button>
								<button type="button" class="btn btn-warning btn-sm" @click="close">{{(oldSurvey)?'Close':'Cancel'}}</button>
							</div>							
						</form>
					</div>
				</div>
			</div>
		</div>
		<b-modal ref="confirm-add" title="Confirmation" @ok="save">
			Confirm survey add?
		</b-modal>
		<b-modal ref="confirm-update" title="Confirmation" @ok="update">
			Are you sure you want to update this survey?
		</b-modal>		
		<b-modal ref="confirm-delete" title="Confirmation" @ok="deleteSurvey">
			Are you sure you want to delete this survey?
		</b-modal>		
	</div>
</template>

<style>

	.tabs-enter-active, .tabs-leave-active {
		transition: all 1s;
	}
	.tabs-enter, .tabs-leave-to /* .tabs-leave-active below version 2.1.8 */ {
		opacity: 0;
		transform: translateY(-30px);
	}
	
	.list-enter-active, .list-leave-active {
		transition: all 1s;
	}
	.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
		opacity: 0;
		transform: translateY(30px);
	}	

	.fade-enter-active, .fade-leave-active {
		transition: opacity 1s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}

</style>

<script>

	import { required, email, minLength, requiredIf, requiredUnless } from "vuelidate/lib/validators";
	import SurveysHeader from './SurveysHeader'
	import Introductions from './Introductions'
	import SurveySections from './SurveySections'

	export default {
		
		name: 'SurveyForm',
	
		components: {
			SurveysHeader,
			Introductions,
			SurveySections
		},
		
		data() {
		
			return {
		
				onEdit: false,
				offices: []
				
			}
		
		},
		
		computed: {
		
			survey: {
				get() {
					return this.$store.state.surveys.survey
				},
				set(value) {
					this.$store.commit('survey',value)
				}
			},
			
			oldSurvey() {
			
				return this.$route.params.hasOwnProperty('survey_id')
			
			},			
		
		},
		
		validations: {
			survey: {
				name: {required},
				office: {required}
			}
		},
		
		methods: {
		
			edit() {
			
				this.onEdit = !this.onEdit
			
			},
			
			close() {
			
				this.$store.commit('survey',{})
				this.$router.push({name: 'surveys_list'})			
			
			},
			
			validate() {
			
				let validations = []
				
				this.$v.survey.$touch()
				
				validations.push({key: 0, form: 'survey', invalid: this.$v.survey.$invalid})
				
				// Introductions
				this.$refs['introductions'].$v.introductions.$touch()
				validations.push({key: 0, form: 'introductions', invalid: this.$refs['introductions'].$v.introductions.$invalid})			
				
				// Section Items
				if (this.$refs['survey-sections'].$refs.hasOwnProperty('section-items')) {
				
					this.$refs['survey-sections'].$refs['section-items'].forEach((section_items,sii) => {
						
						section_items.$v.items.$touch()
						validations.push({key: sii, form: 'section_items', invalid: section_items.$v.items.$invalid})
						
						if (!_.isEmpty(section_items.$refs)) {
						
							section_items.$refs['item-values'].forEach((item_values,ivi) => {
							
								item_values.$v.values.$touch()
								validations.push({key: ivi, form: 'item_values', invalid: item_values.$v.values.$invalid})
								
								item_values.valuesInvalid()
								
								if (!_.isEmpty(item_values.$refs)) {
								
									item_values.$refs['value-sub-items'].forEach((value_sub_items,vsii) => {
										
										if (value_sub_items.$v.sub_items.$model.length>0) {
										
											value_sub_items.$v.sub_items.$touch()		
											validations.push({key: vsii, form: 'value_sub_items', invalid: value_sub_items.$v.sub_items.$invalid})
											
										}
									
									})
								
								}
							
							})
						
						}

					})
					
				}
				
				// Section Aspect
				if (this.$refs['survey-sections'].$refs.hasOwnProperty('section-aspects')) {
					
					this.$refs['survey-sections'].$refs['section-aspects'].forEach(function(section_aspects,sai) {
						
						if (section_aspects.$refs.hasOwnProperty('aspect-items')) {
							
							section_aspects.$refs['aspect-items'].forEach(function(aspect_items,aii) {
								
								aspect_items.$v.items.$touch()
								validations.push({key: aii, form: 'aspect_items', invalid: aspect_items.$v.items.$invalid})								
								
								if (!_.isEmpty(aspect_items.$refs)) {
									
									aspect_items.$refs['item-values'].forEach((aspect_item_values,ivi) => {
									
										aspect_item_values.$v.values.$touch()
										validations.push({key: ivi, form: 'aspect_item_values', invalid: aspect_item_values.$v.values.$invalid})
										
										aspect_item_values.valuesInvalid()
										
										if (!_.isEmpty(aspect_item_values.$refs)) {
										
											aspect_item_values.$refs['value-sub-items'].forEach((aspect_value_sub_items,vsii) => {
												
												if (aspect_value_sub_items.$v.sub_items.$model.length>0) {
												
													aspect_value_sub_items.$v.sub_items.$touch()		
													validations.push({key: vsii, form: 'aspect_value_sub_items', invalid: aspect_value_sub_items.$v.sub_items.$invalid})
													
												}
											
											})
										
										}
									
									})
									
								}
								
							})
							
						}
						
					})
				
				}
				
				let valid = validations.every(validation => validation.invalid == false)
				
				if (!valid) this.$parent.$refs.pnotify.show({type: 'warning',title: 'Notification', text: 'Please finish filling up required fields'})
				
				return valid
			
			},

			confirmAdd() {
				
				let valid = this.validate()

				if (!valid) return;	
			
				this.$refs['confirm-add'].show()
			
			},
			
			save() {
				
				this.$root.show()

				axios.post('api/survey', this.$store.state.surveys.survey, this.$store.state.config).then(response => {

					this.$root.hide()
					this.$router.push({name: 'surveys_list'})
					this.$parent.$refs.pnotify.show({type: 'success',title: 'Notification', text: 'New survey successfully added'})		
					
				}).catch(e => {
					
					this.$root.hide()
					
				})
			
			},
			
			confirmUpdate() {

				let valid = this.validate()

				if (!valid) return;
			
				this.$refs['confirm-update'].show()	
			
			},
			
			update() {
			
				this.$root.show()

				axios.put('api/survey/'+this.$store.state.surveys.survey.id, this.$store.state.surveys.survey, this.$store.state.config).then(response => {

					this.$root.hide()
					// this.$router.push({name: 'surveys_list'})
					this.onEdit = false
					this.fetchSurvey(this.$store.state.surveys.survey.id)
					this.$parent.$refs.pnotify.show({type: 'success',title: 'Notification', text: 'Survey info successfully updated'})
					
				}).catch(e => {
					
					this.$root.hide()
					
				})				
			
			},

			confirmDelete() {
			
				this.$refs['confirm-delete'].show()			
			
			},
			
			deleteSurvey() {
			
				this.$root.show()

				axios.delete('api/survey/'+this.$store.state.surveys.survey.id, this.$store.state.config).then(response => {

					this.$root.hide()
					this.$parent.$refs.pnotify.show({type: 'success',title: 'Notification', text: "Survey info successfully deleted"})
					this.$router.push({name: 'surveys_list'})
					
				}).catch(e => {
					
					this.$root.hide()
					
				})				
			
			},
		
			fetchSurvey(survey_id) {
			
				axios.get('api/survey/'+survey_id, this.$store.state.config).then(response => {

					this.$store.commit('survey',response.data.data)
					
					
					
				}).catch(e => {
					
					this.$router.push({name: 'surveys_list'})
					
				})
			
			},

			fetchOffices() {
			
				axios.get('api/selections/offices', this.$store.state.config).then(response => {
				
					this.offices = response.data
				
				}).catch(e => {
				
				})
			
			}
		
		},
		
		created() {
		
			this.fetchOffices()		
		
		},
	
		mounted() {

			this.$nextTick(() => {
				if (!this.oldSurvey) this.onEdit = true
				$('[data-toggle="tooltip"]').tooltip({trigger: 'hover'})
			})
		
		},
		
		beforeRouteEnter (to, from, next) {

			next(vm => {

				const refresh = from.fullPath == '/'

				if (vm.$route.params.hasOwnProperty('survey_id')) {
				
					if (refresh) {
					
						vm.$store.dispatch('api_token').then(() => {			

							vm.fetchSurvey(vm.$route.params.survey_id)
						
						})
						
					} else {
					
						vm.fetchSurvey(vm.$route.params.survey_id)
					
					}
					
				} else {
				
					vm.$store.commit('survey',{
						id: 0,
						name: null,
						description: null,
						office: vm.$store.state.profile.office,
						include_office: false,
						introductions: [],
						sections: []
					})
					
				}

			})

		}

	}

</script>