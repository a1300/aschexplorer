<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <router-view/>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent'
import HeaderComponent from '@/components/HeaderComponent'
export default {
  name: 'App',
  components: {
    'HeaderComponent': HeaderComponent,
    'FooterComponent': FooterComponent
  },
  methods: {
    setNewLang (newLang) {
      if (typeof newLang === 'string') {
        this.$i18n.locale = newLang
      }
    }
  },
  created: function () {
    let lang = navigator.language || navigator.userLanguage
    if (typeof lang === 'string' && lang.length >= 2) {
      let firstTwo = lang.substr(0, 2)
      if (this.$i18n && firstTwo in this.$i18n.messages) {
        this.$i18n.locale = firstTwo
      }
    }
  }
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
  display: block;
}
</style>
