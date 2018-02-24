<template>
  <div>
    <p>BlockDetail</p>
    <div v-if="block">
      {{block.id}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      id: null,
      hash: null,
      block: null,
      isLoading: false
    }
  },
  created () {
    // let paramIsInteger = Number.isInteger(parseInt(this.$route.params.id))
    if (this.$route.params && this.$route.params.hasOwnProperty('id')) {
      this.id = this.$route.params.id
      let requestUrl = ('http://mainnet.asch.io/api/blocks?height=' + this.$route.params.id)
      axios.get(requestUrl)
        .then((response) => {
          console.log(response)
          if (response.data.success === true) {
            this.block = response.data.blocks[0]
          }
          this.isLoading = false
        })
        .catch(error => {
          if (error) {
            this.isLoading = false
          }
        })
    }

    if (this.$route.params && this.$route.params.hasOwnProperty('hash')) {
      console.log(this.$route.params)
    }
  }
}
</script>

<style scoped>
</style>
