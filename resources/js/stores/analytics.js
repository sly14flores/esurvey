import axios from 'axios'
import route from '../library/route'

/**
 * API URLSs
 */
const GET_SURVEYS_SELECTIONS_URL = '/api/selections/surveys/:id'
const GET_FIELDS_URL = '/api/conduct/survey/respondent/:survey_id/tags/only'

export const analytics = {
    namespaced: true,
    state: {
        survey: null,
        surveys: [],
        chart: null,
        pies: [],
        fields: [],
    },
    mutations: {
		survey(state, survey) {
			state.survey = survey
        },
		surveys(state, surveys) {
			state.surveys = surveys
        },
        chart(state, chart) {
            state.chart = chart
        },
        fields(state, fields) {
            state.fields = fields
        }
    },
	actions: {
        survey({commit},payload) {
            commit('survey',payload)
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
        },
        chart({commit},payload) {
            commit('chart',payload)
        },
        async fields({commit,state}) { // 
            try {
                const url = route(GET_FIELDS_URL, { survey_id: state.survey })
                const response = await axios.get(url)
                commit('fields',response.data)
            } catch (error) {

            }
        }
	},
	getters: {
		
	}    
}