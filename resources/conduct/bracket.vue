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
				<h3 class="mB-10 fsz-md c-grey-900 tt-c">
					<div v-for="value in item.values" :key="value.id">
						<div class="form-check mB-10">
							<label class="form-check-label">
								<input class="form-check-input" type="radio" v-bind:value="value.value_answer" v-model="item.answer"> {{ value.display }}
								<div v-if="valueIsItemAnswer(value.value_answer) && value.show_subitems">
									<div v-for="vsi in value.sub_items" :key="vsi.id">
										<div class="form-check mT-10">
											<label class="form-check-label">
												<input class="form-check-input" type="radio" v-bind:value="vsi.si_answer" v-model="value.answer" :disabled="!valueIsItemAnswer(value.value_answer)"> {{ vsi.display }}
											</label>
										</div>
									</div>
								</div>
							</label>
						</div>
					</div>
				</h3>
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

	import survey from './mixins/survey'
	import wizard from './mixins/wizard'
	import items from './mixins/items'

    export default {
	
		mixins: [survey,wizard,items],

		computed: {

			item() {

				let values = this.$store.getters.currentItem.values.map(value => {

					value.value_answer = {min: value.siv_min , max: value.siv_max, is_above: value.max_above}

					let sub_items = value.sub_items.map(sub_item => {

						sub_item.si_answer = {min: sub_item.vsi_min , max: sub_item.vsi_max, is_above: sub_item.max_above}

						return sub_item

					})

					value.sub_items = sub_items

					return value

				})

				this.$store.getters.currentItem.values = values

				return this.$store.getters.currentItem

			}

		},		

        created() {

        },

        mounted() {

			console.log('Bracket mounted');		

        } 

    }

</script>