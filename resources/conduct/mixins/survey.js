export default {
	
	computed: {
		
		left_infog() {
			
			return this.$store.getters.currentItem.item_infographic_left
			
		},
		
		bottom_logo() {
		
			return this.$store.getters.currentItem.item_infographic_bottom_logo

		},
		
		right_infog() {

			return this.$store.getters.currentItem.item_infographic_right				

		}
		
	},

	methods: {
		
		fetchSurvey(tokens) {

			let resource = '/api/conduct/'+tokens.token;
			if (tokens.api_token!=undefined) resource+='?api_token='+tokens.api_token
			return axios.post(resource)

		}
		
	}
	
}