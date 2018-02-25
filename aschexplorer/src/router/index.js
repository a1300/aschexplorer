import Vue from 'vue'
import Router from 'vue-router'

import Block from '@/components/Block'
import BlockDetail from '@/components/BlockDetail'

import Transaction from '@/components/Transaction'

import Address from '@/components/Address'
import AddressDetail from '@/components/AddressDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/block',
      name: 'block',
      component: Block
    },
    {
      path: '/block/height/:height',
      name: 'blockHeight',
      component: BlockDetail
    },
    {
      path: '/block/id/:id',
      name: 'blockId',
      component: BlockDetail
    },
    {
      path: '/tx',
      name: 'transaction',
      component: Transaction
    },
    {
      path: '/address',
      name: 'addressList',
      component: Address
    },
    {
      path: '/address/:address',
      name: 'address',
      component: AddressDetail
    }
  ]
})
