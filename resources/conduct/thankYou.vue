<template>
	<div>
		<div class="container">
		  <div class="mt-5 h2 center">
			<b-iconstack font-scale="5">
			  <b-icon stacked icon="circle" variant="success"></b-icon>
			  <b-icon stacked icon="check" variant="success" shift-v="-1" scale="0.85"></b-icon>
			</b-iconstack>
			<!-- <b-icon icon="check-circle" variant="success" style="width: 120px; height: 120px;"></b-icon> -->
		  </div>
			<h1 class="mt-2 center">Your answers were successfully submitted!</h1>
			<p class="lead center"><strong>Thank you for your time</strong></p>
		</div>
	</div>
</template>

<style scoped>

	.center {
		text-align: center;
	}

</style>

<script>

	import Vue from 'vue'
	import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

	Vue.use(BootstrapVue)
	Vue.use(BootstrapVueIcons)

	export default {

	}

</script>