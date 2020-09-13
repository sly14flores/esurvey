<template>
	<div class="row no-gutters nmp" v-bind:style="{height: height+'px'}">
		<div class="col-sm col-md-5 d-none d-md-block">
			<div class="nmp ccenter">		
				<img :src="infographic" class="img-fluid left_infog" alt="SOPA 2020">
			</div>
		</div>
		<div class="col-sm col-md-7 bg-white-right g-white" v-bind:style="{height: height+'px'}">
			<div style="margin: 0 50px;">				
				<div class="h2 center ty-margin">
					<b-iconstack font-scale="3">
					  <b-icon stacked icon="circle" variant="success"></b-icon>
					  <b-icon stacked icon="check" variant="success" shift-v="-1" scale="0.85"></b-icon>
					</b-iconstack>
					<!-- <b-icon icon="check-circle" variant="success" style="width: 120px; height: 120px;"></b-icon> -->
				</div>

				<h5 class="mt-3 center" v-html="message"></h5>
				<h5 class="mt-3 text-muted center" v-html="translated"></h5>
			</div>
		</div>
	</div>
</template>

<style scoped>

	.center {
		text-align: center;
	}
	
	hr {
		border: 1px solid gray;
		margin-left: 5%;
	}

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
	
	.bg-white-right {
		background-color: white;
	}
	
	.ty-margin {
		margin-top: 10%;
	}
	
	/* Mobile rules */
	@media (max-width: 575.98px) {
	
		.display-on-mobile-only {
			display: block;
		}
		
		.ty-margin {
			margin-top: 25px;
		}
		
		.bg-white-right {
			background-color: transparent;
		}		
		
		.g-white {
			height: 80%;
			background-image: linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0.8));
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
			margin-left: auto;
			margin-right: auto;
		}

		.bottom-logo {
			width: 50%;
			position: fixed;
			right: 10px;
			bottom: 10px;
		}
	
	}

</style>

<script>

	import Vue from 'vue'
	import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

	Vue.use(BootstrapVue)
	Vue.use(BootstrapVueIcons)

	export default {
	
		data() {
		
			return {
				height: window.innerHeight
			}

		},
		
		computed: {
		
			infographic() {
				
				return this.$store.state.survey.thankyou.infographic
				
			},
			
			message() {
			
				return this.$store.state.survey.thankyou.message		
			
			},
			
			translated() {
			
				return '('+this.$store.state.survey.thankyou.message+')'		
			
			}
		
		},

        mounted() {

			console.log('SOPA Text Input mounted'); 

			$(window).resize(() => {
				this.height = window.innerHeight
			}); 			

        }		

	}

</script>