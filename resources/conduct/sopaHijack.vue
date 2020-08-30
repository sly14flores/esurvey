<template>
	<div>
	</div>
</template>

<style scoped>

</style>

<script>

	import Vue from 'vue'

	import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
	Vue.use(BootstrapVue)
	Vue.use(IconsPlugin)

	export default {
	
		created() {
		
		},
		
		mounted() {
		
			console.log('SOPA 2020 mounted')
			console.log(localStorage)
			
			let sopa = localStorage.sopa_survey
			
			if (sopa==undefined) {

			}
		
		}
	
	}

</script>