import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import findTiket from '../views/Find_Tiket.vue'

import myBooking from '../views/My_Booking.vue'

import landing from '../views/landing.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/findtiket',
    name: 'findTiket',
    component: findTiket
  },
  {
    path: '/mybooking',
    name: 'myBooking',
    component: myBooking
  },
  {
    path: '/landing',
    name: 'landing',
    component: landing
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
