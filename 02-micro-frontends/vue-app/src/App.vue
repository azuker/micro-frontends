<template>
  <div v-if="product">
    <div><span class="title">Selected Product:</span></div>
    <div class="common-card">
      <div class="product-card-container">
        <img
          class="product-card-primary-image"
          :src="product.primaryImageUrl"
          alt="product"
        />
        <div class="product-card-content-container">
          {{product.name}}
        </div>
      </div>
    </div>
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

  .product-list-container {
    display: flex;
    flex-wrap: wrap;
  }

  .product-card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .common-card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    height: 100px;
    width: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    background-color: white;
  }

  .common-card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .product-card-content-container {
    padding: 2px 16px;
  }

  .product-card-primary-image {
    width: 30px;
    height: 30px;
  }
</style>
