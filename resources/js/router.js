// Routes
import Dashboard from './dashboard/Dashboard.vue'
const dashboard = Dashboard

// Forms
const UserForm = () => import(/* webpackChunkName: "user" */'./users/UserForm.vue')
const OfficeForm = () => import(/* webpackChunkName: "office" */'./offices/OfficeForm.vue')
const GroupForm = () => import(/* webpackChunkName: "group" */'./groups/GroupForm.vue')
const SurveyForm = () => import(/* webpackChunkName: "survey" */'./surveys/SurveyForm.vue')

// Lists
// const UsersList = () => import(/* webpackChunkName: "user" */'./users/UsersList.vue')
// const OfficesList = () => import(/* webpackChunkName: "office" */'./offices/OfficesList.vue')
import UsersList from './users/UsersList.vue'
import OfficesList from './offices/OfficesList.vue'
import GroupsList from './groups/GroupsList.vue'
import SurveysList from './surveys/SurveysList.vue'
import Conduct from './surveys/Conduct.vue'

const routes = [
  { path: '/', name: 'home', redirect: '/dashboard' },
  { path: '/dashboard', name: 'dashboard', component: dashboard },
  { path: '/user', name: 'user_new', component: UserForm },
  { path: '/user/:user_id', name: 'user_view', component: UserForm },
  { path: '/users', name: 'users_list', component: UsersList },
  { path: '/office', name: 'office_new', component: OfficeForm },
  { path: '/office/:office_id', name: 'office_view', component: OfficeForm },  
  { path: '/offices', name: 'offices_list', component: OfficesList },
  { path: '/group', name: 'group_new', component: GroupForm },
  { path: '/group/:group_id', name: 'group_view', component: GroupForm },  
  { path: '/groups', name: 'groups_list', component: GroupsList },
  { path: '/surveys', name: 'surveys_list', component: SurveysList },
  { path: '/survey', name: 'survey_new', component: SurveyForm },
  { path: '/survey/:survey_id', name: 'survey_view', component: SurveyForm },  
  { path: '/conduct/survey', name: 'survey_conduct', component: Conduct }  
]

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
  routes // short for `routes: routes`
})