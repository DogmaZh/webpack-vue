import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import pHelloIndex from '../pages/Hello/pHelloIndex'
import pUserIndex from '../pages/User/pUserIndex'
import pUserInfo from '../pages/User/pUserInfo'

const mainPage = [{
  path: '/',
  name: 'main',
  component: pHelloIndex
}];

const userInfo = [{
  path: 'info',
  name: 'userInfo',
  component: pUserInfo,
}]

const userPage = [{
  path: '/user',
  name: 'user',
  component: pUserIndex,
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