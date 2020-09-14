<template>
    <div>
		<div class="container start-conduct">
			<steppers></steppers>
			<b-jumbotron>
				<template v-slot:lead><h3>{{content}}</h3></template>

				<hr class="my-4">

				<h3 class="text-muted">{{translated}}</h3>

				<div class="mt-5 center-content">
				    <a href="javascript:;" type="primary" class="btn btn-primary" v-if="showPrevious" @click="previous">Previous</a>
				    <a href="javascript:;" type="primary" class="btn btn-primary" v-if="showNext" @click="next">Next</a>
				</div>
			</b-jumbotron>
		</div>
    </div>
</template>

<style scoped>

	.start-conduct {
		margin-top: 5%;
	}
	
	.center-content {
		text-align: center;
	}

</style>

<script>

	import wizard from './mixins/wizard'

	import steppers from './steppers'

    export default {
	
		name: 'introduction',
		
		components: {
			steppers
		},		

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