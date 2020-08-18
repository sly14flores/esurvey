<template>
	<div class="container start-conduct">
		<div class="jumbotron jumbotron-fluid">
			<div class="container text-center">
				<h1 class="display-4">{{name}}</h1>
				<p class="lead" v-if="description!=null">{{description}}</p>
				<hr class="my-4">
				<p class="lead">
					<a class="btn btn-primary btn-lg" href="javascript:;" @click="start">Start</a>
				</p>
			</div>
		</div>
    </div>
</template>

<style>

	.start-conduct {
		margin-top: 8%;
	}

</style>

<script>

    export default {

		methods: {

			start() {

				this.$root.$refs.pSpinner.on();

				this.$store.dispatch('next').then(response => {

					this.$root.$refs.pSpinner.off();

				});

			},

		},

		computed: {

			name() {

				return this.$store.state.survey.name

			},

			description() {

				return this.$store.state.survey.description				

			}

		},

        created() {

        },

        mounted() {

			console.log('Start Conduct mounted');

        }

    }

</script>