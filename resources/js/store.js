import { surveys } from './stores/surveys'
import { users } from './stores/users'
import { offices } from './stores/offices'
import { groups } from './stores/groups'
import { dashboard } from './stores/dashboard'
import { analytics } from './stores/analytics'

// import VuexPersist from 'vuex-persist'

/* const vuexPersist = new VuexPersist({
  key: 'esurvey',
  storage: window.localStorage
}) */

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const esurveyStr = localStorage.getItem('esurvey')
const profile = JSON.parse(esurveyStr) || {}
const api_token = profile.api_token || null

const config = {
	headers: {
		'Authorization': 'Bearer '+api_token
	}
}

export default new Vuex.Store({
	// plugins: [vuexPersist.plugin],
	modules: {
		surveys,
		users,
		offices,
		groups,
		dashboard,
		analytics,
	},
	state: {
		profile,
		config
	},
	mutations: {
		profile(state, profile) {
			state.profile = profile
			state.config = {
				headers: {
					'Authorization': 'Bearer '+api_token
				}
			}
		},
		api_token(state, api_token) {
			state.config = {
				headers: {
					'Authorization': 'Bearer '+api_token
				}
			}
		}
	},
	actions: {
		profile(context) {

			const esurvey = localStorage.esurvey
			context.commit('profile',JSON.parse(esurvey))
			
		},
		async async_profile(context) {
			
			try {
				
				const profile = await axios.post('profile')
				context.commit('profile',profile.data)
				
			} catch(e) {
				
				console.log(e)				
				
			}
			
		},		
		async api_token(context) {
			
			try {
			
				const api_token = await axios.post('api_token')
				context.commit('api_token',api_token.data)			
				
			} catch(e) {
				
				console.log(e)
				
			}
			
		}
	},
	getters: {
	
	}
})