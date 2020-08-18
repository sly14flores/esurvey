<template>
    <!-- <div> -->
		<div class="peers ai-s fxw-nw h-100vh">
			<div class="col-xs-12 col-sm-12 col-md-4 peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv left-panel-backdrop">
				<h2 class="text-center mT-10 fw-900 c-blue-900" style="font-size: 40px;">{{sectionName}}</h2>
				<h3 class="text-center mT-10 fw-900 c-blue-700" style="font-size: 20px;">{{aspectName}}</h3>
				<div class="pos-a centerXY">
					<div class="bgc-white bdrs-50p pos-r" v-if="showInfographic">
						<img class="pos-a centerXY" v-bind:src="item.item_infographic" alt="">
					</div>					
				</div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style="min-width: 320px;">
				<h1 class="mB-30 fw-900 lh-1 c-red-500" style="font-size: 60px;">{{ item.item_name }}</h1>
				<p class="mB-10 fsz-md c-grey-900 tt-c">
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
									<div class="form-check mB-10 text-middle">
										<label class="form-check-label mB-10">
											<input class="form-check-input" type="radio" :value="value.siv_value" v-model="item.answer">
										</label>
									</div>										
								</td>
							</tr>
						</tbody>
					</table>
				</p>
				<div class="mT-30">
				    <a href="javascript:;" type="primary" class="btn btn-primary" v-if="showPrevious" @click="previous">Previous</a>
				    <a href="javascript:;" type="primary" class="btn btn-primary" v-if="showNext" @click="next">Next</a>
				    <a href="javascript:;" type="primary" class="btn btn-primary" v-if="showFinish" @click="finish">Finish</a>
				</div>
			</div>
		</div>       
    <!-- </div> -->
</template>

<style>

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
		
		methods: {
		
			choose(value) {
			
				this.item.answer = value.siv_value
			
			}
		
		},

        created() {

        },

        mounted() {

			console.log('Single Row mounted');   
			
  			$('[data-toggle="tooltip"]').tooltip();

        } 

    }

</script>