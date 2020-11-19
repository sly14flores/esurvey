require('./bootstrap');

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
 
 
