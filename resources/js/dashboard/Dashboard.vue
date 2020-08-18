<template>
	<div>
		<div class="page-wrapper">
			<div class="page-header">
				<div class="row align-items-end">
					<div class="col-lg-8">
						<div class="page-header-title">
							<div class="d-inline">
								<h4>Dashboard</h4>
							</div>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="page-header-breadcrumb">
							<ul class="breadcrumb-title">
								<li class="breadcrumb-item">
									<router-link to="/dashboard">
										<i class="feather icon-home"></i>
									</router-link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				
			</div>
			<div class="page-body">
				<Items></Items>
			</div>
		</div>
	</div>
</template>

<style>
</style>

<script>

	import Items from './Items'

	export default {
	
		name: 'Dashboard',
		
		components: {
			Items
		},
	
		beforeRouteEnter (to, from, next) {
			
			next(vm => {
			
			})

		},
	
		methods: {
		
		},
		
		created() {
		
		},
	
		mounted() {
		
			this.$parent.hide()		
		
		}
	
	}

</script>