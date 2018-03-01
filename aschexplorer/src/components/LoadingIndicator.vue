<template>
  <div>
    <atom-spinner :size="100"
      :animation-duration="1200"
      :color="'black'" class="atom" />
    <p> {{ $t('LOADING')}} <p/>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.atom {
  color: black;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
