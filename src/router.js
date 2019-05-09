import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Dogs from './views/Dogs.vue'
import DogDetail from './views/DogDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: Dogs
    },
    {
      path: '/dogs/:breedName',
      component: DogDetail,
      name: 'Breed',
      props: true
    }
  ]
})
