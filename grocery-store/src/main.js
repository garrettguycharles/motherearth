import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

Vue.config.productionTip = false

let data = {
  products: mock,
  cart: [],
}

new Vue({
  router,
  data: data,
  computed: {
    cartQuantity: function() {
      var quantity = 0;
      for (let i in this.cart) {
        quantity += this.cart[i].quantity;
      }
      return quantity;
    },
  },
  render: h => h(App)
}).$mount('#app')
