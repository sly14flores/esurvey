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
			
			axios.post('/login',this.auth).then(response => {
				
				localStorage.setItem('esurvey', JSON.stringify(response.data))
				window.location.href = "/"
				
			}).catch(e => {
				
				localStorage.removeItem("esurvey")	
				this.validation = e.response.data.errors
				
			})
			
		}

	},
	created() {
		
	},
	mounted() {
		
	}
})