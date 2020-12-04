<template>
	<div>
		<div class="page-wrapper">
			<offices-header :isList="false"></offices-header>
			<div class="page-body">	
				<div class="card">
					<div class="card-header">
						<h5>Office Form</h5>
						<form class="f-right">
							<div class="right-icon-control">
								<button type="button" class="btn btn-primary btn-sm" @click="edit" v-if="oldOffice">{{(onEdit)?'Cancel':'Edit'}}</button>
								<button type="button" class="btn btn-danger btn-sm" @click="confirmDelete" v-if="oldOffice">Delete</button>
							</div>
						</form>					
					</div>
					<div class="card-block">
						<form class="needs-validation" novalidate>	
						  <div class="form-row">
							<div class="form-group col-lg-6">
							  <label>Name</label>
							  <input type="text" class="form-control" v-model.trim="$v.office.name.$model" :class="{'is-invalid': $v.office.name.$error}" :disabled="oldOffice && !onEdit">
							  <div class="invalid-feedback">Name is required</div>					  
							</div>
							<div class="form-group col-lg-6">
							  <label>Description</label>
							  <input type="text" class="form-control" v-model.trim="$v.office.description.$model" :class="{'is-invalid': $v.office.description.$error}" :disabled="oldOffice && !onEdit">
							  <div class="invalid-feedback">Description is required</div>					  
							</div>				
						  </div>
						  <div class="f-right">
							<button type="button" class="btn btn-info btn-sm" @click="confirmAdd" v-if="!oldOffice">Save</button>
							<button type="button" class="btn btn-info btn-sm" @click="confirmUpdate" v-if="oldOffice" :disabled="!onEdit">Update</button>
							<button type="button" class="btn btn-warning btn-sm" @click="close">{{(oldOffice)?'Close':'Cancel'}}</button>
						  </div>
						</form>		
					</div>
				</div>
			</div>
		</div>
		<b-modal ref="confirm-add" title="Confirmation" @ok="save">
			Confirm office add?
		</b-modal>		
		<b-modal ref="confirm-update" title="Confirmation" @ok="update">
			Are you sure you want to update this office's info?
		</b-modal>			
		<b-modal ref="confirm-delete" title="Confirmation" @ok="deleteOffice">
			Are you sure you want to delete this office?
		</b-modal>		
	</div>
</template>

<style>

</style>

<script>

	import { required, email, minLength, requiredIf, requiredUnless } from "vuelidate/lib/validators";
	import OfficesHeader from './OfficesHeader'

	export default {
	
		name: 'OfficeForm',
	
		components: {
			OfficesHeader		
		},
	
		data() {
		
			return {
		
				onEdit: false
				
			}
		
		},
	
		computed: {
		
			office: {
				get() {
					return this.$store.state.offices.office
				},
				set(value) {
					this.$store.commit('offices/office',value)
				}
			},
			
			oldOffice() {
			
				return this.$route.params.hasOwnProperty('office_id')
			
			},
		
		},
		
		validations: {
			office: {
				name: {required},
				description: {required}
			}
		},
		
		methods: {	
			
			fetchOffice(office_id) {
			
				axios.get('api/office/'+office_id, this.$store.state.config).then(response => {

					this.$store.commit('offices/office',response.data.data)
					
				}).catch(e => {
					
					this.$router.push({name: 'offices_list'})
					
				})	
			
			},
			
			confirmAdd() {
			
				this.$v.office.$touch()
				
				if (this.$v.office.$invalid) return;
			
				this.$refs['confirm-add'].show()
			
			},			
			
			save() {
				
				this.$root.show()

				axios.post('api/office', this.office, this.$store.state.config).then(response => {

					this.$root.hide()
					this.$router.push({name: 'offices_list'})
					this.$parent.$refs.pnotify.show({type: 'success',title: 'Notification', text: 'New office successfully added'})			
					
				}).catch(e => {
					
					this.$root.hide()
					if (e.response.status==403) this.$parent.$refs.pnotify.show({type: 'error',title: 'Notification', text: e.response.data.message})
					
				})	
			
			},

			edit() {
			
				this.onEdit = !this.onEdit
			
			},

			confirmUpdate() {
			
				this.$v.office.$touch()
				
				if (this.$v.office.$invalid) return;
			
				this.$refs['confirm-update'].show()			
			
			},			
			
			update() {
				
				this.$root.show()

				axios.put('api/office/'+this.office.id, this.office, this.$store.state.config).then(response => {

					this.onEdit = false
					this.$root.hide()
					this.$parent.$refs.pnotify.show({type: 'success',title: 'Notification', text: "Office's info successfully updated"})				
					
				}).catch(e => {
					
					this.$root.hide()
					if (e.response.status==403) this.$parent.$refs.pnotify.show({type: 'error',title: 'Notification', text: e.response.data.message})					
					
				})			
			
			},

			close() {

				this.$store.commit('offices/office',{})
				this.$router.push({name: 'offices_list'})
			
			},

			confirmDelete(office) {
			
				this.$refs['confirm-delete'].show()				
			
			},

			deleteOffice() {
			
				this.$root.show()

				axios.delete('api/office/'+this.$store.state.offices.office.id, this.$store.state.config).then(response => {

					this.$root.hide()
					this.$parent.$refs.pnotify.show({type: 'success',title: 'Notification', text: "Office info successfully deleted"})
					this.$router.push({name: 'offices_list'})
					
				}).catch(e => {
					
					this.$root.hide()
					if (e.response.status==403) this.$parent.$refs.pnotify.show({type: 'error',title: 'Notification', text: e.response.data.message})
					
				})	
			
			}

		},
	
		created() {
		
		},
	
		mounted() {
			
			this.$nextTick(() => {				
				if (!this.oldOffice) this.onEdit = true
			})
		
		},
		
		beforeRouteEnter (to, from, next) {

			next(vm => {

				const refresh = from.fullPath == '/'

				if (vm.$route.params.hasOwnProperty('office_id')) {
				
					if (refresh) {
					
						vm.$store.dispatch('api_token').then(() => {			

							vm.fetchOffice(vm.$route.params.office_id)
						
						})
						
					} else {
					
						vm.fetchOffice(vm.$route.params.office_id)
					
					}
					
				} else {
				
					vm.$store.commit('offices/office',{})
					
				}

			})

		}		
	
	}

</script>