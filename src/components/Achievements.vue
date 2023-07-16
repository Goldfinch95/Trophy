<script>
export default {
  data() {
    return {
      achievements: [],
    };
  },
  mounted() {
    const storedGames = localStorage.getItem("selectedGames");
    console.log(storedGames);
    if (storedGames) {
      const selectedGames = JSON.parse(storedGames);
      if (selectedGames.length > 0) {
        const selectedAchievements = selectedGames[0].Achievements;
        this.achievements = selectedAchievements;
      }
    }
  },
};
</script>
<template>
  <div class="achievementsMainBox_container">
    <img class="game_img" src="/src/assets/images/games/AoE.png" alt="" />
    <div class="personalAchievements_container">
      <h1>Logros Personales</h1>
      <div class="trophy">
        <img src="/src/assets/images/trophies/trophy (2).png" alt="" />
        <h2>0</h2>
        <img src="/src/assets/images/trophies/trophy.png" alt="" />
        <h2>0</h2>
        <img src="/src/assets/images/trophies/trophy (3).png" alt="" />
        <h2>0</h2>
      </div>
    </div>
  </div>
  <div
    class="achivementsList_container"
    v-for="achievement in achievements"
    :key="achievement.name"
  >
    <img
      class="achievements_img"
      :src="achievement.img"
      :alt="achievement.name"
    />
    <div class="text_container">
      <h1>{{ achievement.name }}</h1>
      <h3>{{ achievement.description }}</h3>
    </div>
    <div class="trophy_container">
      <img src="/src/assets/images/trophies/trophy (3).png" alt="" />
    </div>
  </div>
</template>
<style>
.achievementsMainBox_container {
  display: flex;
  height: 20vh;
  background-color: #2ca243;
}
.game_img {
  height: auto;
}
.trophy {
  margin-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
  padding-right: 10px;
  color: #fff;
}
.achivementsList_container {
  display: flex;
  justify-content: space-between;
  background-color: #2ca243;
  height: 8vh;
  margin: 15px;
}

.text_container {
  margin-right: 75px;
}

.achivementsList_container h1 {
  font-size: 12px;
  padding-right: 50px;
}
.achivementsList_container h3 {
  font-size: 10px;
  padding-left: 7px;
  color: #fff;
}

.trophy_container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.achievements_img {
  height: auto;
}
</style>
