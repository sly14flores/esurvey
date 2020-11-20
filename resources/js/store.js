import { surveys } from './surveys/surveys'
import { users } from './users/users'
import { offices } from './offices/offices'
import { groups } from './groups/groups'
import { dashboard } from './dashboard/dashboard'

// import VuexPersist from 'vuex-persist'

/* const vuexPersist = new VuexPersist({
  key: 'esurvey',
  storage: window.localStorage
}) */

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	// plugins: [vuexPersist.plugin],
	modules: {
		surveys,
		users,
		offices,
		groups,
		dashboard,
	},
	state: {
		profile: {},
		config: {}
	},
	mutations: {
		profile(state, profile) {
			state.profile = profile
			state.config = {
				headers: {
					'Authorization': 'Bearer '+profile.api_token
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
			
			axios.post('profile').then(response => {

				context.commit('profile',response.data)
				localStorage.setItem("survey_office",response.data.office)
			
			}).catch(e => {

			})
			
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