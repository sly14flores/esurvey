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
				
				window.location.href = "/"
				
			}).catch(e => {
				
				this.validation = e.response.data.errors
				
			})
			
		}

	},
	created() {
		
	},
	mounted() {
		
	}
})