/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Validation sequence
 * 401 for invalid token e.g., expired or non-passport token
 */
 window.axios.interceptors.response.use(
    (response) => {
		return response
	},
    async function(error) {
		console.log(error)
        if (error?.response?.status === 401) {
            window.open('/login','_self');
        }
        return Promise.reject(error);
    },
);

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
		
	},
	mounted() {
		
	}
}).$mount('#app')
 
 
