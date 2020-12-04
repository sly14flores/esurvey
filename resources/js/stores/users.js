export const users = {
	namespaced: true,	
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