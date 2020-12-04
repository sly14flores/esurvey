<template>
	<div>
		<div class="page-wrapper">
			<offices-header :isList="true"></offices-header>
			<div class="page-body">		
				<div class="card">
					<div class="card-header">
						<h5>Offices</h5>
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
											<th>Name</th>
											<th>Description</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="(office,i) in offices" :key="office.id">
											<td>{{ office.id }}</td>
											<td>{{ office.name }}</td>
											<td>{{ office.description }}</td>
											<td>
												<label class="label label-info cursorize" @click="view(office)"><i class="ion-search"></i></label>
											</td>
										</tr>
									</tbody>
								</table>
								<sly-pagination style="margin-top: 50px;" :currentPage="pagination.current_page" :perPage="pagination.per_page" :lastPage="pagination.last_page" :totalItems="pagination.total" :fetchData="fetchOffices"></sly-pagination>							
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
	
		name: 'OfficesList',
		
		components: {
			OfficesHeader: () => import(/* webpackChunkName: "OfficesHeader" */'./OfficesHeader'),
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
		
			offices() {
				
				return this.$store.state.offices.offices.filter(office => {
				
					return office.name.toLowerCase().includes(this.search.toLowerCase()) ||
						   office.description.toLowerCase().includes(this.search.toLowerCase())
				
				})
			
			}
		
		},
		
		methods: {

			fetchOffices(currentPage) {
		
				this.dataFetched = false
		
				axios.get('api/offices?page='+currentPage, this.$store.state.config).then(response => {
					
					this.$store.commit('offices/offices',response.data.data)
					this.pagination = response.data.meta
					
					this.dataFetched = true
					
					
				}).catch(e => {
				
					this.dataFetched = true
					
				})
			},
			
			view(office) {
			
				this.$router.push({name: 'office_view', params: {office_id: office.id}})
			
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
					
						vm.fetchOffices(1)
					
					})
				
				} else {
				
					vm.fetchOffices(1)
				
				}				

			})

		}	
	
	}

</script>