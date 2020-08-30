<template>
	<div class="row no-gutters nmp">
		<div class="col-sm col-md-5 d-none d-md-block" v-bind:style="{height: height+'px'}">
			<div class="nmp ccenter" style="text-align: center;" v-bind:style="{height: height+'px'}">		
				<img :src="left_infog" class="img-fluid left-col-logo" alt="SOPA 2020">
			</div>
		</div>
		<div class="col-sm col-md-7 bg-white-right g-white">
			<div class="nmp">
				<steppers></steppers>			
				<h4 style="margin-top: 15%; text-align: center; font-style: italic;" class="display-on-mobile-only font-weight-bold">ONE KAPROBINSIAAN FOR A</h4>			
				<img :src="right_infog" class="display-on-mobile-only img-fluid right_infog" alt="Stronger La Union">				
				<h2 style="margin-top: 8%; margin-left: 5%;">{{sectionName}}</h2>			
				<h4 v-if="sectionNameTranslated!=null" class="text-muted" style="margin-top: 5px; margin-left: 5%; font-style: italic">( {{sectionNameTranslated}} )</h4>
				<hr>
				<p class="h5" style="margin-left: 5%;">{{item.item_name}}</p>
				<p v-if="item.translated!=null" class="h5 text-muted" style="font-style: italic; margin-left: 5%;">({{item.translated}})</p>			
				<div class="row" style="margin-left: 5%;">
					<div class="col-sm-12">
						<div class="form-check mb-1" v-for="value in values" :key="value.index">
						  <input class="form-check-input mt-2" type="checkbox" v-model="value.answer" :id="'checkboxItem'+value.id" @change="countChecks(value)">
						  <label class="form-check-label" :for="'checkboxItem'+value.id">
							<p class="lead pointerize">{{ value.display }}</p>
						  </label>
						</div>					
					</div>					
				</div>
			</div>
			<div class="d-flex mt-2" style="margin-left: 5%;">
				 <button type="button" class="btn btn-primary mr-2" v-if="showPrevious" @click="previous">Previous</button>
				 <button type="button" class="btn btn-primary mr-2" v-if="showNext" @click="next">Next</button>
				 <button type="button" class="btn btn-primary" v-if="showFinish" @click="finish">Finish</button>			
			</div>
			<div class="display-on-mobile-only" style="text-align: right;">
				<img :src="bottom_logo" class="img-fluid bottom-logo" alt="SOPA 2020">
			</div>
		</div>
    </div>
</template>

<style scoped>

	.left-col-logo {
		width: 22%;
		position: fixed;
		left: 10%;
		bottom: 10%;
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
		}

		.right_infog {
			width: 60%;
			margin: 0;
			margin-left: auto;
			margin-right: auto;
		}

		.bottom-logo {
			margin-top: 10%;
			margin-bottom: 3%;
			margin-right: 3%;
			width: 50%;
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

			},
			
			values: {

				get() {

					return this.$store.getters.currentItem.values				

				},

				set(value) {

					this.$store.commit('itemValues',{section: this.$store.getters.currentItemIndexes.section, aspect: this.$store.getters.currentItemIndexes.aspect, item: this.$store.getters.currentItemIndexes.item, values: value})

				}

			},
			
			allowed() {
			
				return this.$store.getters.currentItem.max_checkbox_selections
			
			}

		},
		
		methods: {
		
			countChecks(value) {

				let selecteds = this.values.filter(value => {
				
					return value.answer === true
					
				})
				
				if (selecteds.length>3) {

					this.$nextTick(() => {
					
						let index = this.values.indexOf(value)

						let values = _.cloneDeep(this.values)
						values[index].answer = false
						this.values = values					

					})

					Swal.fire({
					  title: 'Warning!',
					  text: 'Please select only '+this.allowed+' item(s)',
					  icon: 'warning',
					  confirmButtonText: 'Close'
					})

				}

			}
			
		},

        created() {

        },

        mounted() {

			console.log('SOPA Checkbox mounted');

			$(window).resize(() => {
				this.height = window.innerHeight
			});

			console.log(window.innerHeight);

        } 

    }

</script>