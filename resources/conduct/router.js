import start from './start.vue'

const routes = [
    { path: '/:token', name: 'conduct', component: start }
]

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
    routes
})