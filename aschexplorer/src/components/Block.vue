<template>
  <div>
    <div v-if="loading === true">
      <loading-indicator></loading-indicator>
    </div>
   <div v-else class="blockList">
      <div v-for="block in blocks" :key="block.id" class="block">
        <p> {{block.id}} </p>
        <p> Number of transactions: {{block.numberOfTransactions}} </p>
       <div>
         <router-link :to="{ name: 'address', params: { address: block.generatorId } }"> delegate: {{ block. generatorId }} </router-link>
       </div>
       <div>
        <router-link :to="{ name: 'blockHeight', params: { height: block.height } }"> height: {{block.height}} </router-link>
       </div>
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
.blockList {
  max-height: 600px;
  overflow: auto;
}

.block {
  border: black solid 1px;
  margin: 2px;
}
</style>
