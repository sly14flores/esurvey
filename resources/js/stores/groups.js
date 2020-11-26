import axios from 'axios'
import route from '../library/route'

/**
 * URLSs
 */
const GET_ALL_GROUPS_URL = ''
const GET_GROUP_URL = ':id'

 /**
  * APIs
  */
const getAllGroups = async() => {
	return await axios.get('api/groups?page=1')
}

const getGroup = async() => {
	// const url =  route(GET_GROUP_URL, { id })
	// const resposnse = await axios
	// return response
}

export const groups = {
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
		getAllGroups(context) {
			getAllGroups().then(response => {
				console.log(response.data)
			})
			context.commit('groups',[])
		}
	},
	getters: {
		
	}
}