<template>
	<div class="row no-gutters nmp" v-bind:style="{height: height+'px'}">
		<div class="col-sm col-md-5 d-none d-md-block">
			<div class="nmp ccenter">
				<img v-if="left_infog!=null" :src="left_infog" class="img-fluid left_infog" alt="SOPA 2020">
			</div>
		</div>
		<div class="col-sm col-md-7 bg-white-right g-white" v-bind:style="{height: height+'px'}">
			<div class="nmp">
				<steppers></steppers>
				<h4 style="margin-top: 20%; text-align: center; font-style: italic;" class="display-on-mobile-only font-weight-bold">{{description}}</h4>
				<img v-if="right_infog!=null" :src="right_infog" class="display-on-mobile-only img-fluid right_infog" alt="Stronger La Union">				
				<h2 style="margin-top: 8%; margin-left: 5%;">{{sectionName}}</h2>			
				<h4 v-if="sectionNameTranslated!=null" class="text-muted" style="margin-top: 5px; margin-left: 5%; font-style: italic">({{sectionNameTranslated}})</h4>
				<hr>
				<div class="d-flex mt-1">
					<p class="h5" style="margin-left: 5%; line-height: 130%;">{{item.item_name}} <br><span v-if="item.translated!=null" class="text-muted" style="font-style: italic">({{item.translated}})</span></p>			
				</div>
				<div class="d-flex">
					<div style="margin-left: 5%;" class="mt-4">
						<table class="table table-bordered">
							<thead>
								<tr v-if="item.item_presentation == 1">
									<th class="text-center cursor-pointer" v-for="value in item.values" :key="value.id" @click="choose(value)">{{ value.display }}</th>
								</tr>
								<tr v-if="item.item_presentation == 2">
									<th class="text-center cursor-pointer" v-for="value in item.values" :key="value.id" @click="choose(value)">
										<img class="siv-infographic" v-bind:src="value.siv_infographic" v-bind:alt="value.display" data-toggle="tooltip" data-placement="top" v-bind:title="value.display">									
									</th>
								</tr>							
							</thead>
							<tbody>
								<tr>
									<td class="text-center text-middle cursor-pointer" v-for="value in item.values" :key="value.id" @click="choose(value)">
										<div class="form-check text-middle">
											<label class="form-check-label mb-4">
												<input class="form-check-input" type="radio" :value="value.siv_value" v-model="item.answer">
											</label>
										</div>										
									</td>
								</tr>
							</tbody>
						</table>						
					</div>
				</div>			
				<div class="d-flex mt-3" style="margin-left: 5%;">
					 <button type="button" class="btn btn-primary mr-2" v-if="showPrevious" @click="previous">Previous</button>
					 <button type="button" class="btn btn-primary mr-2" v-if="showNext" @click="next">Next</button>
					 <button type="button" class="btn btn-primary" v-if="showFinish" @click="finish">Finish</button>			
				</div>
				<img v-if="bottom_logo!=null" :src="bottom_logo" class="img-fluid bottom-logo display-on-mobile-only display-off" alt="SOPA 2020">				
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
	
	.text-middle {
	
		vertical-align: middle!important;
		
	}
	.cursor-pointer {
	
		cursor: pointer;
		
	}
	.siv-infographic {
	
		width: 100px;
		
	}

</style>

<script>

	import survey from '../../mixins/survey'
	import wizard from '../../mixins/wizard'
	import items from '../../mixins/items'	

	import steppers from './steppers'

    export default {

		components: {
			steppers
		},

		mixins: [survey,wizard,items],
		
		data() {
		
			return {
				height: window.innerHeight			
			}
		
		},		

		computed: {
		
			description() {
			
				return this.$store.state.survey.description
			
			},		

			item() {

				return this.$store.getters.currentItem

			}

		},
		
		methods: {
		
			choose(value) {
			
				this.item.answer = value.siv_value
			
			}
		
		},

        created() {

        },

        mounted() {

			console.log('Single Row mounted');   
			
			$(window).resize(() => {
				this.height = window.innerHeight
			});

        } 

    }

</script>