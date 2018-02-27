<template>
  <div>
    <loading-indicator v-if="loading"></loading-indicator>
    <div v-else>
      <div v-for="address in addresses" :key="address">
        <router-link :to="{ name: 'address', params: { address: address } }"> {{address}} </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      loading: false,
      addresses: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.loading = true
      let request = 'http://mainnet.asch.io/api/transactions?limit=10&orderBy=t_timestamp:desc'
      axios.get(request)
        .then((response) => {
          if (response.data.success === true) {
            let answer = response.data.transactions
            this.addresses = answer.map(function (trans) {
              return trans.senderId
            })
          }
          console.log(this.addresses)
          this.loading = false
        })
        .catch((error) => {
          if (error) {
            this.loading = false
          }
        })
    }
  }
}
</script>

<style scoped>
</style>
