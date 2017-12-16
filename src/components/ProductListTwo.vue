<template>
  <div id="product-list-two">
    <h2>Product List #2</h2>
    <ul>
      <li v-for="product in products">{{ product.name }} and my price in $ is {{ product.price * 0.75 }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ['products'],
  data () {
    return {
    }
  }
}
</script>

