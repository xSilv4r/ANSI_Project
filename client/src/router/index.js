import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import Profile from '@/components/Profile'
import Authentication from '@/components/Authentication'
import Magazines from '@/components/Magazines'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/authentication',
      name:'authentication',
      component: Authentication
    },
    {
      path: '/magazines',
      name:'magazines',
      component: Magazines
    }
  ]
})
