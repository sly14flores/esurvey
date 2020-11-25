export default {

	methods: {
	
		fetchData() {
		
			this.$root.show()

			axios.post('/api/dashboard/data', {id: this.$store.state.dashboard.survey}).then(response => {
				
				this.$store.commit('dashboardData', response.data)
				this.$root.hide()
				
			}).catch(e => {
				
			})
		
		}	
	
	}

}