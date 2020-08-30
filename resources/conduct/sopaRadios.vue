<template>
	<div class="row no-gutters nmp" v-bind:style="{height: height+'px'}">
		<div class="col-sm col-md-5 d-none d-md-block">
			<div class="nmp ccenter">
				<img :src="left_infog" class="img-fluid left_infog" alt="SOPA 2020">
			</div>
		</div>
		<div class="col-sm col-md-7 bg-white-right g-white" v-bind:style="{height: height+'px'}">
			<div class="nmp">
				<steppers></steppers>
				<h4 style="margin-top: 20%; text-align: center; font-style: italic;" class="display-on-mobile-only font-weight-bold">ONE KAPROBINSIAAN FOR A</h4>			
				<img :src="right_infog" class="display-on-mobile-only img-fluid right_infog" alt="Stronger La Union">				
				<h2 style="margin-top: 8%; margin-left: 5%;">{{sectionName}}</h2>			
				<h4 v-if="sectionNameTranslated!=null" class="text-muted" style="margin-top: 5px; margin-left: 5%; font-style: italic">( {{sectionNameTranslated}} )</h4>
				<hr>
				<div class="d-flex mt-1">
					<p class="h5" style="margin-left: 5%;">{{item.item_name}} <span v-if="item.translated!=null" class="text-muted" style="font-style: italic">({{item.translated}})</span></p>			
				</div>				
				<div class="d-flex">
					<div style="margin-left: 5%;">
						<div class="custom-control custom-radio mb-1" v-for="value in item.values" :key="value.id">
						  <input type="radio" :id="'radioItem'+value.id" class="custom-control-input form-control-lg" name="radioItem" v-bind:value="value.siv_value" v-model="item.answer">
						  <label class="custom-control-label" :for="'radioItem'+value.id">{{ value.display }} <span v-if="value.display_translated!=null" class="text-muted" style="font-style: italic">({{value.display_translated}})</span></label>
						</div>				
					</div>				
				</div>				
				<div class="d-flex mt-3" style="margin-left: 5%;">
					 <button type="button" class="btn btn-primary mr-2" v-if="showPrevious" @click="previous">Previous</button>
					 <button type="button" class="btn btn-primary mr-2" v-if="showNext" @click="next">Next</button>
					 <button type="button" class="btn btn-primary" v-if="showFinish" @click="finish">Finish</button>			
				</div>
				<img :src="bottom_logo" class="img-fluid bottom-logo display-on-mobile-only display-off" alt="SOPA 2020">
			</div>
		</div>		
	</div>
</template>

<style scoped>

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
	
	/* Mobile rules */
	@media (max-width: 575.98px) {
	
		.display-on-mobile-only {
			display: block;
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
	
	@media (max-width: 620px) {
		
		.display-off {
			display: none;
		}

	}

</style>

<script>

	import survey from './mixins/survey'
	import wizard from './mixins/wizard'
	import items from './mixins/items'
	
	import steppers from './steppers'	

    export default {
	
		components: {
			steppers
		},
	
		data() {
		
			return {
				height: window.innerHeight,
				left_infog: '/conduct/images/sopa-logo-white.png',
				bottom_logo: '/conduct/images/sopa-logo-black.png',
				right_infog: '/conduct/images/stronger-launion.png'				
			}
		
		},	

		mixins: [survey,wizard,items],

		computed: {

			item() {

				return this.$store.getters.currentItem

			}

		},

        created() {

        },

        mounted() {

			console.log('SOPA Radios mounted');
			
			$(window).resize(() => {
				this.height = window.innerHeight
			});

        } 

    }

</script>