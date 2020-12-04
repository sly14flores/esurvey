<template>
	<div>
		<div class="page-wrapper">
			<users-header :isList="false"></users-header>
			<div class="page-body">	
				<div class="card">
					<div class="card-header">
						<h5>User Form</h5>
						<form class="f-right">
							<div class="right-icon-control">
								<button type="button" class="btn btn-primary btn-sm" @click="edit" v-if="oldUser">{{(onEdit)?'Cancel':'Edit'}}</button>
								<button type="button" class="btn btn-danger btn-sm" @click="confirmDelete" v-if="oldUser">Delete</button>
							</div>
						</form>					
					</div>
					<div class="card-block">
						<form class="needs-validation" novalidate>	
						  <div class="form-row">
							<div class="form-group col-lg-4">
							  <label>First name</label>
							  <input type="text" class="form-control" v-model.trim="$v.user.firstname.$model" :class="{'is-invalid': $v.user.firstname.$error}" :disabled="oldUser && !onEdit">
							  <div class="invalid-feedback">First name is required</div>					  
							</div>
							<div class="form-group col-lg-4">
							  <label>Middle name</label>
							  <input type="text" class="form-control" v-model="user.middlename" :disabled="oldUser && !onEdit">
							</div>
							<div class="form-group col-lg-4">
							  <label>Last name</label>
							  <input type="text" class="form-control" v-model.trim="$v.user.lastname.$model" :class="{'is-invalid': $v.user.lastname.$error}" :disabled="oldUser && !onEdit">
							  <div class="invalid-feedback">Last name is required</div>					  
							</div>					
						  </div>
						  <div class="form-row">
							<div class="form-group col-lg-4">
							  <label>Email</label>
							  <input type="email" class="form-control" v-model.trim="$v.user.email.$model" :class="{'is-invalid': $v.user.email.$error}" :disabled="oldUser && !onEdit">
							  <div class="invalid-feedback">Valid email address is required</div>
							</div>
							<div class="form-group col-lg-4">
							  <label>Username</label>
							  <input type="text" class="form-control" v-model.trim="$v.user.username.$model" :class="{ 'is-invalid': $v.user.username.$error || usernameTaken }" :disabled="oldUser && !onEdit">
							  <div class="invalid-feedback" ng-if="$v.user.username.$error || usernameTaken">{{ ($v.user.username.$error)?'Username is required':'' }} {{ (usernameTaken)?'Username is taken':'' }}</div>					  
							  <div class="invalid-feedback" ng-if="usernameTaken"></div>				  
							</div>
							<div class="form-group col-lg-4">
							  <label>Office</label>
							  <select class="form-control" v-model.trim="$v.user.office.$model" :class="{'is-invalid': $v.user.office.$error}" :disabled="oldUser && !onEdit">
								<option disabled :value="null">Select office</option>
								<option v-for="office in offices" :value="office.id" :key="office.id">{{office.name}}</option>
							  </select>
							  <div class="invalid-feedback">Office is required</div>					  					  
							</div>						
						  </div>
						  <div class="form-row">
							<div class="form-group col-lg-4">
							  <label>Group</label>
							  <select class="form-control" v-model.trim="$v.user.group.$model" :class="{'is-invalid': $v.user.group.$error}" :disabled="oldUser && !onEdit">
								<option disabled :value="null">Select group</option>
								<option v-for="group in groups" :value="group.id" :key="group.id">{{group.name}}</option>							  
							  </select>
							  <div class="invalid-feedback">Group is required</div>					  					  
							</div>						  
						  </div>
						  <div class="f-right">
							<button type="button" class="btn btn-info btn-sm" @click="confirmAdd" v-if="!oldUser">Save</button>
							<button type="button" class="btn btn-info btn-sm" @click="confirmUpdate" v-if="oldUser" :disabled="!onEdit">Update</button>
							<button type="button" class="btn btn-warning btn-sm" @click="close">{{(oldUser)?'Close':'Cancel'}}</button>
						  </div>
						</form>		
					</div>
				</div>
			</div>
		</div>	
		<b-modal ref="confirm-add" title="Confirmation" @ok="save">
			Confirm user add?
		</b-modal>		
		<b-modal ref="confirm-update" title="Confirmation" @ok="update">
			Are you sure you want to update this user's info?
		</b-modal>			
		<b-modal ref="confirm-delete" title="Confirmation" @ok="deleteUser">
			Are you sure you want to delete this user?
		</b-modal>
	</div>
</template>

<style>

</style>

<script>

	import { required, email, minLength, requiredIf, requiredUnless } from "vuelidate/lib/validators";
	import UsersHeader from './UsersHeader'

	export default {
	
		name: 'UserForm',
	
		components: {
			UsersHeader		
		},
	
		data() {
		
			return {
		
				onEdit: false,
				usernameTaken: false,
				offices: [],
				groups: []
				
			}
		
		},
	
		computed: {
		
			user: {
				get() {
					return this.$store.state.users.user
				},
				set(value) {
					this.$store.commit('users/user',value)
				}
			},
			
			oldUser() {
			
				return this.$route.params.hasOwnProperty('user_id')
			
			},
			
			/*requirePassword() {

				return !this.oldUser

			}*/
		
		},
		
		watch: {
		
			'user.username': function(newValue, oldValue) {
			
				if (newValue == "") {
					this.usernameTaken = false
					return
				}

				if (this.oldUser) {
					this.usernameTaken = false
					return				
				}
				
				axios.post('username',{username: newValue}).then(response => {
				
					this.usernameTaken = response.data.taken
				
				})
				
			}
		
		},
		
		validations: {
			user: {
				firstname: {required},
				lastname: {required},
				email: {required, email},
				username: {required},
				office: {required},
				group: {required},
				/*password: {
					required: requiredIf(function () {
						return this.requirePassword
					})
				}*/
			}
		},
		
		methods: {	
			
			fetchUser(user_id) {
			
				axios.get('api/user/'+user_id, this.$store.state.config).then(response => {

					this.$store.commit('users/user',response.data.data)
					
				}).catch(e => {
					
					this.$router.push({name: 'users_list'})
					
				})	
			
			},
			
			confirmAdd() {
			
				this.$v.user.$touch()
				
				if (this.$v.user.$invalid) return;

				if (this.usernameIsTaken()) return;				
			
				this.$refs['confirm-add'].show()
			
			},			
			
			save() {
				
				this.$root.show()

				axios.post('api/user', this.user, this.$store.state.config).then(response => {

					this.$root.hide()
					this.$router.push({name: 'users_list'})
					this.$parent.$refs.pnotify.show({type: 'success',title: 'Notification', text: 'New user successfully added'})			
					
				}).catch(e => {
					
					this.$root.hide()
					if (e.response.status==403) this.$parent.$refs.pnotify.show({type: 'error',title: 'Notification', text: e.response.data.message})
					
				})	
			
			},

			edit() {
			
				this.onEdit = !this.onEdit
			
			},

			confirmUpdate() {
			
				this.$v.user.$touch()
				
				if (this.$v.user.$invalid) return;

				if (this.usernameIsTaken()) return;
			
				this.$refs['confirm-update'].show()			
			
			},			
			
			update() {
				
				this.$root.show()

				axios.put('api/user/'+this.user.id, this.user, this.$store.state.config).then(response => {

					this.onEdit = false
					this.$root.hide()
					this.$parent.$refs.pnotify.show({type: 'success',title: 'Notification', text: "User's info successfully updated"})				
					
				}).catch(e => {
					
					this.$root.hide()
					if (e.response.status==403) this.$parent.$refs.pnotify.show({type: 'error',title: 'Notification', text: e.response.data.message})
					
				})			
			
			},

			close() {

				this.$store.commit('users/user',{})
				this.$router.push({name: 'users_list'})
			
			},

			confirmDelete() {
			
				this.$refs['confirm-delete'].show()				
			
			},

			deleteUser() {
			
				this.$root.show()

				axios.delete('api/user/'+this.$store.state.users.user.id, this.$store.state.config).then(response => {

					this.$root.hide()
					this.$parent.$refs.pnotify.show({type: 'success',title: 'Notification', text: "User info successfully deleted"})
					this.$router.push({name: 'users_list'})
					
				}).catch(e => {
					
					this.$root.hide()
					if (e.response.status==403) this.$parent.$refs.pnotify.show({type: 'error',title: 'Notification', text: e.response.data.message})
					
				})	
			
			},
	
			usernameIsTaken() {
			
				if (this.usernameTaken) this.$parent.$refs.pnotify.show({type: 'danger',title: 'Notification', text: "Username is already taken"})
				
				return this.usernameTaken
			
			},
			
			fetchOffices() {
			
				axios.get('api/selections/offices', this.$store.state.config).then(response => {
				
					this.offices = response.data
				
				}).catch(e => {
				
				})
			
			},
			
			fetchGroups() {
			
				axios.get('api/selections/groups', this.$store.state.config).then(response => {
				
					this.groups = response.data
				
				}).catch(e => {
				
				})				

			}

		},
	
		created() {

			this.fetchOffices()
			this.fetchGroups()
		
		},
	
		mounted() {
			
			this.$nextTick(() => {		
				if (!this.oldUser) this.onEdit = true
			})
		
		},
		
		beforeRouteEnter (to, from, next) {

			next(vm => {

				const refresh = from.fullPath == '/'

				if (vm.$route.params.hasOwnProperty('user_id')) {
				
					if (refresh) {
					
						vm.$store.dispatch('api_token').then(() => {			

							vm.fetchUser(vm.$route.params.user_id)
						
						})
						
					} else {
					
						vm.fetchUser(vm.$route.params.user_id)
					
					}
					
				} else {
				
					vm.$store.commit('users/user',{})
					
				}

			})

		}
	
	}

</script>