<template>
  <div id="app">
    <headroom>
      <header>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <router-link to='/'>{{ $t("HOME") }}</router-link>
        <router-link to="/block">{{ $t("BLOCK") }}</router-link>
        <router-link to="/tx">Transactions</router-link>
        <router-link to="/address">Addresses</router-link>
      </header>
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
