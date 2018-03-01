<template>
  <div>
    <p>BlockDetail</p>
    <loading-indicator v-if="loading"></loading-indicator>
    <div v-if="block">
      <p>id: {{block.id}}</p>
      <p>height: {{block.height}} </p>
      <p> Timestamp in XAS-Time: {{block.timestamp}} </p>
      <span v-if="block">
        <p>previous Block:</p>
        <router-link :to="{ name: 'blockId', params: { id: block.previousBlock} }"> {{block.previousBlock}}</router-link>

        <button v-on:click="loadTransactions(block.id)">Load Transactions</button>
      </span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      hash: null,
      block: null,
      loading: false,
      transactions: null
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
      if (this.$route.params && this.$route.params.hasOwnProperty('height')) {
        this.loading = true
        let requestUrl = ('http://mainnet.asch.io/api/blocks?height=' + this.$route.params.height)
        axios.get(requestUrl)
          .then((response) => {
            if (response.data.success === true) {
              this.block = response.data.blocks[0]
            }
            this.loading = false
          })
          .catch(error => {
            if (error) {
              this.loading = false
              this.block = null
            }
          })
      }

      if (this.$route.params && this.$route.params.hasOwnProperty('id')) {
        console.log('blockDetail with id ' + this.$route.params.id)
        this.isLoading = true
        let requestUrl = ('http://mainnet.asch.io/api/blocks/get?id=' + this.$route.params.id)
        axios.get(requestUrl)
          .then((response) => {
            if (response.data.success === true) {
              this.block = response.data.block
            }
          })
          .catch((error) => {
            if (error) {
              this.isLoading = false
              this.block = null
            }
          })
      }
    },
    loadTransactions: function (blockId) {
      console.log(blockId)
    }
  }
}
</script>

<style scoped>
</style>
