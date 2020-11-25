<template>
	<div>
		<div class="table-reponsive">
			<transition name="fade">		
				<table class="table" v-if="has_values">
					<thead>
						<tr><th v-if="has_display && aspectItem.items[item].text_is_multiple">Required?</th><th v-if="has_display">Display</th><th v-if="has_display">Translation (Optional)</th><th v-if="has_value">Value</th><th v-if="has_highest_lowest">Highest</th><th v-if="has_highest_lowest">Lowest</th><th v-if="has_infographic">Image</th><th v-if="has_min">Min</th><th v-if="has_max">Max</th><th v-if="has_data_type">Data Type</th><th v-if="has_row_type">Row Type</th><th v-if="has_sub">Sub Items</th><th></th></tr>
					</thead>
					<tbody name="list" is="transition-group">
						<tr v-for="(value, vi) in values" :key="value.index">
							<td v-if="has_display && aspectItem.items[item].text_is_multiple">
								<div class="form-check">
									<label class="form-check-label">
										<input class="form-check-input" type="checkbox" v-model="value.required" :disabled="oldSurvey && !onEdit">
									</label>
								</div>									
							</td>
							<td v-if="has_display">
								<div class="form-group">
									<input type="text" class="form-control" v-model="$v.values.$each[vi].display.$model" :class="{'is-invalid': $v.values.$each[vi].display.$error}" :disabled="oldSurvey && !onEdit">
									<div class="invalid-feedback">Display is required</div>
								</div>
							</td>
							<td v-if="has_display">					
								<div class="form-group">
									<input type="text" class="form-control" v-model="value.display_translated" :disabled="oldSurvey && !onEdit">
								</div>
							</td>							
							<td v-if="has_value">
								<div class="form-group">
									<input type="text" class="form-control" v-model="$v.values.$each[vi].siv_value.$model" :class="{'is-invalid': $v.values.$each[vi].siv_value.$error}" :disabled="oldSurvey && !onEdit">
									<div class="invalid-feedback">Value is required</div>								
								</div>
								<span v-if="has_value && has_value_other">Other <input type="checkbox" class="below-above" v-model="value.siv_value_other" :disabled="oldSurvey && !onEdit"></span>
							</td>
							<td v-if="has_highest_lowest">
								<input v-if="vi==0 || vi==values.length-1" type="checkbox" v-model="value.highest" @change="highest(value)" :disabled="oldSurvey && !onEdit">
							</td>
							<td v-if="has_highest_lowest">
								<input v-if="vi==0 || vi==values.length-1" type="checkbox" v-model="value.lowest" @change="lowest(value)" :disabled="oldSurvey && !onEdit">
							</td>							
							<td v-if="has_infographic">
								<div class="images-container">
									<div v-if="value.siv_infographic != null" class="image-container">
										<div class="controls">
											<a href="javascript:;" class="control-btn remove" @click="removeSivIg(section,aspect,item,vi)">
												<i class="ion-trash-a"></i>
											</a>
										</div>														
										<img :id="'saiv_'+section+aspect+item+vi" class="image siv-infographic" :src="value.siv_infographic">
									</div>
									<input type="file" style="display: none;" :id="'upload-saiv-infographic_'+section+aspect+item+vi" @change="sivIg(section,aspect,item,vi)">
									<a v-if="value.siv_infographic == null" href="javascript:;" @click="addSivIg(section,aspect,item,vi)">
										<div class="image-container new">
											<div class="siv-infographic">
												<i class="ion-plus"></i>
											</div>
										</div>
									</a>								
								</div>
							</td>
							<td v-if="has_min">					
								<div class="form-group">
									<input type="text" class="form-control" v-model="$v.values.$each[vi].siv_min.$model" :class="{'is-invalid': $v.values.$each[vi].siv_min.$error}" :disabled="oldSurvey && !onEdit">
									<div class="invalid-feedback">Minimum is required</div>							
								</div>
								Below <input type="checkbox" class="below-above" v-model="value.min_below" :disabled="oldSurvey && !onEdit">
							</td>
							<td v-if="has_max">
								<div class="form-group">
									<input type="text" class="form-control" v-model="$v.values.$each[vi].siv_max.$model" :class="{'is-invalid': $v.values.$each[vi].siv_max.$error}" :disabled="oldSurvey && !onEdit">
									<div class="invalid-feedback">Maximum is required</div>								
								</div>
								Above (and) <input type="checkbox" class="below-above" v-model="value.max_above" :disabled="oldSurvey && !onEdit">
							</td>
							<td v-if="has_data_type">
								<div class="form-group">
									<select class="form-control" v-model.trim="$v.values.$each[vi].data_type.$model" :class="{'is-invalid': $v.values.$each[vi].data_type.$error}" :disabled="oldSurvey && !onEdit">
										<option disabled :value="0">Select type</option>
										<option v-for="data_type in text_input_types" :value="data_type.id" :key="data_type.id">{{data_type.description}}</option>
									</select>
									<div class="invalid-feedback">Data type is required</div>
								</div>
							</td>
							<td v-if="has_row_type">
								<div class="form-group">
									<select class="form-control" v-model.trim="$v.values.$each[vi].row_type.$model" :class="{'is-invalid': $v.values.$each[vi].row_type.$error}" :disabled="oldSurvey && !onEdit">
										<option disabled :value="null">Select type</option>
										<option v-for="row_type in multi_rows_row_types" :value="row_type.id" :key="row_type.id">{{row_type.description}}</option>
									</select>
									<div class="invalid-feedback">Row type is required</div>
								</div>						
							</td>
							<td v-if="has_sub">
								<div v-if="multi_row_text(value)">
									<b-button class="btn btn-mini btn-default" v-b-modal="'sub-item-'+section+aspect+item+vi" data-toggle="tooltip" data-placement="top" title="Manage Sub Items for this value" :disabled="!onEdit"><i class="ion-navicon-round"></i></b-button>						
									<aspect-value-sub-items ref="value-sub-items" :section="section" :aspect="aspect" :item="item" :value="vi" :row_type="value.row_type"></aspect-value-sub-items>
								</div>
							</td>
							<td>
								<b-button type="button" class="btn btn-mini btn-danger" @click="confirmDelete(value)" :disabled="!onEdit" data-toggle="tooltip" data-placement="top" title="Delete this Value"><i class="ion-close"></i></b-button>
								<b-modal :id="'confirm-value-delete-'+section+aspect+item+vi" title="Confirmation" @ok="deleteValue(value)">
									Are you sure you want to delete this value?
								</b-modal>							
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="9">
								<b-button class="btn btn-mini btn-info" @click="add(null)" data-toggle="tooltip" data-placement="top" title="Add New Section Item Value" :disabled="!onEdit"><i class="ion-plus"></i></b-button>
							</td>
						</tr>
					</tfoot>				
				</table>
			</transition>
		</div>	
	</div>
</template>

<style scoped>

	i {
		margin-right:0!important;
	}
	
	.below-above {
		margin-top: 5px!important;
	}

</style>

<script>

	import { required, email, minLength, requiredIf, requiredUnless } from "vuelidate/lib/validators";
	import AspectValueSubItems from './AspectValueSubItems'
	import ItemValues from './mixins/ItemValues'	

	export default {
	
		name: 'ItemValues',
		
		mixins: [ItemValues],		
		
		components: {
			AspectValueSubItems
		},		
		
		props: ['section','aspect','item'],
		
		data() {
		
			return {
				value: {},
				old_value: false				
			}
		
		},
		
		computed: {
		
			aspectItem() {
			
				return this.$parent.$parent
			
			},
		
			onEdit() {
			
				return this.$parent.$parent.$parent.$parent.onEdit
			
			},
			
			oldSurvey() {
			
				return this.$parent.$parent.$parent.$parent.oldSurvey			
			
			},
		
			values: {
				get() {
					return this.$store.state.surveys.survey.sections[this.section].aspects[this.aspect].items[this.item].values				
				},
				set(value) {
					this.$store.commit('aspect_item_values',{section: this.section, aspect: this.aspect, item: this.item, values: value})				
				}
			},
			
			has_display() {

				return this.aspectItem.items[this.item].item_type != 3 ||
					(this.aspectItem.items[this.item].item_type == 3 && this.aspectItem.items[this.item].text_is_multiple)

			},			

			has_values() {
			
				return this.aspectItem.items[this.item].item_type > 0
			
			},
			
			has_value() {
				
				return this.aspectItem.items[this.item].item_type == 2 ||
						this.aspectItem.items[this.item].item_type == 4 ||
						this.aspectItem.items[this.item].item_type == 5 ||
						this.aspectItem.items[this.item].item_type == 6
				
			},
			
			has_value_other() {
			
				return this.aspectItem.items[this.item].item_type == 4
			
			},
			
			has_images() {
			
				return this.aspectItem.items[this.item].item_type == 6
			
			},
			
			has_min() {
			
				return this.aspectItem.items[this.item].item_type == 1
			
			},
			
			has_max() {
			
				return this.aspectItem.items[this.item].item_type == 1			
			
			},
			
			has_data_type() {
			
				return this.aspectItem.items[this.item].item_type == 3
			
			},
			
			has_row_type() {
			
				return this.aspectItem.items[this.item].item_type == 7
			
			},
			
			has_sub() {
			
				return this.aspectItem.items[this.item].item_type == 1 ||
						this.aspectItem.items[this.item].item_type == 2 ||
						this.aspectItem.items[this.item].item_type == 3 ||
						this.aspectItem.items[this.item].item_type == 4 ||
						this.aspectItem.items[this.item].item_type == 5 ||			
						this.aspectItem.items[this.item].item_type == 7	

			},
			
			has_infographic() {
			
				return this.aspectItem.items[this.item].item_type == 6 &&
						this.aspectItem.items[this.item].item_presentation == 2
			
			},
			
			has_highest_lowest() {
			
				return this.aspectItem.items[this.item].item_type == 6
			
			}			
		
		},
		
		validations: {
			values: {
				required: requiredIf(function(model) {
					return this.values.length>0
				}),
				$each: {
					display: {required: requiredIf(function(model) {
						return this.has_display
					})},
					siv_value: {required: requiredIf(function(model) {
						return this.has_value && !model.siv_value_other
					})},
					siv_min: {required: requiredIf(function(model) {
						return this.has_min && !model.min_below
					})},
					siv_max: {required: requiredIf(function(model) {
						return this.has_max && !model.max_above
					})},
					data_type: {required: requiredIf(function(model) {
						return this.has_data_type
					})},
					row_type: {required: requiredIf(function(model) {
						return this.has_row_type
					})}
				}
			}
		},		
		
		methods: {
			
			add(value) {
			
				if (this.aspectItem.items[this.item].item_type == 3 && !this.aspectItem.items[this.item].text_is_multiple) {
					if (this.values.length>0) {
						this.$root.$refs.pnotify.show({type: 'warning',title: 'Notification', text: 'Only 1 item is allowed, click Multiple for more than 1 items'})
						return
					}
				}			
			
				if (value==null) {
					let index = 0
					if (this.values.length>0) {
						const lastItem = this.values[this.values.length-1]
						index = lastItem.index
					}				
					let value = {
						index: ++index,
						id: 0,
						display: '',
						display_translated: '',
						siv_value: '',
						siv_value_other: false,
						siv_min: '',
						min_below: false,
						siv_max: '',
						max_above: false,
						data_type: null,
						row_type: null,
						siv_infographic: null,
						highest: false,
						lowest: false,
						required: false,						
						sub_items: []
					}
					this.values.push(value)
					this.old_value = false				
				} else {
					this.value = value
					this.old_value = true				
				}
				
				this.$nextTick(() => {
					$('[data-toggle="tooltip"]').tooltip({trigger : 'hover'})
				})					
			
			},
			
			confirmDelete(value) {
			
				let index = this.values.indexOf(value)			
			
				if (this.oldSurvey && value.id > 0) {
					this.$bvModal.show('confirm-value-delete-'+this.section+this.aspect+this.item+index)	
				} else {
					this.values.splice(index,1)
				}			
			
			},
			
			deleteValue(value) {
			
				let index = this.values.indexOf(value)
			
				axios.delete('api/survey/section/aspect/item/value/'+value.id).then(response => {
					
					// this.$store.dispatch('fetchSurvey')
					this.values.splice(index,1)
					
				}).catch(e => {
					
					
				})				
			
			},
			
			row_type_is_headers(value) {
			
				return (this.aspectItem.items[this.item].item_type == 7) && value.row_type == 1
			
			},
			
			text_input_data_type(value) {

				return (this.aspectItem.items[this.item].item_type == 3) && value.data_type == 4
			
			},

			multi_row_text(value) {
			
				return this.aspectItem.items[this.item].item_type == 1 ||
						this.aspectItem.items[this.item].item_type == 2 ||
						((this.aspectItem.items[this.item].item_type == 3) && value.data_type == 4) ||
						this.aspectItem.items[this.item].item_type == 4 ||
						this.aspectItem.items[this.item].item_type == 5 ||			
						((this.aspectItem.items[this.item].item_type == 7) && value.row_type == 1)			
			
			},			
			
			addSivIg(s,a,i,vi) {
			
				$('#upload-saiv-infographic_'+s.toString()+a.toString()+i.toString()+vi.toString())[0].click();
			
			},
			
			sivIg(s,a,i,vi) {

				let file = ($('#upload-saiv-infographic_'+s+a+i+vi)[0].files)[0];
				
				let type = file.type.split("/");
				
				let valid_files = ["jpeg","png"];			
				if (!valid_files.includes(type[1])) return;

				let eid = "#saiv_"+s+a+i+vi;
				// var preview = document.querySelector(eid);
				let reader  = new FileReader();

				reader.addEventListener("load", () => {
					// preview.src = reader.result;
					this.values[vi].siv_infographic = reader.result;
				}, false);

				if (file) {
					reader.readAsDataURL(file);
				};			
			
			},
			
			removeSivIg(s,a,i,vi) {

				if (!this.onEdit) return
			
				this.values[vi].siv_infographic = null
				$('#upload-saiv-infographic_'+s+a+i+vi).val(null)
			
			},
			
			valuesInvalid() {
			
				this.aspectItem.items[this.item].values_invalid = this.$v.values.$error
			
			},
			
			highest(value) {
			
				if (value.highest) value.lowest = false
			
			},
			
			lowest(value) {
				
				if (value.lowest) value.highest = false
			
			}			
			
		},
		
		created() {
		
		},
		
		mounted() {		
		
			this.$nextTick(() => {
				if (!this.oldSurvey) this.values = []			
				$('[data-toggle="tooltip"]').tooltip({trigger : 'hover'})
			})		
		
		}
	
	}

</script>