<template>
	<div>
		<div class="page-wrapper">
			<groups-header :isList="true"></groups-header>
			<div class="page-body">		
				<div class="card">
					<div class="card-header">
						<h5>Groups</h5>
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
										<tr v-for="(group,i) in groups" :key="group.id">
											<td>{{ group.id }}</td>
											<td>{{ group.name }}</td>
											<td>{{ group.description }}</td>
											<td>
												<label class="label label-info cursorize" @click="view(group)"><i class="ion-search"></i></label>
											</td>
										</tr>
									</tbody>
								</table>
								<sly-pagination style="margin-top: 50px;" :currentPage="pagination.current_page" :perPage="pagination.per_page" :lastPage="pagination.last_page" :totalItems="pagination.total" :fetchData="fetchGroups"></sly-pagination>
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

	import { mapState } from 'vuex'

	export default {
	
		name: 'GroupsList',
		
		components: {
			GroupsHeader: () => import(/* webpackChunkName: "GroupsHeader" */'./GroupsHeader'),
			SlyPagination: () => import(/* webpackChunkName: "SlyPagination" */'../components/SlyPagination')
		},

		data() {
			
			return {

				search: '',

			}
			
		},		

		computed: {
			
			...mapState({

				pagination: state => state.groups.groups.pagination,
				
				dataFetched: state => state.groups.groups.fetched,
			
				groups (state) {
					return state.groups.groups.data.filter(group => {

						return group.name.toLowerCase().includes(this.search.toLowerCase()) ||
							group.description.toLowerCase().includes(this.search.toLowerCase())
					
					})					
				}

			}),

		},
		
		methods: {

			fetchGroups(currentPage) {

				this.$store.dispatch('groups/ALL', {page: currentPage});

			},
			
			view(group) {
			
				this.$router.push({name: 'group_view', params: {group_id: group.id}})
			
			}
		
		},

		created() {	

		},
	
		mounted() {
		
			this.$parent.hide()
		
		},
		
		beforeRouteEnter (to, from, next) {

			next(vm => {

				vm.fetchGroups(1)

			})

		}		
	
	}

</script>