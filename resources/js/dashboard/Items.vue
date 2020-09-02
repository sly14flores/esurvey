<template>
	<div class="row">
		<div class="col-xl-3 col-md-6">
			<div class="card bg-c-green update-card">
				<div class="card-block">
					<div class="row align-items-end">
						<div class="col-8">
							<h4 class="text-white">{{dashboard.counts.surveys.data}}</h4>
							<h6 class="text-white m-b-0">Surveys</h6>
						</div>
						<div class="col-4 text-right">
							<i class="ion-grid"></i>
						</div>
					</div>
				</div>
				<div class="card-footer">
					<p class="text-white m-b-0"><i class="feather icon-clock text-white f-14 m-r-10"></i>{{dashboard.counts.surveys.last_update}}</p>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-md-6">
			<div class="card bg-c-yellow update-card">
				<div class="card-block">
					<div class="row align-items-end">
						<div class="col-8">
							<h4 class="text-white">{{dashboard.counts.answered.data}}</h4>
							<h6 class="text-white m-b-0">Answered</h6>
						</div>
						<div class="col-4 text-right">
							<i class="ion-connection-bars"></i>
						</div>
					</div>
				</div>
				<div class="card-footer">
					<p class="text-white m-b-0"><i class="feather icon-clock text-white f-14 m-r-10"></i>{{dashboard.counts.answered.last_update}}</p>
				</div>
			</div>
		</div>		
	</div>
</template>

<style scoped>

</style>

<script>

	export default {
	
		name: 'Items',
		
		props: ['survey'],
		
		data() {
		
			return {

			}
		
		},
		
		computed: {
		
			dashboard() {
		
				return this.$store.state.dashboard.data
				
			}
		
		},
		
		methods: {
		
		},
		
		created() {
		
			let channel = window.Echo.channel('esurvey_dashboard')

			channel.listen('UpdateDashboard', e => {
				
				this.fetchData()

			})	
		
		},
		
		mounted() {
				
		
		}
	
	}

</script>