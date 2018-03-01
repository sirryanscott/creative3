import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import NotVisited90 from '@/components/NotVisited90'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/NotVisited90',
      name: 'NotVisited90',
      component: NotVisited90
    }
  ]
})
