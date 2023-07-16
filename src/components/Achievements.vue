<script>
export default {
  data() {
    return {
      achievements: [],
      trophyCount: 0,
      ghostTrophy: 0,
    };
  },
  computed: {
    achievementsCount() {
      let ghostTrophy = this.achievements.length;
      return ghostTrophy;
    },
  },
  methods: {
    changeTrophyImage(achievement) {
      if (
        achievement.trophyImage === "/src/assets/images/trophies/trophy.png"
      ) {
        achievement.trophyImage = "/src/assets/images/trophies/trophy (3).png";
        this.trophyCount--;
        this.ghostTrophy++;
      } else {
        achievement.trophyImage = "/src/assets/images/trophies/trophy.png";
        this.trophyCount++;
        this.ghostTrophy--;
      }
    },
  },
  mounted() {
    const storedGames = localStorage.getItem("selectedGames");
    console.log(storedGames);
    if (storedGames) {
      const selectedGames = JSON.parse(storedGames);
      if (selectedGames.length > 0) {
        const selectedAchievements = selectedGames[0].Achievements;
        this.achievements = selectedAchievements.map((achievement) => ({
          ...achievement,
          trophyImage: "/src/assets/images/trophies/trophy (3).png",
        }));
        this.ghostTrophy = this.achievements.length; // Asignar el valor de `achievements.length` a `ghostTrophy`
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
        <img src="/src/assets/images/trophies/trophy.png" alt="" />
        <h2>{{ trophyCount }}</h2>
        <img src="/src/assets/images/trophies/trophy (3).png" alt="" />
        <h2>{{ ghostTrophy }}</h2>
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
      <button class="trophy_button" @click="changeTrophyImage(achievement)">
        <img :src="achievement.trophyImage" alt="" />
      </button>
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
  margin-left: 50px;
  margin-right: 40px;
  padding-right: 20px;
  color: #fff;
}
.achivementsList_container {
  display: flex;
  justify-content: space-between;
  background-color: #2ca243;
  height: 9vh;
  margin: 15px;
}

.text_container {
  display: flex;
  flex-direction: column;
  padding-right: 90px;
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

.trophy_button {
  background-color: #2ca243ed;
  width: 100%;
  border: none;
}

.achievements_img {
  height: auto;
}
</style>
