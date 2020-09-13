<template>
	<div>
		<div class="m-b-20">
			<h4 class="sub-title">
				Sections
				<b-button class="btn btn-mini btn-success" @click="sectionName(null)" data-toggle="tooltip" data-placement="top" title="Add New Section" :disabled="!onEdit"><i class="ion-plus"></i></b-button>
			</h4>
			<div class="row">
				<div class="col-lg-12">
					<ul name="tabs" is="transition-group" class="nav nav-tabs" role="tablist">
						<li v-for="(section, si) in sections" :key="section.index" class="nav-item">
							<a class="nav-link" :class="{'active': active_section==si}" data-toggle="tab" :href="'#section-'+si" role="tab" :aria-controls="'section-'+si" :aria-selected="active_section==si" @click="active_section=si">{{section.section_name}}</a>
						</li>
					</ul>
					<div name="tabs" is="transition-group" class="tab-content">
						<div v-for="(section, si) in sections" :key="section.index" :class="{'show': active_section==si, 'active': active_section==si}" class="tab-pane fade" :id="'#section-'+si" role="tabpanel" :aria-labelledby="'section-'+si+'-tab'">
							<div class="f-right" style="margin-top: 3px">
								<b-button type="button" class="btn btn-mini btn-success" @click="sectionName(section)" :disabled="!onEdit" data-toggle="tooltip" data-placement="top" title="Edit this Section"><i class="ion-edit"></i></b-button>
								<b-button type="button" class="btn btn-mini btn-warning" @click="clone(section)" :disabled="!onEdit" data-toggle="tooltip" data-placement="top" title="Clone this Section"><i class="ion-ios-copy-outline"></i></b-button>
								<b-button type="button" class="btn btn-mini btn-danger" @click="confirmDelete(section)" :disabled="!onEdit" data-toggle="tooltip" data-placement="top" title="Delete this Section"><i class="ion-close"></i></b-button>
								<b-modal :id="'confirm-section-delete-'+si" title="Confirmation" @ok="deleteSection(section)">
									Are you sure you want to delete this section?
								</b-modal>									
							</div>
							<div class="clearfix"></div>
							<section-items ref="section-items" :section="si"></section-items>
							<section-aspects ref="section-aspects" :section="si"></section-aspects>
						</div>
					</div>
				</div>
			</div>
		</div>
		<b-modal ref="section-name" title="Section" @ok="tryAdd">
			<form class="needs-validation" novalidate @submit.stop.prevent="add">
				<div class="form-group">
					<input type="text" class="form-control" v-model.trim="$v.section.section_name.$model" :class="{'is-invalid': $v.section.$error}" placeholder="Name">
					<div class="invalid-feedback">Section name is required</div>
				</div>
				<div class="form-group">
					<input type="text" class="form-control" v-model="section.translated" placeholder="Translation (Optional)">
				</div>
				<div class="form-group">				
					<div class="border-checkbox-group border-checkbox-group-info">
						<input class="border-checkbox" type="checkbox" id="section-is-hidden" v-model="section.is_hidden">
						<label class="border-checkbox-label" for="section-is-hidden'">Hidden section name in coduct survey form</label>
					</div>
				</div>				
			</form>
		</b-modal>		
	</div>
</template>

<style scoped>

	i {
		margin-right:0!important;
	}

</style>

<script>

	import { required, email, minLength, requiredIf, requiredUnless } from "vuelidate/lib/validators";
	import SectionItems from './SectionItems'
	import SectionAspects from './SectionAspects'		

	export default {
	
		name: 'SurveySections',
		
		components: {
			SectionItems,
			SectionAspects
		},		
		
		data() {
		
			return {
				active_section: 0,
				section: {},
				old_section: false
			}
		
		},
		
		computed: {
		
			onEdit() {
			
				return this.$parent.onEdit
			
			},
			
			oldSurvey() {
			
				return this.$parent.oldSurvey			
			
			},		
		
			sections: {
				get() {
					return this.$store.state.surveys.survey.sections
				},
				set(value) {
					this.$store.commit('sections',value)
				}
			}
		
		},
		
		validations: {
			section: {
				section_name: {required}
			}
		},
		
		methods: {
		
			sectionName(section) {

				if (section==null) {
					this.section = {
						id: 0,
						section_name: '',
						translated: '',
						is_hidden: false,
						items: [],
						aspects: []
					}
					this.old_section = false
				} else {
					this.section = section
					this.old_section = true
				}
				
				this.$v.section.$reset()
				this.$refs['section-name'].show()
			
			},

			tryAdd(bvModalEvt) {

				bvModalEvt.preventDefault()
				this.add()

			},
		
			add() {
			
				this.$v.section.$touch()
				
				if (this.$v.section.$invalid) return;
			
				if (this.old_section) {
			
					let index = this.sections.indexOf(this.section)
					
					this.sections[index] = this.section
				
				} else {
				
					let new_index = 0
					if (this.sections.length>0) {
						const lastItem = this.sections[this.sections.length-1]
						new_index = lastItem.index						
					}
					
					this.section.index = ++new_index
					this.sections.push(this.section)
				
				}
				
				this.$nextTick(() => {
					this.$refs['section-name'].hide()
					$('[data-toggle="tooltip"]').tooltip({trigger: 'hover'})					
				})
			
			},
			
			clone(section) {

				let clone_section = _.cloneDeep(section)

				let new_index = 0
				if (this.sections.length>0) {
					const lastItem = this.sections[this.sections.length-1]
					new_index = lastItem.index						
				}
			
				clone_section.index = ++new_index
				
				// reset ids
				_.forEach(clone_section.items, item => {
				
					item.id = 0
					
					_.forEach(item.values, value => {
					
						value.id = 0
						
						_.forEach(value.sub_items, sub_item => sub_item.id = 0)							
					
					})
				
				})
				
				_.forEach(clone_section.aspects, aspect => {
				
					aspect.id = 0
					
					_.forEach(aspect.items, item => {
					
						item.id = 0
						
						_.forEach(item.values, value => {
						
							value.id = 0
							
							_.forEach(value.sub_items, sub_item => sub_item.id = 0)							
						
						})
					
					})
				
				})				
				
				clone_section.id = 0
				clone_section.section_name = clone_section.section_name+ ' Copy'
				
				this.sections.push(clone_section)
			
			},
			
			confirmDelete(section) {
			
				let index = this.sections.indexOf(section)			
			
				if (this.oldSurvey && section.id > 0) {
					this.$bvModal.show('confirm-section-delete-'+index)			
				} else {
					this.sections.splice(index,1)
					if (index>0) this.active_section = index-1
				}		
			
			},
			
			deleteSection(section) {
			
				let index = this.sections.indexOf(section)
			
				axios.delete('api/survey/section/'+section.id, this.$store.state.config).then(response => {
					
					// this.$store.dispatch('fetchSurvey')
					this.sections.splice(index,1)
					if (index>0) this.active_section = index-1
					
				}).catch(e => {
					
					
				})
			
			}
		
		},

		created() {
		
		},
		
		mounted() {
			
			this.$nextTick(() => {
				if (!this.oldSurvey) this.sections = []			
				$('[data-toggle="tooltip"]').tooltip({trigger: 'hover'})
			})
		
		}
	
	}

</script>