<template>
	<div>
		<div class="dropdown-primary dropdown">
			<div class="dropdown-toggle" data-toggle="dropdown">
				<img :src="profile.avatar" class="img-radius" alt="Profile Picture">
				<span>{{ profile.firstname }} {{ profile.lastname }}</span>
				<i class="feather icon-chevron-down"></i>
			</div>
			<ul class="show-notification profile-notification dropdown-menu" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
				<li>
					<a href="javascript:;" @click="confirmLogout">
						<i class="feather icon-log-out"></i> Logout
					</a>
					<form id="logout-form" action="logout" method="POST" style="display: none;">
						<input type="hidden" name="_token" :value="csrf">
					</form>					
				</li>
			</ul>
		</div>
		<b-modal ref="confirm-logout" title="Confirmation" @ok="logout">
			Are you sure you want to logout?
		</b-modal>
	</div>
</template>

<style>

</style>

<script>
	
	export default {
		
		computed: {

			csrf() {

				return  document.querySelector('meta[name=csrf-token]').content

			},
		
			profile() {
			
				return this.$store.state.profile
			
			}
		
		},
		
		methods: {
			
			confirmLogout() {

				this.$refs['confirm-logout'].show();		
			
			},
			
			logout() {
				
				localStorage.removeItem("esurvey")				
				document.querySelector('#logout-form').submit()
			
			}
			
		},
		
		created() {

		},
		
		mounted() {
		
		}
	
	}
	
</script>