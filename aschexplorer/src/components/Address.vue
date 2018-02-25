<template>
  <div>
    <p>Address</p>
    <div v-if="address">
      <p>{{address.address}}</p>
      <p>Balance {{address.balance}} XAS</p>
      <p>Public Key: {{address.publicKey}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      address: null,
      transaction: [],
      loading: false
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      if (this.$route.params && this.$route.params.hasOwnProperty('address')) {
        this.loading = true
        let request = 'http://mainnet.asch.io/api/accounts?address=' + this.$route.params.address
        axios.get(request)
          .then((response) => {
            if (response.data.success === true) {
              this.address = response.data.account
            }
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
}
</script>

<style scoped>
</style>
