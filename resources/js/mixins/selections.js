export default {

	data() {
		
		return {
			surveys: []
		}
		
	},

	methods: {

		selectSurveys() {
			
			axios.get('api/selections/surveys', this.$store.state.config).then(response => {
			
				this.surveys = response.data
			
			}).catch(e => {
			
			})			
			
		}
	
	}
	
}