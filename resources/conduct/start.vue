<template>
    <div>
    	<component v-bind:is="currentComponent"></component>
    </div>
</template>

<style>
	
	.pointerize {
		cursor: pointer;
	}
	
	html {
	  font-size: 1rem;
	}

	@include media-breakpoint-up(sm) {
	  html {
		font-size: 1.2rem;
	  }
	}

	@include media-breakpoint-up(md) {
	  html {
		font-size: 1.4rem;
	  }
	}

	@include media-breakpoint-up(lg) {
	  html {
		font-size: 1.6rem;
	  }
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
	import notice from './notice'
	
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
			notice,
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
		
		methods: {
		
			fullscreen() {
		 
				function requestFullScreen(element) {
					// Supports most browsers and their versions.
					var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

					if (requestMethod) { // Native full screen.
						requestMethod.call(element);
					} else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
						var wscript = new ActiveXObject("WScript.Shell");
						if (wscript !== null) {
							wscript.SendKeys("{F11}");
						}
					}
				}

				var elem = document.body; // Make the body go full screen.
				requestFullScreen(elem);		 
		 
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
					
					vm.$store.commit('recursive',(vm.$route.params.recursive=='recursive')?true:false)
					vm.$store.commit('specific',(vm.$route.params.scope=='specific')?true:false)				
					
                    if (vm.$store.state.finish) {
					
						vm.$store.commit('start')
					
					} else {
					
						vm.$store.commit('load',response.data.data)
						
						if (response.data.data.fullscreen_mobile) vm.fullscreen()
						
					}
                   vm.$parent.$refs.pSpinner.off();

                }).catch(e => {

                })

			})

		}

    }

</script>