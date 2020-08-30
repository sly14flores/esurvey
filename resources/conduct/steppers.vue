<template>
	<div class="steppers">
		<p v-for="(step,i) in steps" :class="{'stepper-fill': step.active, 'stepper-outline': !step.active}"></p>
	</div>
</template>

<style scoped>

	.steppers {
		position: fixed;
		top: 10px;
		right: 5px;
	}
	
	.stepper-fill {
		display: inline-block;
		border-radius: 25px;
		background: #949494;
		padding: 2px;
		width: 20px;
		height: 20px;
		margin-right: 5px;
	}
	
	.stepper-outline {
		display: inline-block;	
		border-radius: 25px;
		border: 2px solid #949494;
		padding: 2px;
		width: 20px;
		height: 20px;
		margin-right: 5px;		
	}
	
	/* Mobile rules */
	@media (max-width: 575.98px) {
	
		.steppers {
			top: 10px;
			right: 10px;
		}	
	
		.stepper-fill {
			width: 15px;
			height: 15px; 
		}	
	
		.stepper-outline {
			width: 15px;
			height: 15px;
		}
	
	}

</style>

<script>

	export default {
	
		computed: {
		
			steps() {
			
				let steps = []
				
				_.forEach(this.$store.getters.itemsIndexes, (item,i) => {
					
					let step = {
						active: i == this.$store.state.currentItemIndex
					}
					
					steps.push(step)
					
				})
			
				return steps
			
			},
		
		}
	
	}

</script>