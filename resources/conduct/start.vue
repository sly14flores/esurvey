<template>
    <div>
    	<component v-bind:is="currentComponent"></component>
    </div>
</template>

<style>

	.survey-backdrop {
		width: 100%;
		height: 100%;
		background-image: url("/conduct/images/backdrop.jpg");
		position: fixed;
	}
	
	.hred {
		border: 1px solid red;
	}
	
	.pointerize {
		cursor: pointer;
	}

</style>

<script>

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
			thankYou
        },
            
        computed: {

            currentComponent: {

				get() {

					return this.$store.getters.currentComponent
					
				},
				
				set(value) {
				
					console.log(this.currentComponent)
				
				}

            }

        },
        
        created() {

        },

        mounted() {

        },
		
		beforeRouteEnter (to, from, next) {
		
			next(vm => {

                vm.$parent.$refs.pSpinner.on();

                vm.fetchSurvey(vm.$route.params.token).then(response => {

                    vm.$store.commit('load',response.data.data)
                    vm.$parent.$refs.pSpinner.off();

                }).catch(e => {

                })

			})

		}

    }

</script>