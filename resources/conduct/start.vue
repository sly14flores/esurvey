<template>
    <div>
    	<component v-bind:is="currentComponent"></component>
    </div>
</template>

<style>
	
	.pointerize {
		cursor: pointer;
	}

</style>

<script>

	import Vue from 'vue'
	import Vuelidate from "vuelidate";
	Vue.use(Vuelidate)

    import startConduct from './startConduct.vue'
    import surveySection from './surveySection.vue'
    import bracket from './bracket.vue'
    import checkbox from './checkbox.vue'
    import textInput from './textInput.vue'
    import radios from './radios.vue'
    import selections from './selections.vue'
    import singleRow from './singleRow.vue'
    import multiRows from './multiRows.vue'
	
	import introduction from './introduction'
	import thankYou from './thankYou'
	
	import survey from './mixins/survey'
	
	// For SOPA
    import sopaStartConduct from './sopaStartConduct.vue'	
    import sopaRadios from './sopaRadios.vue'	
    import sopaTextInput from './sopaTextInput.vue'	
    import sopaCheckbox from './sopaCheckbox.vue'	
    import sopaThankYou from './sopaThankYou.vue'

    export default {

        name: 'start',
		
		mixins: [survey],
        
        components: {
            startConduct,
            surveySection,
            bracket,
            checkbox,
            textInput,
            radios,
            selections,
            singleRow,
            multiRows,
			introduction,
			thankYou,
			sopaStartConduct,
			sopaRadios,
			sopaTextInput,
			sopaCheckbox,
			sopaThankYou
        },
            
        computed: {

            currentComponent: {

				get() {

					return this.$store.getters.currentComponent
					
				},
				
				set(value) {
				
				}

            }

        },
        
        created() {

        },

        mounted() {
		
			console.log(window.localStorage)

        },
		
		beforeRouteEnter (to, from, next) {
		
			next(vm => {

                vm.$parent.$refs.pSpinner.on();

                vm.fetchSurvey(vm.$route.params.token).then(response => {

					console.log(vm.$store.state.finish)
					
                    if (vm.$store.state.finish) {
					
						vm.$store.commit('start')
					
					} else {
					
						vm.$store.commit('load',response.data.data)
						
					}
                    vm.$parent.$refs.pSpinner.off();

                }).catch(e => {

                })

			})

		}

    }

</script>