<template>
  <div class="table-responsive">
    <h4>Cars List</h4>
    <table class="table table-hover mt-3">
      <thead>
        <tr>
          <th>ID</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year Model</th>
          <th>Licensed</th>
          <th>Price</th>
          <th>Date Added</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="car in cars"
          :class="{ active: index == currentIndex }"
          :key="index"
        >
          <td>{{ car._id }}</td>
          <td>{{ car.make }}</td>
          <td>{{ car.model }}</td>
          <td>{{ car.year_model }}</td>
          <td>{{ car.licensed }}</td>
          <td>{{ car.price }}</td>
          <td>{{ car.date_added }}</td>
          <td>
            <button
              type="button"
              class="btn btn-success btn-block"
              @click="showModal(car, index)"
            >
              View Details
            </button>
          </td>
          <td>
            <button
              class="btn btn-danger btn-block"
              @click="removeFromCart(car._id)"
              v-if="isInCart(car._id)"
            >
              Remove From Cart
            </button>
            <button
              class="btn btn-primary btn-block"
              @click="addToCart(car._id)"
              v-else
            >
              Add To Cart
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-warning btn-checkout" @click="$router.push('/cart')">
      Check Out
    </button>
    <car-details
      :car="currentCar"
      v-if="displayModal"
      @close-modal-event="hideModal"
    />
  </div>
</template>
<script lang="ts">
  import CarListDataService from "@/services/CarListDataService"
  import type Car from "@/types/Car"
  import type ResponseData from "@/types/ResponseData"
  import { defineComponent } from "vue"
  import CarDetails from "./CarDetails.vue"

export default defineComponent({
  name: "cars-list",
  components: {
    CarDetails,
  },
  data() {
    return {
      cars: [] as Car[],
      title: "",
      displayModal: false,
      currentCar: {} as Car,
      currentIndex: -1,
      cart: [],
    };
  },
  methods: {
    retrieveCarsByDateAsc() {
      CarListDataService.getByDateAsc()
        .then((response: ResponseData) => {
          this.cars = response.data.data;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    isInCart(itemId) {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      const cartItem = this.cart.find(({ _id }) => _id === itemId);
      return Boolean(cartItem);
    },
    removeFromCart(itemId) {
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      const index = cartItems.findIndex(({ _id }) => _id === itemId);
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
    addToCart(itemId) {
      const item = this.cars.find(({ _id }) => _id === itemId);
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      cartItems.push(item);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
    showModal(car: Car, index: number) {
      if (car.licensed) {
        this.displayModal = true;
        this.currentCar = car;
        this.currentIndex = index;
      } else {
        this.displayModal = false;
      }
    },
    hideModal() {
      this.displayModal = false;
    },
  },
  mounted() {
    this.retrieveCarsByDateAsc();
  },
  created() {
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    this.cart = JSON.parse(localStorage.getItem("cart"));
  },
});
</script>
<style></style>
