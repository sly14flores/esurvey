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

					// validate minimum
					
					let checkeds = this.item.values.filter(value => {
						return value.answer == true
					})

					valid = checkeds.length == this.$store.getters.currentItem.max_checkbox_selections
					
					if (!valid) {
						
						Swal.fire({
						  title: 'Notification',
						  text: 'Please select your top ' + this.$store.getters.currentItem.max_checkbox_selections,
						  icon: 'warning',
						  confirmButtonText: 'Close'
						})						
						
						return
						
					}

				}
				
				let text = 'Your answer is required'
				
				// Text Inputs
				if (this.item.item_type == 3 && this.item.text_is_multiple) {
					
					this.$v.values.$touch()
					
					valid = !this.$v.values.$invalid
					
					text = 'Please complete required field(s)'
					
				}
				
				if (!valid) {

					Swal.fire({
					  title: 'Notification',
					  text: text,
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
			
			this.$root.$children[0].$refs.pSpinner.on();

			this.fetchSurvey(this.$route.params.token).then(response => {
				
				 this.$store.commit('load',response.data.data)
				 this.$store.commit('start')
				 this.$root.$children[0].$refs.pSpinner.off()
				 
				Swal.fire({
					title: 'Thank You',
					text: this.$store.state.survey.thankyou.message,
					icon: 'success',
					showConfirmButton: false,
					timer: 3000
				})				 
				
			})
			
		},
		
		next() {

			if (!this.validateItem()) return

			this.$root.$children[0].$refs.pSpinner.on();

			this.$store.dispatch('next').then(response => {

				this.$root.$children[0].$refs.pSpinner.off();

			});	

		},

		previous() {

			this.$root.$children[0].$refs.pSpinner.on();

			this.$store.dispatch('previous').then(response => {

				this.$root.$children[0].$refs.pSpinner.off();

			});	

		},
		
		finish() {

			if (!this.validateItem()) return

			this.$root.$children[0].$refs.pSpinner.on();

			if (!this.$store.state.finish) {
				
				this.respondent().then(response => {
					
					this.$store.dispatch('finish').then(response => {

						this.$root.$children[0].$refs.pSpinner.off()

					});
					
				})				
				
			} else {
				
				this.$store.dispatch('finish').then(response => {

					this.$root.$children[0].$refs.pSpinner.off()

				});			

			}

		},
		
		respondent() {
			
			let resource = '/api/conduct/survey/respondent'
			
			return axios.post(resource, {survey: this.$store.state.survey, specific: this.$store.state.specific, office: localStorage.survey_office}).then(response => {
				
				if (this.$store.state.recursive) {
					
					this.anotherSurvey()
					
				}
				
			}).catch(e => {
				
			})
			
		}
		
	}
	
}