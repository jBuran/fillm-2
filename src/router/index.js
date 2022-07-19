import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Home from '@/components/Home'
import Hain from '@/components/Hain'
import Post from '@/components/Post'
import Ppost from '@/components/Ppost'
import Poost from '@/components/Poost'
import Posst from '@/components/Posst'
import Postt from '@/components/Postt'
import Library from '@/components/Task'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter (to, from, next) {
        store.getters.checkUser ? next() : next('/login')
      }
    },
    {
      path: '/hain',
      name: 'hain',
      component: Hain
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    },
    {
      path: '/postt',
      name: 'postt',
      component: Postt
    },
    {
      path: '/posst',
      name: 'posst',
      component: Posst
    },
    {
      path: '/poost',
      name: 'poost',
      component: Poost
    },
    {
      path: '/ppost',
      name: 'ppost',
      component: Ppost
    },
    {
      path: '/library',
      name: 'library',
      component: Library,
      beforeEnter (to, from, next) {
        store.getters.checkUser ? next() : next('/login')
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    }
  ]
})
