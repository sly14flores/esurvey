<template>
    <div>
		<div class="container">
			<div class="d-flex mt-5 justify-content-center">
				<h1 class="display-4">{{sectionName}}</h1>
			</div>
			<div class="d-flex mt-2 justify-content-center" v-if="aspectName!=''">
				<p class="lead">{{aspectName}}</p>
			</div>
			<div class="d-flex mt-5 justify-content-center">
				<p class="h3">{{item.item_name}}</p>			
			</div>
			<div class="d-flex mt-2 justify-content-center">
				<div>
					<div class="custom-control custom-radio mb-1" v-for="value in item.values" :key="value.id">
					  <input type="radio" :id="'radioItem'+value.id" class="custom-control-input form-control-lg" name="radioItem" v-bind:value="value.siv_value" v-model="item.answer">
					  <label class="custom-control-label" :for="'radioItem'+value.id">{{ value.display }}</label>
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

			console.log('Radios mounted');            

        } 

    }

</script>