export default {

	methods: {
	
		fetchData() {
		
			axios.post('/api/dashboard/data', {id: this.$store.state.dashboard.survey}, this.$store.state.config).then(response => {
				
				this.$store.commit('dashboardData', response.data)
				
			}).catch(e => {
				
			})
		
		}	
	
	}

}