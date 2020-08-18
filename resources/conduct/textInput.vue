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
			<div class="d-flex mt-2 justify-content-center" v-if="(item.values[0].data_type==1)||(item.values[0].data_type==2)">
				<form v-if="!item.text_is_multiple">
					<div class="form-group">
						<input type="text" class="form-control" v-bind:type="(item.values[0].data_type==2)?'number':'text'" v-model="item.answer">
					</div>
				</form>
			</div>
			<div class="d-flex flex-column mt-2 justify-content-center" v-if="(item.values[0].data_type==3)">
				<div class="form-group">
					<textarea class="form-control" v-model="item.answer"></textarea>
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

			console.log('Text Input mounted');            

        } 

    }

</script>