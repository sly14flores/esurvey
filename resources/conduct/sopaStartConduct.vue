<template>
	<div class="row no-gutters nmp" v-bind:style="{height: height+'px'}">
		<div class="col-sm col-md-5 g-white">
			<div class="nmp ccenter">
				<div class="display-on-mobile-only">
					<h4 style="margin-top: 20%; font-style: italic;" class="font-weight-bold">ONE KAPROBINSIAAN FOR A</h4>
					<img :src="right_infog" class="img-fluid right_infog" alt="Stronger La Union">					
					<button style="margin-top: 75%; border-radius: 20px!important;" class="btn btn-outline-light" @click="start"><span class="font-weight-bold">START THE SURVEY</span></button>
				</div>			
				<img :src="left_infog" class="img-fluid left_infog" alt="SOPA 2020">
			</div>
		</div>
		<div class="col-sm col-md-7 bg-white d-none d-md-block">
			<div class="nmp">
				<div class="steppers">
					<button class="stepper-fill"></button>
					<button class="stepper-outline"></button>
					<button class="stepper-outline"></button>
					<button class="stepper-outline"></button>
				</div>
				<h4 style="margin-left: 30px; margin-top: 20%;" class="font-weight-bold">ONE KAPROBINSIAAN FOR A</h4>
				<img :src="right_infog" class="img-fluid right_infog" alt="Stronger La Union">
				<button style="margin-top: 20px; margin-left: 30px; border-radius: 20px!important;" class="btn btn-secondary" @click="start"><span class="font-weight-bold">START THE SURVEY</span></button>
			</div>
		</div>		
	</div>
</template>

<style scoped>
	
	.left_infog {
		width: 50%;
		margin-top: 82%		
	}
	
	.right_infog {
		width: 80%;
		margin-left: 30px;
		margin-top: -6%;
	}
	
	.display-on-mobile-only {
		display: none;
	}
	
	/* Mobile rules */
	@media (max-width: 575.98px) {
	
		.display-on-mobile-only {
			display: block;
		}
		
		.g-white {
			height: 80%;
			background-image: linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0));
		}
	
		.left_infog {
			width: 60%;
			margin: 0%;
			margin-left: auto;
			margin-right: auto;
			position: fixed;
			bottom: 3%;
			left: 20%;
		}
		
		.right_infog {
			width: 60%;
			margin: 0;
		}		
	
	}

</style>

<script>

    export default {
	
		data() {
		
			return {
				height: window.innerHeight,
				left_infog: '/conduct/images/sopa-logo-white.png',
				right_infog: '/conduct/images/stronger-launion.png'
			}
		
		},

		methods: {

			start() {

				this.$root.$refs.pSpinner.on();

				this.$store.dispatch('next').then(response => {

					this.$root.$refs.pSpinner.off();

				});

			},

		},

		computed: {

			name() {

				return this.$store.state.survey.name

			},

			description() {

				return this.$store.state.survey.description				

			}

		},

        created() {

        },

        mounted() {

			console.log('SOPA Start Conduct mounted');
			
			$(window).resize(() => {
				this.height = window.innerHeight
			}); 			

        }

    }

</script>