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
						<div class="form-check mb-1" v-for="value in item.values" :key="value.id">
						  <input class="form-check-input mt-2" type="checkbox" v-model="value.answer" :id="'checkboxItem'+value.id">
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

			}

		},

        created() {

        },

        mounted() {

			console.log('Checkbox mounted');            

        } 

    }

</script>