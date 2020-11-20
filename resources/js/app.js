/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/*
** axios response interceptor in case CSRF token refreshes 
*/
axios.interceptors.response.use(function (response) {
	
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		
		return response
		
	}, function (error) {
		
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		
	return Promise.reject(error);

})

window.Vue = require('vue');

// Register BootstrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import Vuelidate from "vuelidate";
Vue.use(Vuelidate)

// Router
import router from './router.js'

router.beforeEach((to, from, next) => {
	
	$('.theme-loader').fadeIn(10)
	next()
	
})

router.afterEach((to, from) => {

	$('.theme-loader').fadeOut('slow')

})

import ProfileDropDown from './components/ProfileDropDown.vue'
import SlyPNotify from './components/SlyPNotify.vue'

import store from './store.js'

const app = new Vue({
	router,
	store,	
	components: {
		ProfileDropDown,
		SlyPNotify
	},
	computed: {
		
		activeRoute() {
			
			return this.$route.name
			
		}
		
	},
	methods: {

		show() {
			
			$('.theme-loader').fadeIn(10)		
			
		},

		hide() {
			
			$('.theme-loader').fadeOut('slow')
			
		}

	},
	created() {
		
		this.$store.dispatch('profile')			
		
	},
	mounted() {
		
	}
}).$mount('#app')
 
 
