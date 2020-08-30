export default {

	computed: {
		
		itemIsRequired() {
			
			return this.$store.getters.currentItem.required
			
		},
		
		showInfographic() {

			return this.$store.getters.currentItem.item_infographic != null

		},

		showPrevious() {

			return this.$store.state.currentItemIndex > 0

		},

		showNext() {

			return (this.$store.state.currentItemIndex+1) < this.$store.getters.itemsIndexes.length

		},

		showFinish() {

			return (this.$store.state.currentItemIndex+1) == this.$store.getters.itemsIndexes.length

		},

		isCheckboxes() {

			return this.item.item_type == 2

		}

	},

	methods: {
		
		validateItem() {
			
			// validation
			let valid = false
			
			if (this.itemIsRequired) {

				valid = this.item.answer!=null

				if (this.isCheckboxes) { // Checkboxes

					// validate limit
					
					valid = this.item.values.some(value => {
						return value.answer == true
					})

				}
				
				// Text Inputs
				if (this.item.item_type == 3 && this.item.text_is_multiple) {
					
					this.$v.values.$touch()
					
					valid = !this.$v.values.$invalid
					
				}
				
				if (!valid) {

					Swal.fire({
					  title: 'Warning!',
					  text: 'Your answer is required',
					  icon: 'warning',
					  confirmButtonText: 'Close'
					})
				
				}
			
			} else {

				valid = true

			}
			
			return valid
			
		},
		
		anotherSurvey() {
			
			this.$root.$refs.pSpinner.on();

			this.fetchSurvey(this.$route.params.token).then(response => {
				
				 this.$store.commit('load',response.data.data)
				 this.$store.commit('start')
				 this.$root.$refs.pSpinner.off()
				
			})
			
		},
		
		next() {

			if (!this.validateItem()) return

			this.$root.$refs.pSpinner.on();

			this.$store.dispatch('next').then(response => {

				this.$root.$refs.pSpinner.off();

			});	

		},

		previous() {

			this.$root.$refs.pSpinner.on();

			this.$store.dispatch('previous').then(response => {

				this.$root.$refs.pSpinner.off();

			});	

		},
		
		finish() {

			if (!this.validateItem()) return

			this.$root.$refs.pSpinner.on();

			if (!this.$store.state.finish) {
				
				this.respondent().then(response => {
					
					this.$store.dispatch('finish').then(response => {

						this.$root.$refs.pSpinner.off()

					});
					
				})				
				
			} else {
				
				this.$store.dispatch('finish').then(response => {

					this.$root.$refs.pSpinner.off()

				});			

			}

		},
		
		respondent() {
			
			return axios.post('/api/conduct/survey/respondent', this.$store.state.survey).then(response => {
				
				
				
			}).catch(e => {
				
			})
			
		}
		
	}
	
}