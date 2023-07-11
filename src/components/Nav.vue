<script>
import Menu from "./Menu.vue";
export default {
  components: {
    Menu,
  },
};
</script>

<template>
  <div class="nav_container">
    <button class="menu_button"><i class="bi bi-caret-down"></i></button>
    <h1>Trophy</h1>
    <img src="/src/assets/images/trophies/trophy.png" alt="Trophy" />
  </div>
  <Menu />
</template>

<style>
.nav_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 6vh;
  background-color: #107c10;
}

.menu_button {
  height: 5vh;
  background-color: #107c10;
  border: none;
  cursor: pointer;
}
i {
  font-size: 50px;
  color: #fff;
  margin-left: 5px;
}

h1 {
  margin: 7px;
  color: #fff;
}

img {
  margin: 5px;
  height: 5vh;
}
</style>
