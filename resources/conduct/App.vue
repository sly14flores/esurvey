<template>
	<div class="survey-backdrop">
		<sly-spinner ref="pSpinner"></sly-spinner>
		<transition>
			<router-view></router-view>
		</transition>	
	</div>
</template>

<style>

	

</style>

<script>

	import SlySpinner from './SlySpinner.vue'

	import router from './router.js'

	export default {
		router,		
		components: {
			SlySpinner,
		},	
		mounted() {
			console.log('App mounted')
		}
	}

</script>