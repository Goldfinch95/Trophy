<script>
export default {
  data() {
    return {
      selectedGames: [],
    };
  },
  mounted() {
    // Recuperar los juegos almacenados en el local storage cuando el componente se monta
    const selectedGames = JSON.parse(localStorage.getItem("selectedGames"));
    if (selectedGames) {
      this.selectedGames = selectedGames;
    }
  },
  computed: {
    filteredGames() {
      // Filtrar juegos repetidos utilizando un objeto auxiliar
      const gameMap = {};
      const uniqueGames = [];

      for (const game of this.selectedGames) {
        if (!gameMap[game.name]) {
          gameMap[game.name] = true;
          uniqueGames.push(game);
        }
      }

      return uniqueGames;
    },
  },
  methods: {
    GoToAchivements(game) {
      console.log("Accediendo a los logros", game.name);
      this.$router.push({ name: "Achievements" });
    },
    deleteLastOption() {
      if (this.selectedGames.length > 0) {
        const deletedGame = this.selectedGames.pop(); // Elimina el último elemento del array
        localStorage.setItem(
          "selectedGames",
          JSON.stringify(this.selectedGames)
        );
      }
    },
  },
};
</script>
<template>
  <div class="games_container">
    <div class="frame">
      <ul v-for="game in filteredGames" :key="game.name" class="game_item">
        <button class="game_button" @click="GoToAchivements(game)">
          <img class="game_img" :src="game.img" alt="" />
        </button>
      </ul>
    </div>
    <div class="delete_container">
      <button class="button_delete" @click="deleteLastOption()">
        <i class="bi bi-trash"></i>
      </button>
    </div>
  </div>
</template>
<style scoped>
.games_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  height: 100vh;
  margin: 15px;
}

.frame {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 10px;
  margin-right: 10px;
}

.game_button {
  border: none;
  background: none;
}

.game_item {
  height: auto;
}

.game_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.delete_container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  right: 0;
  margin: 15px;
  background-color: #107c10;
  border-radius: 360px;
}
.button_delete {
  background-color: #107c10;
  border: none;
  color: white;
  border-radius: 360px;
  font-size: 70px;
}
.button_delete i {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  margin: 15px;
}
</style>
