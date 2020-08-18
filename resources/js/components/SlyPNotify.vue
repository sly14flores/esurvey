<template>
</template>

<style>

</style>

<script>

	export default {
	
		methods: {
		
			show(opt) {
			
				new PNotify({
					title: opt.title,
					text: opt.text,
					icon: 'icofont icofont-info-circle',
					type: opt.type
				});			
			
			}
		
		},
	
		mounted() {

			console.log('SlyPNotify mounted')
	
		}
	
	}

</script>