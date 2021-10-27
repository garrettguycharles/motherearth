<template>
  <div>
    <CartProductList :cart="cart" />
  </div>
</template>


<script>
  import CartProductList from "../components/CartProductList.vue"
  export default {
    name: 'Cart',
    components: {
      CartProductList
    },
    computed: {
      cart: function() {
        return this.$root.$data.cart;
      }
    }
  }
</script>
