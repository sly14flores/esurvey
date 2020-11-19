window.axios = require('axios');

import Vue from 'vue';

new Vue({
	el: '#app',
	components: {

	},
	data: {
		auth: {
			username: null,
			password: null
		},
		validation: {}		
	},
	methods: {

		login() {
			
			axios.post('/api/login',this.auth).then(response => {
				
				localStorage.setItem('esurveyAccessToken',response.data.api_token)
				window.location.href = "/"
				
			}).catch(e => {

				localStorage.removeItem("esurveyAccessToken")

				if (e.response.status == 422) {
					this.validation = e.response.data.message
				} else {

				}

			})
			
		}

	},
	created() {
		
	},
	mounted() {
		
	}
})