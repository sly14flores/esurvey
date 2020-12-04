export const offices = {
	namespaced: true,	
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