<template>
  <footer>
    <button @click="setNewLang('de')">de</button>
    <button @click="setNewLang('en')">en</button>
  </footer>
</template>

<script>
export default {
  methods: {
    setNewLang (newLang) {
      if (typeof newLang === 'string') {
        this.$i18n.locale = newLang
      }
    }
  }
}
</script>

<style scoped>
footer {
    position: fixed;
    margin: 0px;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background-color: orange;
    overflow-y: scroll;
}
</style>
