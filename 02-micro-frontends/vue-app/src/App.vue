<template>
  <div v-if="!!product">
    <span class="title">Selected Product:</span>
    <span>{{product.name}}</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    product: Object,
  },
}
</script>

<style scoped>
  .title {
    font-weight: bold;
    margin-right: 5px;
  }
</style>
