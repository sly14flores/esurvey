<template>
  <a-layout>
    <a-layout-header>
      
    </a-layout-header>
    <a-layout>
      <a-layout-content>
			  <router-view></router-view>        
      </a-layout-content>
    </a-layout>
    <a-layout-footer>

    </a-layout-footer>
  </a-layout>
</template>

<script>

import router from './router.js'

export default {
  router,
}

</script>

<style>

</style>