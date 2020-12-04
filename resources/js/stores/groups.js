import axios from 'axios'
import route from '../library/route'

/**
 * URLSs
 */
const GET_ALL_GROUPS_URL = 'api/groups'
const GET_GROUP_URL = 'api/group/:id'

export const groups = {
	namespaced: true,	
	state: {
		group: {},
		groups: {
			fetched: false,
			data: [],
			pagination: {}
		}
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
		fetched(state, value) {
			state.groups.fetched = value
		},
		groups(state, groups) {
			state.groups.data = groups.data
			state.groups.pagination = groups.meta
		},		
		authorizations(state, authorizations) {
			Vue.set(state.group, 'authorizations', authorizations)
		}
	},
	actions: {
		async ALL({commit}, {page}) {
			commit('fetched', false)
			try {
				const response = await axios.get(GET_ALL_GROUPS_URL,{params: {page}})
				commit('groups',response.data)
				commit('fetched', true)
			} catch(error) {
				commit('fetched', true)
			}
		},
		async GET({commit}, {id}) {
			try {
				const url =  route(GET_GROUP_URL, { id })
				const response = await axios.get(url)
				commit('group',response.data)
			} catch(error) {

			}
		}
	},
	getters: {
		
	}
}