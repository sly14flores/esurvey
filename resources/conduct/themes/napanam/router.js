import start from './start.vue'

const routes = [
    { path: '/:scope/:recursive/:token', name: 'conduct', component: start },
]

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
    routes
})