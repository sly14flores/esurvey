<template>
	<div>
		<h4 class="sub-title">
			Section Items
		</h4>
		<div class="row">
			<div class="col-lg-12">
				<div id="accordion" name="list" is="transition-group">
					<div class="card mb-0" v-for="(item, ii) in items" :key="item.index">
						<div class="card-header header-pads" :id="'item-heading-'+section+ii">
						  <h5 class="mb-0">
							<button class="btn btn-link" data-toggle="collapse" :data-target="'#item-'+section+ii" :aria-expanded="ii==active_item" :aria-controls="'item-'+section+ii">
							  Section Item #{{ii+1}} <label class="label label-danger" v-if="$v.items.$each[ii].$error || item.values_invalid">Please fill up required fields</label>
							</button>						
						  </h5>
							<div class="ml-20 form-check add-item">
								<label class="form-check-label">
									<input class="form-check-input" type="checkbox" v-model="item.required" :disabled="oldSurvey && !onEdit"> Required
								</label>
								<label class="form-check-label ml5">
									<input class="form-check-input" type="checkbox" v-model="item.is_shown" :disabled="oldSurvey && !onEdit"> Show?
								</label>								
							</div>						  
						</div>
						<div :id="'item-'+section+ii" class="collapse" :class="{'show': ii==active_item}" :aria-labelledby="'item-heading-'+section+ii" data-parent="#accordion">
							<div class="card-body">
								<div class="f-right">
									<b-button type="button" class="btn btn-mini btn-warning" @click="clone(item)" :disabled="!onEdit" data-toggle="tooltip" data-placement="top" title="Clone Section Item"><i class="ion-ios-copy-outline"></i></b-button>
									<b-button type="button" class="btn btn-mini btn-danger" @click="confirmDelete(item)" :disabled="!onEdit" data-toggle="tooltip" data-placement="top" title="Delete this Section Item"><i class="ion-close"></i></b-button>
									<b-modal :id="'confirm-item-delete-'+section+ii" title="Confirmation" @ok="deleteItem(item)">
										Are you sure you want to delete this section item?
									</b-modal>										
								</div>
								<div class="clearfix"></div>								
								<form class="needs-validation" novalidate>
									<div class="form-row">
										<div class="form-group col-lg-4">
										  <label>Name/Question</label>
										  <textarea rows="5" class="form-control" v-model.trim="$v.items.$each[ii].item_name.$model" :class="{'is-invalid': $v.items.$each[ii].item_name.$error}" :disabled="oldSurvey && !onEdit"></textarea>
										  <div class="invalid-feedback">Name is required</div>					  
										</div>
										<div class="form-group col-lg-4">
										  <label>Translation (Optional)</label>
										  <textarea rows="5" class="form-control" v-model="item.translated" :disabled="oldSurvey && !onEdit"></textarea>
										</div>							
										<div class="form-group col-lg-4">
											<label>Type</label>
											<select class="form-control" v-model.trim="$v.items.$each[ii].item_type.$model" :class="{'is-invalid': $v.items.$each[ii].item_type.$error}" :disabled="oldSurvey && !onEdit" @change="item_type_selected(item)">
												<option disabled :value="null">Select type</option>
												<option v-for="item_type in item_types" :value="item_type.id" :key="item_type.id">{{item_type.description}}</option>
											</select>
											<div class="form-check add-item" v-if="item.is_text">
												<label class="form-check-label">
													<input class="form-check-input" type="checkbox" v-model="item.text_is_multiple" :disabled="oldSurvey && !onEdit"> Multiple
												</label>
											</div>											
											<div class="invalid-feedback">Type is required</div>
											<div class="form-group mt-1" v-if="item.item_type==2">
												<label>Maximum selections allowed</label>
												<input class="form-control" type="number" v-model="$v.items.$each[ii].max_checkbox_selections.$model" :class="{'is-invalid': $v.items.$each[ii].max_checkbox_selections.$error}" :disabled="oldSurvey && !onEdit">
												<div class="invalid-feedback">Please enter maximum selections allowed</div>
											</div>											
										</div>
									</div>
									<div class="form-row">
										<div class="form-group col-lg-4" v-if="item.has_presentation">
											<label>Presentation</label>
											<select class="form-control" v-model.trim="$v.items.$each[ii].item_presentation.$model" :class="{'is-invalid': $v.items.$each[ii].item_presentation.$error}" :disabled="oldSurvey && !onEdit" @change="item_presentation_selected(item)">
												<option disabled :value="null">Select presentation</option>
												<option v-for="presentation in presentations" :value="presentation.id" :key="presentation.id">{{presentation.description}}</option>
											</select>
											<div class="invalid-feedback">Presentation is required</div>
										</div>
									</div>
								</form>
								<ul class="nav nav-tabs" role="tablist">
									<li class="nav-item" role="presentation">
										<a class="nav-link active" :id="'values-tab-'+section+ii" data-toggle="tab" :href="'#values-'+section+ii" role="tab" :aria-controls="'values-'+section+ii" aria-selected="true">Values</a>
									</li>
									<li class="nav-item" role="presentation">
										<a class="nav-link" :id="'infographic-tab-'+section+ii" data-toggle="tab" :href="'#infographic-'+section+ii" role="tab" :aria-controls="'infographic-'+section+ii" aria-selected="false">Infographics</a>
									</li>
								</ul>
								<div class="tab-content">
									<div class="tab-pane fade show active" :id="'values-'+section+ii" role="tabpanel" :aria-labelledby="'values-tab-'+section+ii">
										<item-values ref="item-values" :section="section" :item="ii"></item-values>
									</div>
									<div class="tab-pane fade" :id="'infographic-'+section+ii" role="tabpanel" :aria-labelledby="'infographic-tab-'+section+ii">
										<div class="row">
											<div class="col-lg-4">
												<label class="mt-2"><strong>Left</strong></label>
												<div class="images-container">													
													<div v-if="item.item_infographic_left != null" class="image-container">
														<div class="controls">
															<a href="javascript:;" class="control-btn remove" @click="removeSsiIg(section,ii,'item_infographic_left')">
																<i class="ion-trash-a"></i>
															</a>
														</div>
														<img class="image ssi-infographic" :src="item.item_infographic_left">
													</div>
													<input type="file" style="display: none;" :id="'upload-ssi-item_infographic_left_'+section+ii" @change="ssiIg(section,ii,'item_infographic_left')">
													<a v-if="item.item_infographic_left == null" href="javascript:;" @click="addSsiIg(section,ii,'item_infographic_left')">
														<div class="image-container new">
															<div class="ssi-infographic">
																<i class="ion-plus"></i>
															</div>
														</div>
													</a>	
												</div>
											</div>
											<div class="col-lg-4">
												<label class="mt-2"><strong>Right (Mobile only)</strong></label>
												<div class="images-container">													
													<div v-if="item.item_infographic_right != null" class="image-container">
														<div class="controls">
															<a href="javascript:;" class="control-btn remove" @click="removeSsiIg(section,ii,'item_infographic_right')">
																<i class="ion-trash-a"></i>
															</a>
														</div>
														<img class="image ssi-infographic" :src="item.item_infographic_right">
													</div>
													<input type="file" style="display: none;" :id="'upload-ssi-item_infographic_right_'+section+ii" @change="ssiIg(section,ii,'item_infographic_right')">
													<a v-if="item.item_infographic_right == null" href="javascript:;" @click="addSsiIg(section,ii,'item_infographic_right')">
														<div class="image-container new">
															<div class="ssi-infographic">
																<i class="ion-plus"></i>
															</div>
														</div>
													</a>	
												</div>
											</div>
											<div class="col-lg-4">
												<label class="mt-2"><strong>Logo at bottom (Mobile only)</strong></label>
												<div class="images-container">													
													<div v-if="item.item_infographic_bottom_logo != null" class="image-container">
														<div class="controls">
															<a href="javascript:;" class="control-btn remove" @click="removeSsiIg(section,ii,'item_infographic_bottom_logo')">
																<i class="ion-trash-a"></i>
															</a>
														</div>
														<img class="image ssi-infographic" :src="item.item_infographic_bottom_logo">
													</div>
													<input type="file" style="display: none;" :id="'upload-ssi-item_infographic_bottom_logo_'+section+ii" @change="ssiIg(section,ii,'item_infographic_bottom_logo')">
													<a v-if="item.item_infographic_bottom_logo == null" href="javascript:;" @click="addSsiIg(section,ii,'item_infographic_bottom_logo')">
														<div class="image-container new">
															<div class="ssi-infographic">
																<i class="ion-plus"></i>
															</div>
														</div>
													</a>	
												</div>
											</div>											
										</div>
									</div>
								</div>							
							</div>
						</div>
					</div>
				</div>
				<div class="add-item">
					<b-button class="btn btn-mini btn-info" @click="add(null)" data-toggle="tooltip" data-placement="top" title="Add New Section Item" :disabled="!onEdit"><i class="ion-plus"></i></b-button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

	i {
		margin-right:0!important;
	}
	
	.header-pads {
		padding: 5px 0;
	}
	
	.images-container-margins {
		margin-top: 25px;
		margin-left: 25px;
	}
	
	.add-item {
		margin-top: 10px;
	}
	
	.ml-20 {
		margin-left: 20px;
	}

	.ml5 {
		margin-left: 5px;
	}

</style>

<script>

	import { required, email, minLength, requiredIf, requiredUnless } from "vuelidate/lib/validators";
	import ItemValues from './ItemValues'
	import Items from './mixins/Items'

	export default {

		name: 'SurveySections',
		
		mixins: [Items],
		
		components: {
			ItemValues
		},

		props: ['section'],

		data() {
		
			return {
				active_item: 0,
				item: {},
				old_item: false
			}
		
		},

		computed: {
		
			onEdit() {
			
				return this.$parent.$parent.onEdit
			
			},
			
			oldSurvey() {
			
				return this.$parent.$parent.oldSurvey			
			
			},		
			
			items: {
				get() {
					return this.$store.state.surveys.survey.sections[this.section].items
				},
				set(value) {
					this.$store.commit('surveys/items',{section: this.section, items: value})
				}
			}
			
		},

		validations: {
			items: {
				required: requiredIf(function(model) {
					return this.items.length>0
				}),
				$each: {
					// item_name: {required},
					item_name: {required: requiredIf((model) => {
						return model.item_type == 3 && model.text_is_multiple == false
					})},
					item_type: {required},
					item_presentation: {required: requiredIf((model) => {
						return model.item_type == 6
					})},
					max_checkbox_selections: {required: requiredIf((model) => {
						return model.item_type == 2
					})}
				}
			}
		},

		methods: {

			add(item) {
				
				if (item==null) {
					let index = 0
					if (this.items.length>0) {
						const lastItem = this.items[this.items.length-1]
						index = lastItem.index
					}
					let item = {
						index: ++index,
						id: 0,
						required: true,						
						is_shown: true,			
						item_name: '',
						translated: '',
						item_type: null,
						item_presentation: null,
						max_checkbox_selections: null,
						item_infographic: null,
						item_infographic_left: null,
						item_infographic_right: null,
						item_infographic_bottom_logo: null,
						use_images: 0,
						values: [],
						is_text: false,
						text_is_multiple: false,
						has_presentation: false,
						values_invalid: false
					}
					this.items.push(item)
					this.old_item = false
				} else {
					this.item = item
					this.old_item = true
				}
				
				this.$nextTick(() => {
					$('[data-toggle="tooltip"]').tooltip({trigger: 'hover'})
				})				
			
			},
			
			clone(item) {
			
				let clone_item = _.cloneDeep(item)

				let new_index = 0
				if (this.items.length>0) {
					const lastItem = this.items[this.items.length-1]
					new_index = lastItem.index						
				}
			
				clone_item.index = ++new_index
				
				// reset ids
				_.forEach(clone_item.values, value => {
				
					value.id = 0
					
					_.forEach(value.sub_items, sub_item => sub_item.id = 0)							
				
				})
				
				clone_item.id = 0
				clone_item.item_name = clone_item.item_name+ ' Copy'
				
				this.items.push(clone_item)				
			
			},
			
			item_type_selected(item) {
			
				$('[data-toggle="tooltip"]').tooltip({trigger: 'hover'})			
				item.has_presentation = item.item_type == 6
				item.is_text = item.item_type == 3
			
			},
			
			confirmDelete(item) {
			
				let index = this.items.indexOf(item)			
			
				if (this.oldSurvey && item.id > 0) {
					this.$bvModal.show('confirm-item-delete-'+this.section+index)			
				} else {
					this.items.splice(index,1)
				}	
			
			},
			
			deleteItem(item) {
			
				let index = this.items.indexOf(item)				
			
				axios.delete('api/survey/section/item/'+item.id).then(response => {
					
					// this.$store.dispatch('fetchSurvey')
					this.items.splice(index,1)				
					
				}).catch(e => {
					
					
				})			
			
			},
			
			item_presentation_selected(item) {
				
				item.use_images = item.item_presentation == 2
				
			},

			addSsiIg(s,si,prop) {
			
				if (!this.onEdit) return
			
				$('#upload-ssi-'+prop+'_'+s.toString()+si.toString())[0].click();				
			
			},

			ssiIg(s,si,prop) {

				let file = ($('#upload-ssi-'+prop+'_'+s+si)[0].files)[0];

				let type = file.type.split("/");
				
				let valid_files = ["jpeg","png"];
				if (!valid_files.includes(type[1])) return;

				let reader  = new FileReader();

				reader.addEventListener("load", () => {
					this.items[si][prop] = reader.result;
				}, false);

				if (file) {
					reader.readAsDataURL(file);
				};
			
			},

			removeSsiIg(s,si,prop) {

				if (!this.onEdit) return
			
				this.items[si][prop] = null
				$('#upload-ssi-'+prop+'_'+s+si).val(null)
			
			},
			
			checkItems() {
			
				this.items.forEach(item => {
			
					this.item_type_selected(item)
					
				})
				
			}

		},
		
		created() {
		
		},
		
		mounted() {
			
			this.$nextTick(() => {
				if (!this.oldSurvey) {
					this.items = []
				} else {
					this.checkItems()
				}
				$('[data-toggle="tooltip"]').tooltip({trigger: 'hover'})
			})			
		
		}
	
	}

</script>