<template>
  <div id="product-list-one">
    <h2>Product List #1</h2>
    <ul>
      <li v-for="product in products">{{ product.name }} and my price in &pound; is {{ product.price }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  computed: {
    products(){
      return this.$store.state.products;
    }
  }
}
</script>

