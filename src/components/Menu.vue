<script>
export default {
  data() {
    return {
      buttons: [
        {
          name: "Buscador",
          path: "/Search",
        },
        {
          name: "Lista",
          path: "/List",
        },
        {
          name: "Logros",
          path: "/Achievements",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="menu_option" v-for="button in buttons" :key="button.name">
    <router-link class="button" :to="`${button.path}`">{{
      button.name
    }}</router-link>
  </div>
</template>
<style>
.menu_option {
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: first baseline;
  background-color: #2ca243;
  border-bottom: 1px solid #fff;
  color: #fff;
  width: 100vw;
  padding: 5px;
  font-size: 20px;
}
a {
  text-decoration: none;
  color: #fff;
}
.menu_option:hover {
  background-color: #77bb44;
}
</style>
