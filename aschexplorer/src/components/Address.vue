<template>
  <div>
    <p>Address</p>
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
    fetchdata: function () {
      axios.get('')
        .then((response) => {

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
