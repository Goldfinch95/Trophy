<script>
import Nav from "./components/Nav.vue";
import Search from "./components/Search.vue";
import { RouterView } from "vue-router";
export default {
  components: {
    Nav,
    Search,
  },
};
</script>

<template>
  <Nav />
  <Menu />
  <RouterView></RouterView>
</template>

<style>
.background_image {
  align-items: center;
  margin: 15px;
  margin-top: 200px;
  height: 45vh;
}
</style>
