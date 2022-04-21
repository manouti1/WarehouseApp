<template>
  <div class="app">
    <CarList :cars="cars" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import CarList from "./components/CarsList.vue";
  import type Car from "./types/Car";
export default defineComponent({
  name: "App",
  components: { CarList },
  setup() {
    const cars = ref<Car[]>([
      {
        _id: 16,
        make: "Dodge",
        model: "Ram Van 3500",
        year_model: 1999,
        price: 6244.51,
        licensed: true,
        date_added: "2018-09-28",
        warehouse_id: "1",
        warehouse_lat: "47.13111",
        warehouse_lng: "-61.54801",
        warehouse_location: "West wing",
        warehouse_name: "Warehouse A",
      },
      {
        _id: 43,
        make: "Jaguar",
        model: "XK",
        year_model: 2006,
        price: 10260.79,
        licensed: true,
        date_added: "2018-09-28",
        warehouse_id: "2",
        warehouse_lat: "15.95386",
        warehouse_lng: "7.06246",
        warehouse_location: "East wing",
        warehouse_name: "Warehouse B",
      },
      {
        _id: 51,
        make: "Cadillac",
        model: "Escalade",
        year_model: 2005,
        price: 7429.18,
        licensed: true,
        date_added: "2018-09-26",
        warehouse_id: "3",
        warehouse_lat: "39.12788",
        warehouse_lng: "-2.71398",
        warehouse_location: "Suid wing",
        warehouse_name: "Warehouse C",
      },
    ]);

    return { cars };
  },
  data() {
    return {
      name: "Link",
    };
  },
  methods: {
    changeName(name: string) {
      this.name = name;
    },
  },
});
</script>
