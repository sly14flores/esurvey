<template>
    <div>
		<div class="pos-a t-0 l-0 bgc-white w-100 h-100 d-f fxd-r fxw-w ai-c jc-c pos-r p-30">
			<div class="d-f jc-c fxd-c content-width">
				<!-- <h1 class="mB-30 fw-900 lh-1 c-red-500" style="font-size:60px">500</h1> -->
				<h3 class="mB-10 fsz-lg c-grey-900 tt-c">{{content}}</h3>
				<p class="mB-30 fsz-def c-grey-700" v-if="translated!=null">{{translated}}</p>
				<div class="mT-20 align-right">
				    <a href="javascript:;" type="primary" class="btn btn-primary" v-if="showPrevious" @click="previous">Previous</a>
				    <a href="javascript:;" type="primary" class="btn btn-primary" v-if="showNext" @click="next">Next</a>
				</div>
			</div>
		</div>
    </div>
</template>

<style scoped>

	.content-width {
		
		width: 60%;
		
	}
	
	.align-right {
	
		text-align: right;
	
	}

</style>

<script>

	import wizard from './mixins/wizard'

    export default {
	
		name: 'introduction',

		mixins: [wizard],	
        
		computed: {
		
			content() {
			
				return this.$store.getters.currentItem.content
			
			},
			
			translated() {
			
				return this.$store.getters.currentItem.translated			
			
			}
		
		},
		
        created() {

        },

        mounted() {        

        }        

    }

</script>