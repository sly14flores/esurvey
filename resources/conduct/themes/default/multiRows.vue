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
			<div class="col-12 col-lg-8 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style="min-width: 320px;">
				<h1 class="mB-30 fw-900 lh-1 c-red-500" style="font-size: 60px;">{{ item.item_name }}</h1>
				<p class="mB-10 fsz-md c-grey-900 tt-c">
					<table class="table table-bordered">
						<thead>
							<tr v-for="header in headers" :key="header.id">
								<th class="text-center">{{ header.display }}</th>				
								<th class="text-center cursor-pointer" v-for="si in header.sub_items" :key="si.id">{{ si.display }}</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="row in rows" :key="row.id">
								<td>{{ row.display }}</td>
								<td class="text-center cursor-pointer" v-for="choice in headers[0].sub_items" :key="choice.id" @click="choose(row,choice)">
									<div class="form-check mB-10 text-middle">
										<label class="form-check-label mB-10">
											<input class="form-check-input" type="radio" v-bind:value="choice.vsi_value" v-model="row.answer">
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

			item() {

				return this.$store.getters.currentItem

			},

			headers() {

				return this.$store.getters.currentItem.values.filter(value => value.row_type == 1)

			},

			rows() {

				return this.$store.getters.currentItem.values.filter(value => value.row_type == 2)

			}

		},

        created() {

        },

        mounted() {

			console.log('Multi Rows mounted');
			
			$('[data-toggle="tooltip"]').tooltip();

        } 

    }

</script>