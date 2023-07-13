<script></script>
<template>
  <div class="search_container">
    <input class="search" type="text" />
    <img
      class="search_logo"
      src="/src/assets/images/search/search_logo.png"
      alt=""
    />
  </div>
</template>
<style>
.search_container {
  display: flex;
  justify-content: space-between;
  margin: 25px;
  height: 6vh;
  background-color: #fff;
  border-radius: 12px;
}
.search {
  height: 100%;
  width: 90%;
  background-color: #fff;
  border: none;
  border-radius: 12px;
  padding-left: 15px;
  outline: none;
  font-size: 30px;
}
.search_logo {
  margin: 5px;
  margin-right: 10px;
  cursor: pointer;
}
</style>
