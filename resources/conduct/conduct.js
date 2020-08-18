window._ = require('lodash')
window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

import Vue from 'vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import router from './router.js'
import store from './store.js'

import SlySpinner from './SlySpinner.vue'

window.Swal = require('sweetalert2')

const app = new Vue({
	router,	
	store,
	components: {
		SlySpinner,
	},
	methods: {

	},
	created() {
		
	},
	mounted() {

	}
}).$mount('#app')