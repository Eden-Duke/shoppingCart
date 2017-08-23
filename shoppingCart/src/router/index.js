import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/goods'

Vue.use(Router)

import shopCart from '@/components/shopCart.vue'

export default new Router({
  routes: [
    {
      path: '/',
      component: goods
    },
    {
      path: '/shopCart',
      component: shopCart
    }
  ]
})
