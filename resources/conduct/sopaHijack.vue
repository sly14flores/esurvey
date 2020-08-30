<template>
	<div>
		<b-modal id="sopa-2020-survey" size="xl" title="One Kaprobinsiaan for A Stronger La Union" no-close-on-backdrop no-close-on-esc hide-footer>
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
	
		data() {
			return {
				height: window.innerHeight
			}
		},
	
		created() {

			this.height = window.innerHeight

			if (localStorage.anon_id == undefined) {
				localStorage.anon_id = (Date.now().toString()) + (Math.floor(Math.random() * 100)).toString()
			}
		
		},
		
		mounted() {
		
			console.log('SOPA 2020 mounted')
			
			let sopa = window.localStorage.sopa_survey
			
			if (sopa==undefined) {
			
				this.$bvModal.show('sopa-2020-survey')

			}			
		
		}
	
	}

</script>