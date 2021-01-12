<template>
	<div class="mT-30">
		<a href="javascript:;" type="primary" class="btn btn-primary" v-if="showPrevious" @click="previous">Previous</a>
		<a href="javascript:;" type="primary" class="btn btn-primary" v-if="showNext" @click="next">Next</a>
		<a href="javascript:;" type="primary" class="btn btn-primary" v-if="showFinish" @click="finish">Finish</a>
	</div>
</template>

<style>

</style>

<script>

	import wizard from '../../mixins/wizard'

	export default {
	
		mixins: [wizard]
		
	}

</script>