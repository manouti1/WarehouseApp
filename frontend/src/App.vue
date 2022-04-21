<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">MyApp</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/cars" class="nav-link">Cars</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cart" class="nav-link">Cart</router-link>
        </li>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue"
export default defineComponent({
  name: "App",
});
</script>
