import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const mainPage = [{
  path: '/',
  name: 'main',
  component: () => import('../pages/Hello/pHelloIndex'),
}];

const userInfo = [{
  path: 'info',
  name: 'userInfo',
  component: () => import('../pages/User/pUserInfo'),
}]

const userPage = [{
  path: '/user',
  name: 'user',
  component: () => import('../pages/User/pUserIndex'),
  children: [
    ...userInfo
  ]
}];


const routes = [
  ...mainPage,
  ...userPage,
]

export default new VueRouter({
  mode: 'history',
  routes 
})