export default {

	data() {
		
		return {
			general_surveys: [],
			specific_surveys: []
		}
		
	},

	methods: {

		selectGeneralSurveys() {
			
			axios.get('api/selections/general/surveys', this.$store.state.config).then(response => {
			
				this.general_surveys = response.data
			
			}).catch(e => {
			
			})			
			
		},
		
		selectSpecificSurveys() {
			
			axios.get('api/selections/specific/surveys', this.$store.state.config).then(response => {
			
				this.specific_surveys = response.data
			
			}).catch(e => {
			
			})			
			
		}		
	
	}
	
}