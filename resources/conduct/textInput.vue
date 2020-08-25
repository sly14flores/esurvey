<template>
    <div>
		<div class="container">
			<div class="d-flex mt-5 justify-content-center">
				<h1 class="display-4">{{sectionName}}</h1>
			</div>
			<div class="d-flex mt-2 justify-content-center" v-if="aspectName!=''">
				<p class="lead">{{aspectName}}</p>
			</div>
			<div v-if="!item.text_is_multiple" class="d-flex mt-5 justify-content-center">
				<p class="h3">{{item.item_name}}</p>			
			</div>
			<div v-if="!item.text_is_multiple" class="d-flex mt-2 justify-content-center" :class="{'flex-column': item.values[0].data_type==3}">
				<form>
					<div class="form-group">
						<input type="text" class="form-control" v-if="item.values[0].data_type==1" v-model="item.answer">
						<input type="number" class="form-control" v-if="item.values[0].data_type==2" v-model="item.answer">
						<textarea class="form-control" v-if="item.values[0].data_type==3" v-model="item.answer"></textarea>
					</div>
				</form>
			</div>
			<div v-else class="d-flex flex-column mt-2 justify-content-center">
				<div class="form-group" v-for="(value,i) in values" :key="value.id">
					<label>{{value.display}}</label>
					<input type="text" class="form-control" v-if="value.data_type==1" v-model.trim="$v.values.$each[i].answer.$model" :class="{'is-invalid': $v.values.$each[i].answer.$error}">
					<input type="number" class="form-control" v-if="value.data_type==2" v-model.trim="$v.values.$each[i].answer.$model" :class="{'is-invalid': $v.values.$each[i].answer.$error}">
					<textarea class="form-control" v-if="value.data_type==3" v-model.trim="$v.values.$each[i].answer.$model" :class="{'is-invalid': $v.values.$each[i].answer.$error}"></textarea>
					<div class="invalid-feedback">{{value.display}} is required</div>					
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

	import { required, email, minLength, requiredIf, requiredUnless } from "vuelidate/lib/validators";
	import survey from './mixins/survey'
	import wizard from './mixins/wizard'
	import items from './mixins/items'	

    export default {
	
		mixins: [survey,wizard,items],

		computed: {

			item() {

				return this.$store.getters.currentItem

			},
			
			values() {
			
				return this.$store.getters.currentItem.values
			
			}

		},

        created() {

        },

		validations: {
			values: {
				required: requiredIf(function(model) {
					return this.item.text_is_multiple == true
				}),
				$each: {
					answer: {required: requiredIf((model) => {
						return model.required == true
					})}
				}				
			}
		},

        mounted() {

			console.log('Text Input mounted');            

        } 

    }

</script>