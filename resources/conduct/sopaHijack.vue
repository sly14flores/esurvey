<template>
	<div>
	  <b-modal id="sopa-2020-survey" size="xl" title="One Kaprobinsiaan for A Stronger La Union" no-close-on-backdrop no-close-on-esc hide-header-close hide-footer>
		
	  </b-modal>	
	</div>
</template>

<style scoped>

</style>

<script>

	import Vue from 'vue'

	import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
	Vue.use(BootstrapVue)
	Vue.use(IconsPlugin)
	
	import 'bootstrap/dist/css/bootstrap.css'
	import 'bootstrap-vue/dist/bootstrap-vue.css'	

	export default {
	
		created() {
		
		},
		
		mounted() {
		
			console.log('SOPA 2020 mounted')
			console.log(localStorage)
			
			let sopa = localStorage.sopa_survey
			
			if (sopa==undefined) {
			
				this.$bvModal.show('sopa-2020-survey')

			}
		
		}
	
	}

</script>