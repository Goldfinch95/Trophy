<script>
import Menu from "./Menu.vue";

export default {
  components: {
    Menu,
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<template>
  <div class="nav_container">
    <button class="menu_button" @click="toggleMenu">
      <i class="bi bi-caret-down"></i>
      <Menu v-if="menuOpen" />
    </button>
    <h1>Trophy</h1>
    <img src="/src/assets/images/trophies/trophy.png" alt="Trophy" />
  </div>
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
  height: 6vh;
  width: 15%;
  background-color: #107c10;
  border: none;
  cursor: pointer;
}
i {
  font-size: 44px;
  color: #fff;
}

h1 {
  margin: 7px;
  color: #fff;
}

img {
  margin: 4px;
  height: 5vh;
}

.menu {
  display: none;
}

.menu.open {
  display: flex;
}
</style>
