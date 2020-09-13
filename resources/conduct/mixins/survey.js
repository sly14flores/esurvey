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
		
		fetchSurvey(token) {

			return axios.post('/api/conduct/'+token)

		}
		
	}
	
}