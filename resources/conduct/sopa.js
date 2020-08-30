window._ = require('lodash')
window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.Swal = require('sweetalert2')

import Vue from 'vue'
import sopaHijack from './sopaHijack.vue'

new Vue({
  render: h => h(sopaHijack),
}).$mount('#sopa')