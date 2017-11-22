import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myApp from '@/myApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myApp',
      component: myApp
    }
  ]
})
