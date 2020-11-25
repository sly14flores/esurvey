<template>
	<div class="section-aspects">
		<h4 class="sub-title">
			Section Aspects <b-button class="btn btn-mini btn-info" @click="aspectName(null)" data-toggle="tooltip" data-placement="top" title="Add New Section Aspect" :disabled="!onEdit"><i class="ion-plus"></i></b-button>
		</h4>		
		<ul name="tabs" is="transition-group" class="nav nav-tabs md-tabs tabs-left b-none" role="tablist">
			<li class="nav-item" v-for="(aspect, ai) in aspects" :key="aspect.index">
				<a class="nav-link" :class="{'active': active_aspect==ai}" data-toggle="tab" :href="'#aspect-'+ai" role="tab" @click="active_aspect=ai">{{aspect.aspect_name}}</a>
				<div class="slide"></div>
			</li>
		</ul>
		<div name="tabs" is="transition-group" class="tab-content tabs-left-content card-block" style="width: 100%">
			<div v-for="(aspect, ai) in aspects" :key="aspect.index" class="tab-pane" :class="{'active': active_aspect==ai}" :id="'aspect-'+ai" role="tabpanel">
				<div class="f-right">
					<b-button type="button" class="btn btn-mini btn-success" @click="aspectName(aspect)" :disabled="!onEdit" data-toggle="tooltip" data-placement="top" title="Edit this Aspect"><i class="ion-edit"></i></b-button>
					<b-button type="button" class="btn btn-mini btn-warning" @click="clone(aspect)" :disabled="!onEdit" data-toggle="tooltip" data-placement="top" title="Clone this Aspect"><i class="ion-ios-copy-outline"></i></b-button>
					<b-button type="button" class="btn btn-mini btn-danger" @click="confirmDelete(aspect)" :disabled="!onEdit" data-toggle="tooltip" data-placement="top" title="Delete this Aspect"><i class="ion-close"></i></b-button>
					<b-modal :id="'confirm-aspect-delete-'+section+ai" title="Confirmation" @ok="deleteSection(aspect)">
						Are you sure you want to delete this aspect?
					</b-modal>									
				</div>
				<div class="clearfix"></div>
				<aspect-items ref="aspect-items" :section="section" :aspect="ai"></aspect-items>
			</div>
		</div>
		<b-modal ref="aspect-name" title="Aspect Name" @ok="tryAdd">
			<form class="needs-validation" novalidate @submit.stop.prevent="add">
				<div class="form-group">
					<input type="text" class="form-control" v-model.trim="$v.aspect.aspect_name.$model" :class="{'is-invalid': $v.aspect.$error}" placeholder="Name">
					<div class="invalid-feedback">Aspect name is required</div>
				</div>
				<div class="form-group">
					<input type="text" class="form-control" v-model="aspect.translated" placeholder="Translation (Optional)">
				</div>
			</form>
		</b-modal>			
	</div>
</template>

<style scoped>

	.section-aspects {
	
		margin-top: 30px;
	
	}
	
	i {
		margin-right:0!important;
	}	

</style>

<script>

	import { required, email, minLength, requiredIf, requiredUnless } from "vuelidate/lib/validators";	
	import AspectItems from './AspectItems'

	export default {
	
		name: 'SectionAspect',
		
		components: {
			AspectItems
		},			
		
		data() {
		
			return {
				active_aspect: 0,
				aspect: {},
				old_aspect: false
			}
		
		},		
		
		props: ['section'],
		
		computed: {
		
			onEdit() {
			
				return this.$parent.$parent.onEdit
			
			},		
		
			oldSurvey() {
			
				return this.$parent.$parent.oldSurvey			
			
			},

			aspects: {
				get() {
					return this.$store.state.surveys.survey.sections[this.section].aspects
				},
				set(value) {
					this.$store.commit('aspects',{section: this.section, aspects: value})
				}
			}			
		
		},
		
		validations: {
			aspect: {
				aspect_name: {required}
			}
		},		
		
		methods: {
		
			aspectName(aspect) {

				if (aspect==null) {
					this.aspect = {
						id: 0,
						aspect_name: '',
						translated: '',						
						items: []
					}
					this.old_aspect = false
				} else {
					this.aspect = aspect
					this.old_aspect = true
				}
				
				this.$v.aspect.$reset()
				this.$refs['aspect-name'].show()
			
			},

			tryAdd(bvModalEvt) {

				bvModalEvt.preventDefault()
				this.add()

			},		
		
			add() {
			
				this.$v.aspect.$touch()
				
				if (this.$v.aspect.$invalid) return;
			
				if (this.old_aspect) {
			
					let index = this.aspects.indexOf(this.aspect)
					
					this.aspects[index] = this.aspect
				
				} else {
				
					let new_index = 0
					if (this.aspects.length>0) {
						const lastItem = this.aspects[this.aspects.length-1]
						new_index = lastItem.index						
					}
					
					this.aspect.index = ++new_index				
					
					this.aspects.push(this.aspect)
				
				}
				
				this.$nextTick(() => {
					this.$refs['aspect-name'].hide()
					$('[data-toggle="tooltip"]').tooltip({trigger : 'hover'})					
				})			
			
			},
			
			clone(aspect) {
			
				let clone_aspect = _.cloneDeep(aspect)

				let new_index = 0
				if (this.aspects.length>0) {
					const lastItem = this.aspects[this.aspects.length-1]
					new_index = lastItem.index						
				}
			
				clone_aspect.index = ++new_index
				
				// reset ids
				_.forEach(clone_aspect.items, item => {
				
					item.id = 0
					
					_.forEach(item.values, value => {
					
						value.id = 0
						
						_.forEach(value.sub_items, sub_item => sub_item.id = 0)							
					
					})
				
				})			
				
				clone_aspect.id = 0
				clone_aspect.aspect_name = clone_aspect.aspect_name+ ' Copy'
				
				this.aspects.push(clone_aspect)				
			
			},
			
			confirmDelete(aspect) {
			
				let index = this.aspects.indexOf(aspect)			
			
				if (this.oldSurvey && aspect.id > 0) {
					this.$bvModal.show('confirm-aspect-delete-'+this.section+index)			
				} else {
					this.aspects.splice(index,1)
					if (index>0) this.active_aspect = index-1
				}		
			
			},
			
			deleteSection(aspect) {
			
				let index = this.aspects.indexOf(aspect)		
			
				axios.delete('api/survey/section/aspect/'+aspect.id).then(response => {
					
					// this.$store.dispatch('fetchSurvey')
					this.aspects.splice(index,1)
					if (index>0) this.active_aspect = index-1
					
				}).catch(e => {
					
					
				})
			
			}			
		
		},
		
		created() {
		
		},
		
		mounted() {
			
			this.$nextTick(() => {
				if (!this.oldSurvey) this.aspects = []			
				$('[data-toggle="tooltip"]').tooltip({trigger : 'hover'})
			})			
		
		}		
	
	}

</script>