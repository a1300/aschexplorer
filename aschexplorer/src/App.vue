<template>
  <div id="app">
    <router-link class="router-link-normal" to="/block">Blocks</router-link>
    <router-link to="/tx">Transactions</router-link>
    <router-link to="/address">Address</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

.router-link-normal {
  color:black;
  text-decoration-style:none;
}

.router-link-active {
  font-weight: bold;
  text-decoration-style: none;
  color:orange;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
