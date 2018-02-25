<template>
  <div>
    <p>Address</p>
    <div v-if="address">
      <p>{{address.address}}</p>
      <p>Balance {{address.balance}} XAS</p>
      <p>Public Key: {{address.publicKey}}</p>
      <div v-if="delegate" class="delegate">
        <p>forged: {{delegate.forged}}</p>
        <p>producedblocks {{delegate.producedblocks}} </p>
        <p>missedBlocks {{delegate.missedblocks}}</p>
        <p> approval {{delegate.approval}} % </p>
        <p> productivity {{delegate.productivity}} % </p>
      </div>
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
      delegate: null,
      loading: false
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
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
              return this.address.publicKey
            }
          })
          .then((publicKey) => {
            if (typeof publicKey === 'string') {
              let request = 'http://mainnet.asch.io/api/delegates/get?publicKey=' + publicKey
              axios.get(request)
                .then((response) => {
                  this.delegate = response.data.delegate
                })
                .catch((error) => {
                  if (error) {
                    this.loading = false
                  }
                })
            }
          })
          .catch((error) => {
            if (error) {
              this.loading = false
            }
          })
      }
    },
    loadAssetBalance () {
      // first load public key http://mainnet.asch.io/api/transactions?senderPublicKey=65a652d705e264686b804040ecc25f4a144bbc11bbfb9dc190c84fd920914ce3&type=1
    }
  }
}
</script>

<style scoped>
.delegate {
  border: 1px solid #000;
  margin: 5px;
}
</style>
