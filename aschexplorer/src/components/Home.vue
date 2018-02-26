<template>
  <div>
      <loading-indicator v-if="loading"></loading-indicator>
      <p>BlockHeight {{currentBlockHeight}}</p>
      <form v-if="!loading" v-on:submit.prevent="getFormValues">
        <input type="text" placeholder="search for address/tx/block-height" v-model="form.searchString">
        <button>Search</button>
      </form>
  </div>
</template>

<script>
import axios from 'axios'
import router from '@/router/index'

export default {
  data () {
    return {
      loading: false,
      form: {
        searchString: ''
      },
      currentBlockHeight: 0
    }
  },
  created () {
    this.fetchData()

    window.setInterval(() => {
      console.log('fetching...')
      this.fetchData()
    }, 10000)
  },
  methods: {
    fetchData () {
      let request = 'http://mainnet.asch.io/api/blocks/getHeight'
      axios.get(request)
        .then((response) => {
          if (response.data.success === true) {
            this.currentBlockHeight = response.data.height
          }
        })
    },
    getFormValues () {
      this.loading = true
      console.log(this.form.searchString)

      let query = this.form.searchString
      if (typeof Number.parseInt(query) === 'number' && Number.parseInt(query) < this.currentBlockHeight) {
        router.push({ name: 'blockHeight', params: { height: Number.parseInt(query) } })
      }
    }
  }
}
</script>

<style scoped>
</style>
