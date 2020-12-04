export const surveys = {
	namespaced: true,	
	state: {
		survey: {
			thankyou: {},
			privacy_notice: {}
		},
		surveys: []
	},
	mutations: {
		surveys(state, surveys) {
			state.surveys = surveys
		},
		survey(state, survey) {
			if (_.isEmpty(survey)) {
				state.survey = {
					id: 0,
					name: null,
					description: null,
					office: null,
					background: null,
					left_infographic: null,
					right_infographic: null,
					include_office: false,
					fullscreen_mobile: false,
					introductions: [],
					thankyou: {
						id: 0,
						infographic: null,
						message: null,
						translated: null
					},
					privacy_notice: {
						id:0,
						content: null,
						translated: null							
					},
					sections: []
				}
			} else {
				state.survey = survey
			}
		},
		introductions(state, introductions) {
			state.survey.introductions = introductions
		},
		sections(state, sections) {
			state.survey.sections = sections
		},
		items(state, section) {
			state.survey.sections[section.section].items = section.items
		},
		values(state, item) {
			state.survey.sections[item.section].items[item.item].values = item.values
		},
		sub_items(state, sub_item) {
			state.survey.sections[sub_item.section].items[sub_item.item].values[sub_item.value].sub_items = sub_item.sub_items		
		},
		aspects(state, section) {
			state.survey.sections[section.section].aspects = section.aspects
		},
		aspect_items(state, aspect) {
			state.survey.sections[aspect.section].aspects[aspect.aspect].items = aspect.items
		},
		aspect_item_values(state, item) {
			state.survey.sections[item.section].aspects[item.aspect].items[item.item].values = item.values
		},
		aspect_item_value_sub_items(state, sub_item) {
			state.survey.sections[sub_item.section].aspects[sub_item.aspect].items[sub_item.item].values[sub_item.value].sub_items = sub_item.sub_items		
		},		
	},
	actions: {
		
		fetchSurvey(context) {
			
			axios.get('/api/survey/'+context.state.survey.id, context.rootState.config).then(response => {

				context.commit('survey',response.data.data)
				
			}).catch(e => {
				
			})
			
		}
		
	},
	getters: {
		
	}
}