<template>
	<div>
		<nav v-if="show">
			<ul class="pagination justify-content-center">
				<li class="page-item" :class="{ disabled: btns.first }">
				  <a class="page-link" href="javascript:;" @click="first" :disabled="btns.first">«</a>
				</li>
				<li class="page-item" :class="{ disabled: btns.previous }">
				  <a class="page-link" href="javascript:;" @click="previous" :disabled="btns.previous">‹</a>
				</li>			
				<li class="page-item active">
				  <a class="page-link" href="javascript:;">{{ currentPage }}</a>
				</li>
				<li class="page-item" :class="{ disabled: btns.next }">
				  <a class="page-link" href="javascript:;" @click="next" :disabled="btns.next">›</a>
				</li>
				<li class="page-item" :class="{ disabled: btns.last }">
				  <a class="page-link" href="javascript:;" @click="last" :disabled="btns.last">»</a>
				</li>
			</ul>
		</nav>		
	</div>
</template>

<style>

</style>

<script>

	export default {
	
		props: ['currentPage','perPage','lastPage','totalItems','fetchData'],
		
		computed: {

			show() {
			
				return (this.totalItems!=undefined) && (this.totalItems!=undefined) && (this.totalItems>this.perPage)
			
			},

			btns() {
			
				return {
					
					first: (this.currentPage>1)?false:true,
					previous: (this.currentPage>1)?false:true,
					next: (this.currentPage<this.lastPage)?false:true,
					last: (this.currentPage<this.lastPage)?false:true
				
				}
			
			}
		
		},
		
		methods: {
			
			first() {
			
				let currentPage = 1
				this.fetchData(currentPage)
			
			},
			
			previous() {
				
				let currentPage = this.currentPage
				if ((this.currentPage-1)>0) currentPage = this.currentPage - 1
				this.fetchData(currentPage)
			
			},
			
			next() {
				
				let currentPage = this.currentPage
				if ((this.currentPage+1)<=this.lastPage) currentPage = this.currentPage + 1
				this.fetchData(currentPage)
				
			},
			
			last() {
				
				let currentPage = this.lastPage
				this.fetchData(currentPage)
				
			}
		
		},
	
		mounted() {
		
		}
	
	}

</script>