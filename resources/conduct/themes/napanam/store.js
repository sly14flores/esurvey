import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
  key: 'survey',
  storage: window.localStorage
})

export default new Vuex.Store({
	// plugins: [vuexPersist.plugin],
	state: {
		item_types: [
			{
				id: 'intro',
				description: 'Introduction',
				component: 'introduction'
			},
			{
				id: 1,
				description: "Bracket",
				component: "bracket"
			},
			{ 
				id: 2,
				description: "Checkbox",
				component: "checkbox"
			},
			{ 
				id: 3,
				description: "Text Input",
				component: "text-input"
			},
			{ 
				id: 4,
				description: "Radios",
				component: "radios"
			},
			{ 
				id: 5,
				description: "Selections",
				component: "selections"
			},
			{ 
				id: 6,
				description: "Single Row",
				component: "single-row"
			},
			{ 
				id: 7,
				description: "Multi Rows",
				component: "multi-rows"
			}
		],
		survey: {
			introductions: [],
			privacy_notice: {},
			sections: [],
			thankyou: {}
		},
		currentItemIndex: null,
		finish: false,
		recursive: false,
		specific: false,
		api_token: null,
		agreed: false
	},
	mutations: {
		recursive(state, recursive) {
			state.recursive = recursive
		},
		specific(state, specific) {
			state.specific = specific
		},
		api_token(state, api_token) {
			state.api_token = api_token
		},
		itemValues(state, values) {
			
			if (values.aspect==null) {
				
				state.survey.sections[values.section].items[values.item].values = values.values

			} else {

				state.survey.sections[values.section].aspects[values.aspect].items[values.item] = values.values

			}			
			
		},
		load(state, survey) {

			state.survey = survey

		},
		start(state) {

			state.currentItemIndex = null

		},
		next(state) {
			
			state.finish = false

			if (state.currentItemIndex==null) {
				state.currentItemIndex = 0
			} else {
				state.currentItemIndex++
			}

		},
		previous(state) {
			
			if (state.currentItemIndex!=null) {
				if (state.currentItemIndex==0) {
					state.currentItemIndex = null
				} else {
					state.currentItemIndex--
				}
			}	

		},
		finish(state, status) {
			
			state.finish = status
			
		},
		agree(state, agree) {
		
			state.agreed = agree
		
		}
	},
	actions: {
		next(context) {

			return new Promise((resolve,reject) => {		

				setTimeout(() => {

					if (context.state.currentItemIndex!=null) {

						if ((context.state.currentItemIndex+1)<context.getters.itemsIndexes.length) context.commit('next');
						else context.commit('start');

					} else {

						context.commit('next');

					}

					resolve(true)

				}, 1000);

			});

		},
		previous(context) {

			return new Promise((resolve,reject) => {			

				setTimeout(() => {

					context.commit('previous');		
					resolve(true)

				}, 500);

			});

		},
		finish(context) {

			return new Promise((resolve,reject) => {

				setTimeout(() => {

					context.commit('finish', true);		
					resolve(true)

				}, 500);

			});

		},
		agree(context) {
			
			return new Promise((resolve,reject) => {

				setTimeout(() => {

					context.commit('agree', true);		
					resolve(true)

				}, 500);

			});			
			
		}
	},
	getters: {
		itemsIndexes: state => {

			let indexes = [];

			if (_.size(state.survey.introductions)>0) {
				
				state.survey.introductions.forEach((introduction,ii) => {
					
					let index = {};
					
					index.intro = ii;
					index.section = null;						
					index.aspect = null;
					index.item = null;

					indexes.push(index);
					index = {};	
					
				});
				
			}

			if (state.survey.sections != undefined) {

				state.survey.sections.forEach((s,is) => {

					let index = {};

					s.items.forEach((si,isi) => {
						
						if (si.is_shown) {

							index.intro = null;
							index.section = is;						
							index.aspect = null;
							index.item = isi;

							indexes.push(index);
							index = {};
							
						}

					});

					if (s.aspects.length>0) {

						s.aspects.forEach((sa,isa) => {

							index = {};

							sa.items.forEach((sai,isai) => {

								if (sai.is_shown) {

									index.intro = null;
									index.section = is;						
									index.aspect = isa;
									index.item = isai;								

									indexes.push(index);
									index = {};

								}
		
							});			

						});

					}

				});

			}

			return indexes;

		},
		currentItemIndexes: (state, getters) => {

			let currentItemIndexes = {};

			if (state.currentItemIndex!=null) {
				
				if (state.currentItemIndex<getters.itemsIndexes.length) currentItemIndexes = getters.itemsIndexes[state.currentItemIndex];

			}

			return currentItemIndexes;

		},
		currentItem: (state, getters) => {

			let currentItem = {};

			if (Object.keys(getters.currentItemIndexes).length > 0) {
				
				// Introductions
				if (_.size(getters.introductions)>0) {
					
					if (getters.currentItemIndexes.intro!=null) {
					
						currentItem = state.survey.introductions[getters.currentItemIndexes.intro];
					
						return currentItem;
						
					}
					
				}

				if (getters.currentItemIndexes.aspect==null) {
					
					currentItem = state.survey.sections[getters.currentItemIndexes.section].items[getters.currentItemIndexes.item];

				} else {

					currentItem = state.survey.sections[getters.currentItemIndexes.section].aspects[getters.currentItemIndexes.aspect].items[getters.currentItemIndexes.item];

				}

			}

			return currentItem;

		},
		currentComponent: (state, getters) => {

			if (state.finish && !state.recursive) return 'thank-you'

			let currentComponent = 'start-conduct'

			state.item_types.forEach((value) => {

				if (value.id === getters.currentItem.item_type) {
					
					if (getters.currentItem.item_type === 'intro') {
						if (!state.agreed) currentComponent = 'notice'
						else currentComponent = value.component
					} else {
						currentComponent = value.component
					}
					
				}

			})

			return currentComponent;

		},
		currentSection: (state, getters) => {

			let section = state.survey.sections[getters.currentItemIndexes.section]

			return section

		},
		currentAspect: (state, getters) => {
			
			let section = state.survey.sections[getters.currentItemIndexes.section]
			
			let aspect = {}
			
			if (getters.currentItemIndexes.aspect!=null) {
				aspect = section.aspects[getters.currentItemIndexes.aspect]
			}
			
			return aspect
						
		},
		introductions: (state, getters) => {
			
			return state.survey.introductions
			
		}
	}
})