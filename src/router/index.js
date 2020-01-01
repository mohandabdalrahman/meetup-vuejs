import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue'),
  },
  {
    path: '/meetups',
    name: 'Meetups',
    component: () => import('../components/Meetup/Meetups.vue'),
  },
  {
    path: '/meetups/new',
    name: 'CreateMeetup',
    component: () => import('../components/Meetup/CreateMeetup.vue'),
  },
  {
    path: '/meetups/:id',
    props:true,
    name: 'Meetups',
    component: () => import('../components/Meetup/Meetup.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../components/USer/Profile.vue'),
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('../components/USer/Signin.vue'),
  },

  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../components/USer/Signup.vue'),
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
