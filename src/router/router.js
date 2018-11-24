import Vue from 'vue'
import Router from 'vue-router'
import List from '@/pages/List'
import Detail from '@/pages/Detail'
import About from '@/pages/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/article/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
  ]
})