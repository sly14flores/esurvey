<template>
    <div>
		<div class="container">
			<div class="d-flex mt-5 justify-content-center">
				<h1 class="display-4">{{sectionName}}</h1>
			</div>
			<div class="d-flex mt-2 justify-content-center" v-if="aspectName!=''">
				<p class="lead">{{aspectName}}</p>
			</div>
			<div class="d-flex mt-4 justify-content-center">
				<p class="h3">{{item.item_name}}</p>			
			</div>
			<div class="d-flex flex-column mt-2 justify-content-center">
				<div class="row">
					<div class="col-lg-6 offset-lg-3">
						<div class="form-check mb-1" v-for="value in values" :key="value.id">
						  <input class="form-check-input mt-2" type="checkbox" v-model="value.answer" :id="'checkboxItem'+value.id" @change="countChecks(value)">
						  <label class="form-check-label" :for="'checkboxItem'+value.id">
							<p class="lead pointerize">{{ value.display }}</p>
						  </label>
						</div>			
					</div>			
				</div>			
			</div>
			<div class="d-flex mt-5 justify-content-center">
				 <button type="button" class="btn btn-primary mr-2" v-if="showPrevious" @click="previous">Previous</button>
				 <button type="button" class="btn btn-primary mr-2" v-if="showNext" @click="next">Next</button>
				 <button type="button" class="btn btn-primary" v-if="showFinish" @click="finish">Finish</button>			
			</div>			
		</div>       
    </div>
</template>

<style>

</style>

<script>

	import survey from './mixins/survey'
	import wizard from './mixins/wizard'
	import items from './mixins/items'

    export default {

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

					let index = this.values.indexOf(value)

					let values = _.cloneDeep(this.values)
					values[index].answer = false
					this.values = values

					this.$parent.currentComponent = 'checkbox'

					/*
					Swal.fire({
					  title: 'Warning!',
					  text: 'Please select only '+this.allowed+' item(s)',
					  icon: 'warning',
					  confirmButtonText: 'Close'
					})
					*/

				}

			}
			
		},

        created() {

        },

        mounted() {

			console.log('Checkbox mounted');            

        } 

    }

</script>