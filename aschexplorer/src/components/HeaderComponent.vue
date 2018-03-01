<template>
  <headroom>
    <header>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <router-link to='/'>{{ $t("HOME") }}</router-link>
      <router-link to="/block">{{ $t("BLOCK") }}</router-link>
      <router-link to="/tx">{{ $t("TRANSACTION") }}</router-link>
      <router-link to="/address">{{ $t("ADDRESSES") }}</router-link>
      <router-link to="/delegate">{{ $t("DELEGATE") }}</router-link>
    </header>
  </headroom>
</template>

<script>
</script>

<style scoped>
</style>
