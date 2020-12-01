import axios from 'axios'
import route from '../library/route'

/**
 * URLSs
 */
const GET_ALL_GROUPS_URL = 'api/groups'
const GET_GROUP_URL = ':id'

export const groups = {
	namespaced: true,	
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
		async all({commit}, {page}) {
			try {
				const response = await axios.get(GET_ALL_GROUPS_URL,{params: {page}})
				commit('groups',response.data)
			} catch(error) {
		
			}
		},
		async get({commit}, {id}) {
			try {
				const url =  route(GET_GROUP_URL, { id })
				const response = await axios.get(url)
			} catch(error) {

			}
		}
	},
	getters: {
		
	}
}