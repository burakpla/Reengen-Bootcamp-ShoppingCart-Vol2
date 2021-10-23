<template>
  <div id="app">
    <div class="header">
      <h1>shop.com</h1>

      <shopping-cart :cart="shoppingCart" :total="totalAmount"></shopping-cart>
    </div>

    <section class="items-container">
      <item v-for="product in products"
        :key="product.key"
        :item="product">
      </item>
    </section>
  </div>
</template>

<script>
import Item from './components/Item.vue';
import ShoppingCart from './components/ShoppingCart.vue'
export default {
  name: 'app',
  components: {
      ShoppingCart,
      Item
  },
  computed: {
      shoppingCart() {
          return this.$store.state.cart
      },
      products() {
          return this.$store.state.items
      },
      totalAmount() {
          return this.$store.getters.total
      }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
h1 {
  font-size: 1.5em;
}
.header {
  background: coral;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 10px 15px;
  margin: 0;
}
.items-container {
  display: flex;
  flex-flow: row;
  width: 100%;
}
select {
  width: 140px;
  -webkit-appearance: none;
  padding: 7px;
  background: antiquewhite;
  font-size: 1em;
}
button {
  width: 140px;
  -webkit-appearance: none;
  background-color: #1d85ca;
  color: white;
  border-radius: 5px;
  font-size: 0.9em;
  height: 40px;
  cursor: pointer;
}
select {
  cursor: pointer;
}
</style>