<template>
	<div>
		<b-modal size="lg" :id="'sub-item-'+section+aspect+item+value" title="Sub Items" ok-only @ok="ok" @hidden="reset">
			<form class="needs-validation" novalidate @submit.stop.prevent="subItems">		
				<div class="table-reponsive">
					<table class="table">
						<thead>
							<tr><th>Display</th><th>Translation (Optional)</th><th v-if="has_value">Value</th><th v-if="has_min">Min</th><th v-if="has_max">Max</th><th></th></tr>
						</thead>
						<tbody name="list" is="transition-group">
							<tr v-for="(sub_item, vsi) in sub_items" :key="sub_item.index">
								<td>
									<div class="form-group">
										<input type="text" class="form-control" v-model="$v.sub_items.$each[vsi].display.$model" :class="{'is-invalid': $v.sub_items.$each[vsi].display.$error}" :disabled="oldSurvey && !onEdit">
										<div class="invalid-feedback">Display is required</div>
									</div>								
								</td>
								<td>
									<div class="form-group">
										<input type="text" class="form-control" v-model="sub_item.display_translated" :disabled="oldSurvey && !onEdit">
									</div>								
								</td>								
								<td v-if="has_value">
									<div class="form-group">
										<input type="text" class="form-control" v-model="$v.sub_items.$each[vsi].vsi_value.$model" :class="{'is-invalid': $v.sub_items.$each[vsi].vsi_value.$error}" :disabled="oldSurvey && !onEdit">
										<div class="invalid-feedback">Value is required</div>								
									</div>
									<span v-if="has_value && has_value_other">Other <input type="checkbox" class="below-above" v-model="sub_item.vsi_value_other" :disabled="oldSurvey && !onEdit"></span>							
								</td>
								<td v-if="has_min">
									<div class="form-group">
										<input type="text" class="form-control" v-model="$v.sub_items.$each[vsi].vsi_min.$model" :class="{'is-invalid': $v.sub_items.$each[vsi].vsi_min.$error}" :disabled="oldSurvey && !onEdit">
										<div class="invalid-feedback">Minimum is required</div>							
									</div>
									Below <input type="checkbox" class="below-above" v-model="sub_item.min_below" :disabled="oldSurvey && !onEdit">							
								</td>
								<td v-if="has_max">
									<div class="form-group">
										<input type="text" class="form-control" v-model="$v.sub_items.$each[vsi].vsi_max.$model" :class="{'is-invalid': $v.sub_items.$each[vsi].vsi_max.$error}" :disabled="oldSurvey && !onEdit">
										<div class="invalid-feedback">Maximum is required</div>								
									</div>
									Above (and) <input type="checkbox" class="below-above" v-model="sub_item.max_above" :disabled="oldSurvey && !onEdit">							
								</td>
								<td>
									<b-button type="button" class="btn btn-mini btn-danger" @click="confirmDelete(sub_item)" :disabled="!onEdit" data-toggle="tooltip" data-placement="top" title="Delete this Sub Item"><i class="ion-close"></i></b-button>
									<b-modal :id="'confirm-sub-item-delete-'+section+aspect+item+value+vsi" title="Confirmation" @ok="deleteSubItem(sub_item)">
										Are you sure you want to delete this sub item?
									</b-modal>									
								</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<td colspan="5">
									<b-button class="btn btn-mini btn-info" @click="add(null)" data-toggle="tooltip" data-placement="top" title="Add New Section Item Value Sub Item" :disabled="!onEdit"><i class="ion-plus"></i></b-button>
								</td>
							</tr>
						</tfoot>
					</table>
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

	export default {
	
		name: 'ValueSubItems',
		
		props: ['section','aspect','item','value','row_type'],
		
		data() {
		
			return {
				sub_item: {},
				old_sub_item: false		
			}
		
		},
		
		computed: {
		
			aspectItem() {
			
				return this.$parent.$parent.$parent.$parent
			
			},
		
			onEdit() {
			
				return this.$parent.$parent.$parent.$parent.$parent.$parent.onEdit
			
			},		
		
			oldSurvey() {
			
				return this.$parent.$parent.$parent.$parent.$parent.$parent.oldSurvey
			
			},
		
			sub_items: {
				get() {
					return this.$store.state.surveys.survey.sections[this.section].aspects[this.aspect].items[this.item].values[this.value].sub_items
				},
				set(value) {
					this.$store.commit('aspect_item_value_sub_items',{section: this.section, aspect: this.aspect, item: this.item, value: this.value, sub_items: value})					
				}
			},

			has_value() {
				
				return this.aspectItem.items[this.item].item_type == 2 ||
						this.aspectItem.items[this.item].item_type == 3 ||
						this.aspectItem.items[this.item].item_type == 4 ||
						this.aspectItem.items[this.item].item_type == 5 ||
						this.aspectItem.items[this.item].item_type == 7
				
			},
			
			has_value_other() {
			
				return this.aspectItem.items[this.item].item_type == 3 ||
						this.aspectItem.items[this.item].item_type == 4
			
			},			

			has_min() {
			
				return this.aspectItem.items[this.item].item_type == 1
			
			},
			
			has_max() {
			
				return this.aspectItem.items[this.item].item_type == 1			
			
			}	
		
		},
		
		validations: {
			sub_items: {
				required: requiredIf(function (model) {
					return (this.$parent.has_sub && this.sub_items.length>0) || (this.$parent.has_row_type && this.row_type == 1 && this.sub_items.length>0)
				}),
				$each: {
					display: {required},
					vsi_value: {required: requiredIf(function(model) {
						return this.has_value
					})},
					vsi_min: {required: requiredIf(function(model) {
						return this.has_min && !model.min_below
					})},					
					vsi_max: {required: requiredIf(function(model) {
						return this.has_max && !model.max_above
					})}
				}
			}
		},
		
		methods: {
		
			add(sub_item) {
			
				if (sub_item==null) {
					let index = this.sub_items.length
					if (this.sub_items.length>0) {
						const lastItem = this.sub_items[this.sub_items.length-1]
						index = lastItem.index
					}				
					let sub_item = {
						index: ++index,
						id: 0,
						display: '',
						display_translated: '',						
						vsi_value: '',
						vsi_value_other: false,
						vsi_min: '',
						min_below: false,
						vsi_max: '',
						max_above: false			
					}
					this.sub_items.push(sub_item)
					this.old_sub_item = false
				} else {
					this.sub_item = sub_item
					this.old_sub_item = true				
				}
			
			},
			
			ok(bvModalEvt) {
			
				bvModalEvt.preventDefault()
				this.subItems()
			
			},
			
			subItems() {
			
				if (this.sub_items.length>0) {
					this.$v.sub_items.$touch()
				
					if (this.$v.sub_items.$invalid) return;
				}

				this.$nextTick(() => {
					this.$bvModal.hide('sub-item-'+this.section+this.aspect+this.item+this.value)
					$('[data-toggle="tooltip"]').tooltip({trigger : 'hover'})					
				})
			
			},
			
			reset() {
				
				this.sub_items = this.sub_items.filter((sub_item,i) => {
				
					return (sub_item.id == 0 && !this.$v.sub_items.$each[i].$invalid) || (sub_item.id > 0)
				
				})
				
			},
			
			confirmDelete(sub_item) {
			
				let index = this.sub_items.indexOf(sub_item)			
			
				if (this.oldSurvey && sub_item.id > 0) {
					this.$bvModal.show('confirm-sub-item-delete-'+this.section+this.aspect+this.item+this.value+index)				
				} else {
					this.sub_items.splice(index,1)
				}
			
			},
			
			deleteSubItem(sub_item) {
			
				let index = this.sub_items.indexOf(sub_item)
			
				axios.delete('api/survey/section/aspect/item/value/sub_item/'+sub_item.id).then(response => {
					
					// this.$store.dispatch('fetchSurvey')
					this.sub_items.splice(index,1)
					
				}).catch(e => {
					
					
				})			
			
			}
		
		},
		
		created() {
		
		},
		
		mounted() {
		
			this.$nextTick(() => {
				if (!this.oldSurvey) this.sub_items = []			
				$('[data-toggle="tooltip"]').tooltip({trigger : 'hover'})
			})			
		
		}
	
	}

</script>