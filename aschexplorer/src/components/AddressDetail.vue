<template>
  <div>
    <p>Address</p>
    <div v-if="address">
      <p>{{address.address}}</p>
      <p>Balance {{address.balance}} XAS</p>
      <p>Public Key: {{address.publicKey}}</p>
      <div v-if="delegate" class="delegate">
        <p>forged: {{delegate.forged}}</p>
        <p>producedblocks {{delegate.producedblocks}}</p>
        <p>missedBlocks {{delegate.missedblocks}}</p>
        <p> approval {{delegate.approval}} %</p>
        <p> productivity {{delegate.productivity}} %</p>
        <button v-collapse-toggle="'toggle_first'">Show votes</button>
        <v-collapse-wrapper ref="toggle_first">
          <div class="accordionHeader" v-collapse-toggle>
          </div>
          <div class="accordionContent" v-collapse-content>
              <div v-if="votedForMe && votedForMe.length > 0" v-for="vote in votedForMe" :key="vote.address">
                <router-link :to="{ name: 'address', params: { address: vote.address } }">{{vote.address}}</router-link>
                <p>balance: {{vote.balance}}</p>
              </div>
              <div v-else>
                <p>Nobody voted for {{delegate.address}}</p>
              </div>
          </div>
        </v-collapse-wrapper>
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
      votedForMe: [],
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
              console.log(request)
              axios.get(request)
                .then((response) => {
                  if (response.data.success === true) {
                    this.delegate = response.data.delegate
                  }
                })
                .catch((error) => {
                  if (error) {
                    this.loading = false
                  }
                })
            }
          })
          .then(() => {
            let request = 'http://mainnet.asch.io/api/delegates/voters?publicKey=' + this.address.publicKey
            console.log(request)
            axios.get(request)
              .then((response) => {
                if (response.data.success === true) {
                  console.log(response.data)
                  this.votedForMe = response.data.accounts
                }
              })
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

.accordionHeader {
  border: 1px solid red;
  margin: 10px;
}
.accordionContent {
  background: orange;
}
</style>
