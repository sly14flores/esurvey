<template>
    <div>
		<div class="container start-conduct">
			<h4 class="center-content">Privacy Notice</h4>
			<b-jumbotron>
				<template v-slot:lead><h4>{{content}}</h4></template>

				<hr class="my-4">

				<h4 class="text-muted" v-if="translated!=null">{{translated}}</h4>

				<div class="mt-5 center-content">
					<div class="form-group form-check">
						<input type="checkbox" class="form-check-input" id="privacy-notice" v-model="agreed" :value="agreed">
						<label class="form-check-label" for="privacy-notice">I have read and agree to the Privacy Notice condition</label>
					</div>
				    <a href="javascript:;" type="primary" class="btn btn-primary" @click="proceed">Proceed</a>
				</div>
			</b-jumbotron>
		</div>
    </div>
</template>

<style scoped>

	.start-conduct {
		margin-top: 40px;
	}
	
	.center-content {
		text-align: center;
	}

</style>

<script>

    export default {
	
		name: 'notice',
		
		data() {
		
			return {
				agreed: false
			}
		
		},
        
		computed: {
		
			content() {
			
				return this.$store.state.survey.privacy_notice.content
			
			},
			
			translated() {
			
				return this.$store.state.survey.privacy_notice.translated
			
			}
		
		},
		
		methods: {
		
			proceed() {
			
				if (!this.agreed) {
			
					Swal.fire({
					  title: 'Notification',
					  text: "Please check 'I have read and agree to the Privacy Notice condition'",
					  icon: 'warning',
					  confirmButtonText: 'Close'
					})
					
					return

				}

				this.$root.$children[0].$refs.pSpinner.on();

				this.$store.dispatch('agree').then(response => {

					this.$root.$children[0].$refs.pSpinner.off();

				});				
			
			},
		
		},
		
        created() {

        },

        mounted() {

			console.log('Policy mounted')

        }

    }

</script>