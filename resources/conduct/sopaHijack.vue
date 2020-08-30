<template>
	<div>
		<b-modal id="sopa-2020-survey" size="xl" title="One Kaprobinsiaan for A Stronger La Union" no-close-on-backdrop no-close-on-esc hide-header-close hide-header hide-footer>
			<iframe src="https://survey.launion.gov.ph/survey#/Ux6PqvC2UA" title="One Kaprobinsiaan for A Stronger La Union" :style="{height: height+'px', width: '100%'}"></iframe>
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
	
		data: {
			height: window.innerHeight
		},
	
		created() {

			this.height = window.innerHeight		
		
		},
		
		mounted() {
		
			console.log('SOPA 2020 mounted')
			console.log(localStorage)
			
			let sopa = window.localStorage.sopa_survey
			console.log(sopa)
			
			if (sopa==undefined) {
			
				this.$bvModal.show('sopa-2020-survey')

			}
			
			if (window.requestIdleCallback) {
				requestIdleCallback(function () {
					Fingerprint2.get(function (components) {
					  console.log(components) // an array of components: {key: ..., value: ...}
					})
				})
			} else {
				setTimeout(function () {
					Fingerprint2.get(function (components) {
					  console.log(components) // an array of components: {key: ..., value: ...}
					})  
				}, 500)
			}			
		
		}
	
	}

</script>