window._ = require('lodash')
window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

import Vue from 'vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

window.Swal = require('sweetalert2')

import App from './App.vue'

import store from '../../store.js'	

const app = new Vue({
	store,
	render: h => h(App)
}).$mount('#app')