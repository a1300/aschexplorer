<template>
  <div id="app">
    <headroom>
      <router-link to='/'>Home</router-link>
      <router-link to="/block">Blocks</router-link>
      <router-link to="/tx">Transactions</router-link>
      <router-link to="/address">Addresses</router-link>
    </headroom>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

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
