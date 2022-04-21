<template>
  <div>
    <h1>Cart</h1>
    <div class="row" v-if="!checkIfCartEmpty()">
      <div class="cart-head col-sm-3"><b>Make</b></div>
      <div class="cart-head col-sm-3"><b>Model</b></div>
      <div class="cart-head col-sm-3"><b>Price</b></div>
      <div class="cart-head col-sm-3"></div>
    </div>
    <div class="row mt-3" v-for="(c, index) of cart" :key="c._id">
      <div class="col-sm-3">{{ c.make }}</div>
      <div class="col-sm-3">{{ c.model }}</div>
      <div class="col-sm-3">{{ c.price }}</div>
      <div class="col-sm-3">
        <button class="btn btn-danger btn-block" @click="removeFromCart(index)">
          Remove From Cart
        </button>
      </div>
    </div>
    <div class="row mt-3" v-if="!checkIfCartEmpty()">
      <div class="col-sm-3"></div>
      <div class="col-sm-3"><b>Total:</b></div>
      <div class="col-sm-3">{{ getCartTotal() }}</div>
      <div class="col-sm-3"></div>
    </div>
  </div>
  <div v-if="checkIfCartEmpty()">
    <b>No items in cart</b>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      cart: [],
      sum: 0,
    };
  },
  methods: {
    removeFromCart(itemId) {
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      const index = cartItems.findIndex(({ id }) => id === itemId);
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
    getCart() {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
    checkIfCartEmpty() {
      return JSON.parse(localStorage.getItem("cart")).length == 0;
    },
    getCartTotal() {
      this.sum = 0;
      for (let i = 0; i < this.cart.length; i++) {
        this.sum += this.cart[i].price;
      }
      return this.sum.toFixed(2);
    },
  },
  beforeMount() {
    this.getCart();
  },
};
</script>
<style>
.cart-head {
  font-size: 20px;
}
</style>
