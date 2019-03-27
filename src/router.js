import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'
import Yellow from './components/Yellow.vue'
import Red from './components/Red.vue'
import Green from './components/Green.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  /*  {
      path: '/',
      name: 'home',
      component: Home
    }, */
    {
      path: '/1',
      name: 'red',
      component: Red
    },
    {
      path: '/2',
      name: 'yellow',
      component: Yellow
    },
    {
      path: '/3',
      name: 'green',
      component: Green
    }
  ]
})
