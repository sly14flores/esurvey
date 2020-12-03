<template>
	<div>
		<div class="page-wrapper">
			<groups-header :isList="false"></groups-header>
			<div class="page-body">	
				<div class="card">
					<div class="card-header">
						<h5>Group Form</h5>
						<form class="f-right">
							<div class="right-icon-control">
								<button type="button" class="btn btn-primary btn-sm" @click="edit" v-if="oldGroup">{{(onEdit)?'Cancel':'Edit'}}</button>
								<button type="button" class="btn btn-danger btn-sm" @click="confirmDelete" v-if="oldGroup">Delete</button>
							</div>
						</form>					
					</div>
					<div class="card-block">
						<form class="needs-validation" novalidate>	
						  <div class="form-row">
							<div class="form-group col-lg-6">
							  <label>Name</label>
							  <input type="text" class="form-control" v-model.trim="$v.group.name.$model" :class="{'is-invalid': $v.group.name.$error}" :disabled="oldGroup && !onEdit">
							  <div class="invalid-feedback">Name is required</div>					  
							</div>
							<div class="form-group col-lg-6">
							  <label>Description</label>
							  <input type="text" class="form-control" v-model.trim="$v.group.description.$model" :class="{'is-invalid': $v.group.description.$error}" :disabled="oldGroup && !onEdit">
							  <div class="invalid-feedback">Description is required</div>					  
							</div>				
						  </div>
						  <hr>						  
						  <h5 class="m-b-20">
							<div class="checkbox-fade fade-in-warning">
								<label>
									<input type="checkbox" v-model="gatesPolicies" @change="childrenGatesPolicies" :disabled="oldGroup && !onEdit">
									<span class="cr">
										<i class="cr-icon icofont icofont-ui-check txt-warning"></i>
									</span>
									<span> Gates and Policies</span>
								</label>
							</div>
						  </h5>
							<div class="m-b-30" v-for="authorization in authorizations" :key="authorization.model">
								<h5>
									<div class="checkbox-fade fade-in-warning">
										<label>
											<input type="checkbox" v-model="authorization.all" :disabled="oldGroup && !onEdit" @change="childrenModelGP(authorization)">
											<span class="cr">
												<i class="cr-icon icofont icofont-ui-check txt-warning"></i>
											</span>
											<span> <small>{{authorization.name}}</small></span>
										</label>
									</div>
								</h5>
								<span class="text-muted">{{authorization.description}}</span>
								<div class="form-row m-t-20">
									<div class="col-lg-6">
										<h4 class="sub-title">Gates</h4>
										<div class="checkbox-fade fade-in-primary" v-for="gate in authorization.gates">
											<label>
												<input type="checkbox" v-model="gate.value" :disabled="oldGroup && !onEdit" @change="parentGP(authorization)">
												<span class="cr">
													<i class="cr-icon icofont icofont-ui-check txt-warning"></i>
												</span>
												<span> {{gate.label}}</span>
											</label>
										</div>									
									</div>
									<div class="col-lg-6">
										<h4 class="sub-title">Policies</h4>
										<div class="checkbox-fade fade-in-danger" v-for="policy in authorization.policies">
											<label>
												<input type="checkbox" v-model="policy.value" :disabled="oldGroup && !onEdit" @change="parentGP(authorization)">
												<span class="cr">
													<i class="cr-icon icofont icofont-ui-check txt-warning"></i>
												</span>
												<span> {{policy.label}}</span>
											</label>
										</div>									
									</div>								
								</div>
							</div>							
						  <div class="f-right">
							<button type="button" class="btn btn-info btn-sm" @click="confirmAdd" v-if="!oldGroup">Save</button>
							<button type="button" class="btn btn-info btn-sm" @click="confirmUpdate" v-if="oldGroup" :disabled="!onEdit">Update</button>
							<button type="button" class="btn btn-warning btn-sm" @click="close">{{(oldGroup)?'Close':'Cancel'}}</button>
						  </div>
						</form>		
					</div>
				</div>
			</div>
		</div>
		<b-modal ref="confirm-add" title="Confirmation" @ok="save">
			Confirm group add?
		</b-modal>		
		<b-modal ref="confirm-update" title="Confirmation" @ok="update">
			Are you sure you want to update this group's info?
		</b-modal>			
		<b-modal ref="confirm-delete" title="Confirmation" @ok="deleteGroup">
			Are you sure you want to delete this group?
		</b-modal>		
	</div>
</template>

<style>

</style>

<script>

	import { required, email, minLength, requiredIf, requiredUnless } from "vuelidate/lib/validators";
	import GroupsHeader from './GroupsHeader'

	import AsyncComputed from 'vue-async-computed'
	import Vue from 'vue'
	Vue.use(AsyncComputed)

	import { mapState } from 'vuex'

	export default {
	
		name: 'GroupForm',
	
		components: {
			GroupsHeader		
		},
	
		data() {
		
			return {

				onEdit: false,
				gatesPolicies: false
				
			}
		
		},
	
		computed: {
		
			group: {
				get() {
					return this.$store.state.groups.group
				},
				set(value) {
					this.$store.commit('groups/group',value)
				}
			},
			
			oldGroup() {
			
				return this.$route.params.hasOwnProperty('group_id')
			
			},
			
			authorizations: {
				get() {
					return this.$store.state.groups.group.authorizations				
				},
				set(value) {
					this.$store.commit('groups/authorizations',value)				
				}
			}
		
		},
		
		validations: {
			group: {
				name: {required},
				description: {required}
			}
		},
		
		methods: {	
			
			fetchGroup(group_id) {
			
				axios.get('api/group/'+group_id).then(response => {

					this.$store.commit('groups/group',response.data.data)
					if (this.oldGroup) {
						this.parentGatesPolicies()
						response.data.data.authorizations.forEach((model) => this.parentModelGP(model))
					}
					
				}).catch(e => {
					
					// this.$router.push({name: 'groups_list'})
					
				})	
			
			},
			
			getGpTemplate() {
			
				return axios.get('api/authorizations');
			
			},
			
			confirmAdd() {
			
				this.$v.group.$touch()
				
				if (this.$v.group.$invalid) return;
			
				this.$refs['confirm-add'].show()
			
			},			
			
			save() {
				
				this.$root.show()

				axios.post('api/group', this.group, this.$store.state.config).then(response => {

					this.$root.hide()
					this.$router.push({name: 'groups_list'})
					this.$parent.$refs.pnotify.show({type: 'success',title: 'Notification', text: 'New group successfully added'})			
					
				}).catch(e => {
					
					this.$root.hide()
					if (e.response.status==403) this.$parent.$refs.pnotify.show({type: 'error',title: 'Notification', text: e.response.data.message})
					
				})	
			
			},

			edit() {
			
				this.onEdit = !this.onEdit
			
			},

			confirmUpdate() {
			
				this.$v.group.$touch()
				
				if (this.$v.group.$invalid) return;
			
				this.$refs['confirm-update'].show()			
			
			},			
			
			update() {
				
				this.$root.show()

				axios.put('api/group/'+this.group.id, this.group, this.$store.state.config).then(response => {

					this.onEdit = false
					this.$root.hide()
					this.$parent.$refs.pnotify.show({type: 'success',title: 'Notification', text: "Group's info successfully updated"})
					
				}).catch(e => {
					
					this.$root.hide()
					if (e.response.status==403) this.$parent.$refs.pnotify.show({type: 'error',title: 'Notification', text: e.response.data.message})
					
				})			
			
			},

			close() {

				this.$store.commit('groups/group',{})
				this.$router.push({name: 'groups_list'})
			
			},

			confirmDelete(group) {
			
				this.$refs['confirm-delete'].show()				
			
			},

			deleteGroup() {
			
				this.$root.show()

				axios.delete('api/group/'+this.$store.state.groups.group.id, this.$store.state.config).then(response => {

					this.$root.hide()
					this.$parent.$refs.pnotify.show({type: 'success',title: 'Notification', text: "Group info successfully deleted"})
					this.$router.push({name: 'groups_list'})
					
				}).catch(e => {
					
					this.$root.hide()
					if (e.response.status==403) this.$parent.$refs.pnotify.show({type: 'error',title: 'Notification', text: e.response.data.message})
					
				})	
			
			},
			
			parentGatesPolicies() {
				
				let checkboxes = false
				
				if (this.authorizations.length>0) checkboxes = true
				
				this.authorizations.forEach(authorization => {
					
					checkboxes = checkboxes && authorization.gates.every(gate => gate.value === true) && authorization.policies.every(policy => policy.value === true)
					
				})
			
				this.gatesPolicies = checkboxes		
				
			},
			
			childrenGatesPolicies() {
			
				this.$store.state.groups.group.authorizations.forEach(authorization => {
					
					authorization.all = this.gatesPolicies
					
					authorization.gates.forEach(gate => gate.value = this.gatesPolicies)
					
					authorization.policies.forEach(policy => policy.value = this.gatesPolicies)
					
				})
			
			},
			
			parentModelGP(model) {
			
				let index = this.authorizations.indexOf(model)
				
				let checkboxes = false
				
				if (this.authorizations[index]!=undefined) checkboxes = true
				
				checkboxes = checkboxes && this.authorizations[index].gates.every(gate => gate.value === true)
				&& this.authorizations[index].policies.every(policy => policy.value === true)

				this.authorizations[index].all = checkboxes			
			
			},
			
			childrenModelGP(model) {
			
				let index = this.authorizations.indexOf(model)			
			
				this.$store.state.groups.group.authorizations[index].gates.forEach(gate => gate.value = model.all)
					
				this.$store.state.groups.group.authorizations[index].policies.forEach(policy => policy.value = model.all)		
				
				this.parentGatesPolicies()
			
			},
			
			parentGP(model) {

				this.parentGatesPolicies()
				this.parentModelGP(model)
			
			},
			
			childrenGP(model) {
			
				this.childrenGatesPolicies()
				this.childrenModelGP(model)
			
			}

		},
	
		created() {	
		
		},
	
		mounted() {
			
			this.$nextTick(() => {
				if (!this.oldGroup) this.onEdit = true
			})
		
		},
		
		beforeRouteEnter (to, from, next) {

			next(vm => {

				const refresh = from.fullPath == '/'

				if (vm.$route.params.hasOwnProperty('group_id')) {
					
					vm.fetchGroup(vm.$route.params.group_id)
					
				} else {
				
					vm.$store.commit('groups/group',{})
				
					vm.getGpTemplate().then(response => {
					
						vm.$store.commit('groups/authorizations',response.data)
					
					}).catch(e => {
					
					})
					
				}

			})

		}		
	
	}

</script>