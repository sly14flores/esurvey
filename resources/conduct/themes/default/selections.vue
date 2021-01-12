<template>
    <div>
		<div class="peers ai-s fxw-nw h-100vh">
			<div class="peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv left-panel-backdrop">
				<h2 class="text-center mT-10 fw-900 c-blue-900" style="font-size: 40px;">{{sectionName}}</h2>
				<h3 class="text-center mT-10 fw-900 c-blue-700" style="font-size: 20px;">{{aspectName}}</h3>
				<div class="pos-a centerXY">
					<div class="bgc-white bdrs-50p pos-r" v-if="showInfographic">
						<img class="pos-a centerXY" v-bind:src="item.item_infographic" alt="">
					</div>					
				</div>
			</div>
			<div class="col-12 col-md-6 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style="min-width: 320px;">
				<h1 class="mB-30 fw-900 lh-1 c-red-500" style="font-size: 60px;">{{ item.item_name }}</h1>
				<form>
					<div class="form-group">
						<select class="form-control" v-model="item.value_selected">
							<option disabled :value="null">Select</option>
							<option v-for="value in item.values" :value="value" :key="value.id">{{value.display}}</option>			
						</select>
					</div>
					<form v-if="show_subitems">
						<div class="form-group">
							<select class="form-control" v-model="item.value_selected.answer">
								<option disabled :value="null">Select</option>
								<option v-for="vsi in sub_items" :value="vsi.vsi_value" :key="vsi.id">{{vsi.display}}</option>
							</select>
						</div>
					</form>					
				</form>
				<div class="mT-30">
				    <a href="javascript:;" type="primary" class="btn btn-primary" v-if="showPrevious" @click="previous">Previous</a>
				    <a href="javascript:;" type="primary" class="btn btn-primary" v-if="showNext" @click="next">Next</a>
				    <a href="javascript:;" type="primary" class="btn btn-primary" v-if="showFinish" @click="finish">Finish</a>
				</div>
			</div>
		</div>       
    </div>
</template>

<style>

</style>

<script>

	import survey from '../../mixins/survey'
	import wizard from '../../mixins/wizard'
	import items from '../../mixins/items'	

    export default {

		mixins: [survey,wizard,items],

		computed: {

			show_subitems() {

				let show_subitems = false

				if (this.item.hasOwnProperty('value_selected')) {

					show_subitems = this.item.value_selected.show_subitems

				}

				return show_subitems

			},

			sub_items() {

				let value_selected_index = this.item.values.indexOf(this.item.value_selected)

				return this.item.values[value_selected_index].sub_items

			},

			item() {

				return this.$store.getters.currentItem

			}

		},

        created() {

        },

        mounted() {

			console.log('Selections mounted');            

        } 

    }

</script>