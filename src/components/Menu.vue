<script>
export default {
  data() {
    return {
      options: [
        {
          name: "Buscador",
        },
        { name: "Lista" },
        { name: "Logros" },
      ],
    };
  },
};
</script>
<template>
  <div class="menu_option" v-for="option in options" :key="option.name">
    {{ option.name }}
  </div>
</template>
<style>
.menu_option {
  display: flex;

  background-color: #2ca243;
  border-bottom: 1px solid #fff;
  color: #fff;
  width: 100vw;
  padding: 5px;
  font-size: 20px;
}

.menu_option:hover {
  background-color: #77bb44;
}
</style>
