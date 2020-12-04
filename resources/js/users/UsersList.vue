<template>
	<div>
		<div class="page-wrapper">
			<users-header :isList="true"></users-header>
			<div class="page-body">		
				<div class="card">
					<div class="card-header">
						<h5>Users</h5>
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
											<th>First Name</th>
											<th>Last Name</th>
											<th>Username</th>
											<th>Email</th>
											<th>Date Registered</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="(user,i) in users" :key="user.id">
											<td>{{ user.id }}</td>
											<td>{{ user.firstname }}</td>
											<td>{{ user.lastname }}</td>
											<td>{{ user.username }}</td>
											<td>{{ user.email }}</td>
											<td>{{ user.created_at }}</td>
											<td>
												<label class="label label-info cursorize" @click="view(user)"><i class="ion-search"></i></label>
											</td>
										</tr>
									</tbody>								
								</table>
								<sly-pagination style="margin-top: 50px;" :currentPage="pagination.current_page" :perPage="pagination.per_page" :lastPage="pagination.last_page" :totalItems="pagination.total" :fetchData="fetchUsers"></sly-pagination>
							</div>
						</transition>
					</div>						
				</div>
			</div>
		</div>	
	</div>
</template>

<style>

	.cursorize {
		cursor: pointer;
	}

</style>

<script>

	export default {

		name: 'UsersList',
	
		components: {
			UsersHeader: () => import(/* webpackChunkName: "UsersHeader" */'./UsersHeader'),
			SlyPagination: () => import(/* webpackChunkName: "SlyPagination" */'../components/SlyPagination')
		},

		data() {
			
			return {
				
				search: '',
				pagination: {},
				dataFetched: false,
			
			}
			
		},

		computed: {
		
			users() {
				
				return this.$store.state.users.users.filter(user => {
				
					return user.firstname.toLowerCase().includes(this.search.toLowerCase()) ||
						   user.lastname.toLowerCase().includes(this.search.toLowerCase()) ||
						   user.email.toLowerCase().includes(this.search.toLowerCase())
				
				})
			
			}
		
		},

		methods: {

			fetchUsers(currentPage) {
		
				this.dataFetched = false
		
				axios.get('api/users?page='+currentPage, this.$store.state.config).then(response => {
					
					this.$store.commit('users/users',response.data.data)
					this.pagination = response.data.meta
					
					this.dataFetched = true
					
				}).catch(e => {

					this.dataFetched = true
					
				})
			},
			
			view(user) {
			
				this.$router.push({name: 'user_view', params: {user_id: user.id}})
			
			}
		
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
					
						vm.fetchUsers(1)
					
					})
				
				} else {
				
					vm.fetchUsers(1)
				
				}			

			})

		}
	
	}

</script>