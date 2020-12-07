import axios from 'axios'
import route from '../library/route'

/**
 * API URLSs
 */
const GET_SURVEYS_SELECTIONS_URL = '/api/selections/surveys/:id'

export const analytics = {
    namespaced: true,
    state: {
        survey: null,
        surveys: [],
        chart: null,
        pies: []
    },
    mutations: {
		survey(state, survey) {
			state.survey = survey
        },
		surveys(state, surveys) {
			state.surveys = surveys
		},        
    },
	actions: {
        survey({commit},survey) {
            commit('survey',survey)
        },
        async surveys({commit, state, rootState}) {
            try {
				const url = route(GET_SURVEYS_SELECTIONS_URL, { id: rootState.profile.office })
				const response = await axios.get(url)             
                commit('surveys',response.data)
			    if (_.size(response.data)) {
                    commit('survey', state.surveys[0].id)
                }
            } catch(error) {

            }
        }
	},
	getters: {
		
	}    
}