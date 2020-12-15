import axios from 'axios'
import route from '../library/route'

/**
 * API URLSs
 */
const GET_SURVEYS_SELECTIONS_URL = '/api/selections/surveys/:id'
const GET_FIELDS_URL = '/api/conduct/survey/respondent/:survey_id/tags/only'

const initialState = () => {
    return {
        dataFetched: true,
        fieldsFetched: false,
        survey: null,
        surveys: [],
        charts: [
            {id: 1, type: 'pie', name: 'Pie'},
            {id: 2, type: 'bar', name: 'Bar'},
        ],  
        chart: null,
        pies: [],
        fields: [],
    }
}

const mutations = {
    resetState(state) {
        Object.assign(state, initialState())
    },
    dataFetched(state, value) {
        state.dataFetched = value
    },
    fieldsFetched(state, value) {
        state.fieldsFetched = value
    },        
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
    },
    addPie(state, pie) {
        state.pies.push(pie)
    }    
}

const actions = {
    resetState({commit}) {
        commit('resetState')
    },
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
        commit('dataFetched',false)
        try {
            const url = route(GET_FIELDS_URL, { survey_id: state.survey })
            const response = await axios.get(url)
            commit('fields',response.data)
            commit('dataFetched',true)               
            commit('fieldsFetched',true)
        } catch (error) {
            commit('dataFetched',true)
            commit('fieldsFetched',false)              
        }
    },
    addPie({commit, state}) {

        const chartColors = {
            red: 'rgb(255, 99, 132)',
            orange: 'rgb(255, 159, 64)',
            yellow: 'rgb(255, 205, 86)',
            green: 'rgb(75, 192, 192)',
            blue: 'rgb(54, 162, 235)',
            purple: 'rgb(153, 102, 255)',
            grey: 'rgb(201, 203, 207)'
        }          

        const data = {
            datasets: [{
                data: [
                    5,
                    5,
                    5,
                    5,
                    5,
                ],
                backgroundColor: [
                    chartColors.red,
                    chartColors.orange,
                    chartColors.yellow,
                    chartColors.green,
                    chartColors.blue,
                ],
                label: 'Dataset 1'
            }],
            labels: [
                'Red',
                'Orange',
                'Yellow',
                'Green',
                'Blue'
            ]
        }

        const options = {
            responsive: true
        }            

        const pie = {no: state.pies.length+1, data, options}

        commit('addPie',pie)

    }
}

export const analytics = {
    namespaced: true,
    state: initialState(),
    mutations,
    actions,
}