<template>
	<div>
		<div class="m-b-20">
			<h4 class="sub-title">
				Introductions
				<b-button class="btn btn-mini btn-success" @click="add()" data-toggle="tooltip" data-placement="top" title="Add New Introduction" :disabled="!onEdit"><i class="ion-plus"></i></b-button>				
			</h4>
			<div class="row">
				<div class="col-lg-12">
					<table class="table">
						<thead>
							<tr><th>#</th><th>Content</th><th>Translation (Optional)</th><th></th></tr>
						</thead>
						<tbody name="list" is="transition-group">
							<tr v-for="(intro, i) in introductions" :key="intro.index">
								<td>{{i+1}}</td>
								<td>
									<div class="form-group">
										<textarea rows="2" class="form-control" v-model.trim="$v.introductions.$each[i].content.$model" :class="{'is-invalid': $v.introductions.$each[i].content.$error}" :disabled="oldSurvey && !onEdit"></textarea>
										<div class="invalid-feedback">Content is required</div>
									</div>									
								</td>
								<td>
									<div class="form-group">
										<textarea rows="2" class="form-control" v-model="intro.translated" :disabled="oldSurvey && !onEdit"></textarea>
									</div>									
								</td>								
								<td>
									<b-button type="button" class="btn btn-mini btn-danger" @click="confirmDelete(intro)" :disabled="!onEdit" data-toggle="tooltip" data-placement="top" title="Delete this introduction"><i class="ion-close"></i></b-button>
									<b-modal :id="'confirm-intro-delete-'+i" title="Confirmation" @ok="deleteItem(intro)">
										Are you sure you want to delete this introduction?
									</b-modal>								
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

	i {
		margin-right:0!important;
	}

</style>

<script>

	import { required, email, minLength, requiredIf, requiredUnless } from "vuelidate/lib/validators";

	export default {

		name: 'Introductions',
	
		data() {
			
			return {
			
			}
			
		},
	
		computed: {
		
			onEdit() {
			
				return this.$parent.onEdit
			
			},
			
			oldSurvey() {
			
				return this.$parent.oldSurvey			
			
			},

			introductions: {
				get() {
					return this.$store.state.surveys.survey.introductions
				},
				set(value) {
					this.$store.commit('introductions', value)
				}
			}			
		
		},
		
		validations: {
			introductions: {
				required: requiredIf(function(model) {
					return this.introductions.length>0
				}),
				$each: {
					content: {required}
				}
			}
		},		
		
		methods: {
		
			add() {
			
				let index = 0
				if (this.introductions.length>0) {
					const lastItem = this.introductions[this.introductions.length-1]
					index = lastItem.index
				}
				let intro = {
					index: ++index,
					id: 0,
					content: null,
					translated: null
				}
				this.introductions.push(intro)
				
				this.$nextTick(() => {
					$('[data-toggle="tooltip"]').tooltip({trigger: 'hover'})
				})					
			
			},
			
			confirmDelete(intro) {
			
				let index = this.introductions.indexOf(intro)			
			
				if (this.oldSurvey && intro.id > 0) {
					this.$bvModal.show('confirm-intro-delete-'+index)			
				} else {
					this.introductions.splice(index,1)
				}	
			
			},
			
			deleteItem(intro) {
			
				let index = this.introductions.indexOf(intro)				
			
				axios.delete('api/survey/introduction/'+intro.id).then(response => {
					
					// this.$store.dispatch('fetchSurvey')
					this.introductions.splice(index,1)				
					
				}).catch(e => {
					
					
				})			
			
			},			
		
		},
		
		created() {
		
		},
		
		mounted() {

			this.$nextTick(() => {
				if (!this.oldSurvey) this.introductions = []
				$('[data-toggle="tooltip"]').tooltip({trigger: 'hover'})				
			})	
		
		}
	
	}

</script>