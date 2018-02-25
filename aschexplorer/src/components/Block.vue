<template>
  <div>
    <div v-if="loading === true">
      <atom-spinner :size="100"
          :animation-duration="1200"
          :color="'black'" class="atom" />
      <p>Loading...</p>
    </div>
   <div v-else>
      <div v-for="block in blocks" :key="block.id" class="block">
        <p> {{block.id}} </p>
        <p> Number of transactions: {{block.numberOfTransactions}} </p>
        <p> Delegate: {{block.generatorId}}</p>
        <p>height:</p> <router-link :to="{ name: 'blockHeight', params: { height: block.height } }"> {{block.height}} </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      blocks: [],
      loading: false
    }
  },
  created () {
    this.loading = true
    axios.get('http://mainnet.asch.io/api/blocks')
      .then((response) => {
        this.loading = false
        if (response.data.success === true) {
          this.blocks = response.data.blocks
          console.log(this.blocks)
        }
      })
      .catch((error) => {
        if (error) {
          this.loading = false
        }
      })
  }
}
</script>

<style scoped>

.atom {
  color: black;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.block {
  border: black solid 1px;
  margin: 2px;
}
</style>
