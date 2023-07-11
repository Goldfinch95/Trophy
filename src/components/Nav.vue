<script></script>

<template>
  <div class="nav_container">
    <i class="bi bi-caret-down"></i>
    <h1>Trophy</h1>
    <img src="/src/assets/images/trophy.png" alt="Trophy" />
  </div>
  <div class="background_container">
    <img
      class="background_image"
      src="/src/assets/images/trophy (1).png"
      alt=""
    />
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
.background_container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 94vh;
}
.background_image {
  align-items: center;
  margin: 15px;
  height: 45vh;
}
</style>
