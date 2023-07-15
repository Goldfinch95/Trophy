<script></script>
<template>
  <div class="games_container">
    <div class="frame">
      <ul v-for="game in filteredGames" :key="game.name" class="game_item">
        <img class="game_img" :src="game.img" alt="" />
      </ul>
    </div>
  </div>
</template>
<style>
.games_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  height: 94vh;
}

.frame {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 15px;
}

.game_item {
  height: auto;
}

.game_img {
  height: auto;
  width: 100%;
}
</style>
