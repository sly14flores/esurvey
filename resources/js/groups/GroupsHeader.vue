<template>
	<div class="page-header">
		<div class="row align-items-end">
			<div class="col-lg-8">
				<div class="page-header-title">
					<div class="d-inline">
						<h4>Manage Groups</h4>
					</div>
				</div>
			</div>
			<div class="col-lg-4">
				<div class="page-header-breadcrumb">
					<ul class="breadcrumb-title">
						<li class="breadcrumb-item">
							<router-link to="/dashboard">
								<i class="feather icon-home"></i>
							</router-link>
						</li>
						<li class="breadcrumb-item">
							<a href="javascript:;">Groups</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="row align-items-end" v-if="isList">
			<div class="col-lg-12">
				<div style="margin-top: 20px;">
					<router-link to="/group" tag="button" class="btn btn-primary btn-sm">Add</router-link>
				</div>
			</div>
		</div>		
	</div>
</template>

<style>

</style>

<script>

	export default {
	
		props: ['isList']
	
	}

</script>