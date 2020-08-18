export default {

	methods: {
		
		fetchSurvey(token) {

			return axios.post('/api/conduct/'+token)

		}
		
	}
	
}