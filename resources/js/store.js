const surveys = {
	state: {
		survey: {
			thankyou: {}
		},
		surveys: []
	},
	mutations: {
		surveys(state, surveys) {
			state.surveys = surveys
		},
		survey(state, survey) {
			state.survey = survey
		},
		introductions(state, introductions) {
			state.survey.introductions = introductions
		},
		sections(state, sections) {
			state.survey.sections = sections
		},
		items(state, section) {
			state.survey.sections[section.section].items = section.items
		},
		values(state, item) {
			state.survey.sections[item.section].items[item.item].values = item.values
		},
		sub_items(state, sub_item) {
			state.survey.sections[sub_item.section].items[sub_item.item].values[sub_item.value].sub_items = sub_item.sub_items		
		},
		aspects(state, section) {
			state.survey.sections[section.section].aspects = section.aspects
		},
		aspect_items(state, aspect) {
			state.survey.sections[aspect.section].aspects[aspect.aspect].items = aspect.items
		},
		aspect_item_values(state, item) {
			state.survey.sections[item.section].aspects[item.aspect].items[item.item].values = item.values
		},
		aspect_item_value_sub_items(state, sub_item) {
			state.survey.sections[sub_item.section].aspects[sub_item.aspect].items[sub_item.item].values[sub_item.value].sub_items = sub_item.sub_items		
		},		
	},
	actions: {
		
		fetchSurvey(context) {
			
			axios.get('/api/survey/'+context.state.survey.id, context.rootState.config).then(response => {

				context.commit('survey',response.data.data)
				
			}).catch(e => {
				
			})
			
		}
		
	},
	getters: {
		
	}
}

const users = {
	state: {
		user: {},
		users: []
	},
	mutations: {
		users(state, users) {
			state.users = users
		},
		user(state, user) {
			if (_.isEmpty(user)) {
				state.user = {
					firstname: null,
					middlename: null,
					lastname: null,
					email: null,
					username: null,
					office: null,
					group: null
				}
			} else {
				state.user = user
			}
		}
	},
	actions: {

	},
	getters: {
		
	}
}

const offices = {
	state: {
		office: {},
		offices: []
	},
	mutations: {
		offices(state, offices) {
			state.offices = offices
		},
		office(state, office) {
			if (_.isEmpty(office)) {
				state.office = {
					name: null,
					description: null
				}
			} else {
				state.office = office
			}
		}
	},
	actions: {

	},
	getters: {
		
	}
}

const groups = {
	state: {
		group: {},
		groups: []
	},
	mutations: {
		group(state, group) {
			if (_.isEmpty(group)) {			
				state.group = {
					name: null,
					description: null						
				}
			} else {
				state.group = group
			}
		},
		groups(state, groups) {
			state.groups = groups
		},		
		authorizations(state, authorizations) {
			Vue.set(state.group, 'authorizations', authorizations)
		}
	},
	actions: {
		
	},
	getters: {
		
	}
}

const dashboard = {
	state: {
		data: {
			info: {
				survey: {},
				answered: {}
			}
		},
		survey: null,
		surveys: []
	},
	mutations: {
		dashboardData(state, data) {
			state.data = data
		},
		dashboardSurvey(state, survey) {
			state.survey = survey
		},
		dashboardSurveys(state, surveys) {
			state.surveys = surveys
		}
	},
	actions: {
		
	},
	getters: {
		
	}
}

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
		surveys: surveys,
		users: users,
		offices: offices,
		groups: groups,
		dashboard: dashboard
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