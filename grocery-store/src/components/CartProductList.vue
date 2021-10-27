<template>
  <div class="wrapper">

    <h1>Cart</h1>

    <div v-if="cart.length === 0">
      <h2>Your cart is empty!</h2>
      <p>Don't worry, we can fix that.  Click the logo above to browse the store!</p>
    </div>

    <table v-else>
      <tbody>
        <tr>
          <th class="image-th">Image</th>
          <th>Name</th>
          <th>Country</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Options</th>
        </tr>

        <tr class="product" v-for="item in cart" :key="item.product.id">
          <td><div class="image">
            <img :src="'/images/products/' + item.product.image">
          </div></td>
          <td>{{item.product.name}}</td>
          <td>{{item.product.country}}</td>
          <td>
            <button class="btn_inc_dec" @click="item.quantity = Math.max(item.quantity - 1, 0)">-</button>
            <span  :class="{ item_quantity_span: true, zero_quantity: (item.quantity < 1) }">{{item.quantity}}</span>
            <button class="btn_inc_dec" @click="item.quantity++">+</button>
          </td>
          <td>{{item.product.price}}</td>
          <td><button @click="remove_from_cart(item.product)">Remove Item</button></td>
        </tr>
        <tr>
          <th class="image-th">Totals:</th>
          <th></th>
          <th></th>
          <th>{{ quantity_total }}</th>
          <th>${{ price_total }}</th>
          <th></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'CartProductList',
    props: {
      cart: Array,
    },
    computed: {
      price_total: function() {
        var total = 0;
        for (let i in this.cart) {
          total += parseFloat(this.cart[i].product.price.substr(1)) * this.cart[i].quantity;
        }

        return total.toFixed(2);
      },
      quantity_total: function() {
        var total = 0;
        for (let i in this.cart) {
          total += this.cart[i].quantity;
        }

        return total;
      }
    },
    methods: {
      remove_from_cart: function(product) {
        this.$root.$data.cart = this.$root.$data.cart.filter(p => p.product !== product);
      },
    }
  }

</script>

<style scoped>

.zero_quantity {
  font-weight: bold;
  color: #ff0000;
}

table, tbody, tr {
  width: 100%;
}

.image-th {
  text-align: left;
}

tr {
  border-bottom: 2px solid black;
}

th {
  padding: 1rem;
}

td, tr {
  width: 20%;
}

td {
  text-align: center;
  padding: 1rem 0;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.products {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 80%;
}

.product {
  width: 100%;
  height: 100%;
  align-items: center;
  border-bottom: 1px solid #9b9b9b;
  padding: 1rem 0;
}

.product-left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
  flex: 1;
}

.product img {
  border: 2px solid #333;
  height: 5rem;
  width: 5rem;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: flex-start;
  width: 100%;

}

.info {
  background: #F2921D;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.info h2 {
  font-size: 16px;
}

.info h3 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

.btn_inc_dec {
  height: auto !important;
  background: #fefefe !important;
  border: 1px solid #ebebeb !important;
  padding: 0.5rem;
  color: black;
}

.btn_inc_dec:hover {
  transform: translateY(-2px) scale(1.05);
}

.btn_inc_dec:active {
  transform: translateY(1px);
}

.btn_inc_dec:focus {
  outline: none;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}

.item_quantity_span {
  padding: 0 1rem;
}

</style>
