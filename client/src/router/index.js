import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import Profile from '@/components/Profile'
import Authentication from '@/components/Authentication'


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
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
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
    }
  ]
})
