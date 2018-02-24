import Vue from 'vue'
import Router from 'vue-router'
import Block from '@/components/Block'
import Transaction from '@/components/Transaction'
import Address from '@/components/Address'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/block',
      name: 'block',
      component: Block
    },
    {
      path: '/tx',
      name: 'transaction',
      component: Transaction
    },
    {
      path: '/address',
      name: 'address',
      component: Address
    }
  ]
})
