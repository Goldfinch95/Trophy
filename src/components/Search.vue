<script>
export default {
  data() {
    return {
      games: [
        {
          name: "Age of Empires",
          img: "src/assets/images/games/AoE.png",
        },
        {
          name: "Age of Empires II",
          img: "src/assets/images/games/AoEII.png",
        },
        {
          name: "Age of Empires III",
          img: "src/assets/images/games/AoEIII.png",
        },
        {
          name: "Crash Bandicoot N-Sane Trylogy",
          img: "src/assets/images/games/CrashBandicootN-SaneTrylogy.png",
        },
        {
          name: "GameDev Tycoon",
          img: "src/assets/images/games/GameDevTycoon.png",
        },
        {
          name: "GreenHell",
          img: "src/assets/images/games/GreenHell.png",
        },
        {
          name: "HogwartsLegacy",
          img: "src/assets/images/games/HogwartsLegacy.png",
        },
        {
          name: "Humankind",
          img: "src/assets/images/games/Humankind.png",
        },
        {
          name: "Jurassic World Evolution",
          img: "src/assets/images/games/JurassicWorldEvolution.png",
        },
        {
          name: "Jurassic World Evolution 2",
          img: "src/assets/images/games/JurassicWorldEvolution2.png",
        },
        {
          name: "Life is Stranger",
          img: "src/assets/images/games/LifeIsStrange.png",
        },
        {
          name: "Life is Stranger Before The Storm",
          img: "src/assets/images/games/LISBeforeTheStorm.png",
        },
        {
          name: "Raft",
          img: "src/assets/images/games/Raft.png",
        },
        {
          name: "Resident Evil",
          img: "src/assets/images/games/RE.png",
        },
        {
          name: "Return Of The Obra Dinn",
          img: "src/assets/images/games/ReturnOfTheObraDinn.png",
        },
        {
          name: "Resident Evil 0",
          img: "src/assets/images/games/REZero.png",
        },
        {
          name: "The Witcher 2",
          img: "src/assets/images/games/TheWitcher2.png",
        },
        {
          name: "The Witcher 3",
          img: "src/assets/images/games/TheWitcher3.png",
        },
      ],
      searchTerm: "",
    };
  },
  computed: {
    filteredGames() {
      return this.games.filter((game) =>
        game.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
};
</script>
<template>
  <div class="search_container">
    <input
      class="search"
      type="text"
      v-model="searchTerm"
      @input="filterGames"
    />
    <img
      class="search_logo"
      src="/src/assets/images/search/search_logo.png"
      alt=""
    />
  </div>
  <div class="games_container">
    <div class="frame">
      <ul v-for="game in filteredGames" :key="game.name" class="game_item">
        <img class="game_img" :src="game.img" alt="" />
      </ul>
    </div>
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
.games_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  height: 100vh;
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
