export const dashboard = {
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