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
async function getAllGroupsApi() {
	try {
		const response = await axios.get('api/groups?page=1')
		console.log(response.data)
		return response.data
	} catch(error) {

	}
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
			const data = getAllGroupsApi()
			console.log(data)
			// const data = getAllGroups().then(response => {
			// 	console.log(response)
			// })
			// context.commit('groups',[])
		}
	},
	getters: {
		
	}
}