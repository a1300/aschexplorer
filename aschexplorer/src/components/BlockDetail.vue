<template>
  <div>
    <p>BlockDetail</p>
    <div v-if="block">
      <p>id: {{block.id}}</p>
      <p>height: {{block.height}} </p>
      <span v-if="block">
        <p>previous Block:</p>
        <router-link :to="{ name: 'blockId', params: { id: block.previousBlock} }"> {{block.previousBlock}} </router-link>
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
      isLoading: false
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
        console.log('blockDetail with height')
        let requestUrl = ('http://mainnet.asch.io/api/blocks?height=' + this.$route.params.height)
        axios.get(requestUrl)
          .then((response) => {
            if (response.data.success === true) {
              this.block = response.data.blocks[0]
            }
            this.isLoading = false
          })
          .catch(error => {
            if (error) {
              this.isLoading = false
              this.block = null
            }
          })
      }

      if (this.$route.params && this.$route.params.hasOwnProperty('id')) {
        console.log('blockDetail with id')
        this.isLoading = true
        let requestUrl = ('http://mainnet.asch.io/api/blocks?limit=2?id=' + this.$route.params.id)
        axios.get(requestUrl)
          .then((response) => {
            if (response.data.success === true) {
              this.block = response.data.blocks[0]
            }
          })
          .catch((error) => {
            if (error) {
              this.isLoading = false
              this.block = null
            }
          })
      }
    }
  }
}
</script>

<style scoped>
</style>
