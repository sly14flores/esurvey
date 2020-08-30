window._ = require('lodash')
window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

import Vue from 'vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

window.Swal = require('sweetalert2')

const app = new Vue({
	data: {
		
	},
	methods: {

	},
	created() {
		
	},
	mounted() {

	}
}).$mount('#sopa')