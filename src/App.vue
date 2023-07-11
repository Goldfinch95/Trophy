<script>
import Nav from "./components/Nav.vue";
import Search from "./components/Search.vue";
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
  <Search />
  <div class="background_container">
    <img
      class="background_image"
      src="/src/assets/images/trophies/trophy (1).png"
      alt=""
    />
  </div>
</template>

<style>
.background_container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
}
.background_image {
  align-items: center;
  margin: 15px;
  margin-top: 200px;
  height: 45vh;
}
</style>
