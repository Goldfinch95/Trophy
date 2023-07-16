<script>
export default {
  data() {
    return {
      games: [
        {
          name: "Age of Empires",
          img: "src/assets/images/games/AoE.png",
          Achievements: [
            {
              name: "Pizza de pepperoni",
              description: "Has acumulado 50 000 de Comida.",
              img: "src/assets/images/Achievements/AoE/PizzaDePepperoni.png",
            },
            {
              name: "Madera de ganador",
              description: "Has acumulado 50 000 de Madera.",
              img: "src/assets/images/Achievements/AoE/MaderaDeGanador.png",
            },
            {
              name: "Y no es que lleve la cuenta?",
              description: "Derrota a 1000 unidades enemigas.",
              img: "src/assets/images/Achievements/AoE/YNoEsQueLleveLaCuenta.png",
            },
            {
              name: "Faraón",
              description: "Completa la campaña El Ascenso de Egipto.",
              img: "src/assets/images/Achievements/AoE/Faraón.png",
            },
            {
              name: "Épica",
              description: "Completa la campaña La Gloria de Grecia.",
              img: "src/assets/images/Achievements/AoE/Épica.png",
            },
            {
              name: "Hércules",
              description: "Derrota a un león (Alfa)",
              img: "src/assets/images/Achievements/AoE/Hércules.png",
            },
            {
              name: "XXI centurias",
              description: "Entrena 21 Centuriones.",
              img: "src/assets/images/Achievements/AoE/XXICenturias.png",
            },
            {
              name: "Acuñación",
              description: "Has acumulado 50 000 de Oro.",
              img: "src/assets/images/Achievements/AoE/Acuñación.png",
            },
            {
              name: "En Japón a lo grande",
              description:
                "Completa la campaña Yamato, el Imperio del Sol Naciente.",
              img: "src/assets/images/Achievements/AoE/EnJapónALoGrande.png",
            },
            {
              name: "Arquímedes",
              description:
                "Has investigado todas las tecnologías disponibles en una sola partida.",
              img: "src/assets/images/Achievements/AoE/Arquímedes.png",
            },
            {
              name: "Hititas y palomitas",
              description: "Completa la campaña El Reinado de los Hititas.",
              img: "src/assets/images/Achievements/AoE/HititasYPalomitas.png",
            },
            {
              name: "Atlas",
              description: "Explora todas las áreas de un mapa.",
              img: "src/assets/images/Achievements/AoE/Atlas.png",
            },
            {
              name: "Los pies en el suelo",
              description:
                "Gana una partida en un mapa aleatorio sin entrenar Caballería.",
              img: "src/assets/images/Achievements/AoE/LosPiesEnElSuelo.png",
            },
            {
              name: "El ojo en el cielo",
              description:
                "Gana una partida en un mapa aleatorio sin entrenar Arqueros.",
              img: "src/assets/images/Achievements/AoE/ElOjoEnElCielo.png",
            },
            {
              name: "Roma Victrix",
              description: "Completa la campaña El Auge de Roma.",
              img: "src/assets/images/Achievements/AoE/RomaVictrix.png",
            },
            {
              name: "Zigurats humeantes",
              description: "Completa la campaña Voces de Babilonia.",
              img: "src/assets/images/Achievements/AoE/ZiguratsHumeantes.png",
            },
            {
              name: "Vine, vi, vencí",
              description: "Completa la campaña Ave César.",
              img: "src/assets/images/Achievements/AoE/VineViVencí.png",
            },
            {
              name: "Paz imperial",
              description: "Completa la campaña Imperium Romanum.",
              img: "src/assets/images/Achievements/AoE/PazImperial.png",
            },
            {
              name: "No es ninguna bRoma",
              description: "Completa la campaña Enemigos de Roma.",
              img: "src/assets/images/Achievements/AoE/NoEsNingunaBRoma.png",
            },
            {
              name: "Ataque púnico",
              description: "Completa la campaña de La Primera Guerra Púnica.",
              img: "src/assets/images/Achievements/AoE/AtaquePúnico.png",
            },
            {
              name: "Crisis de fe",
              description: "Convierte a un Sacerdote enemigo.",
              img: "src/assets/images/Achievements/AoE/CrisisDeFe.png",
            },
            {
              name: "Cantera",
              description: "Has acumulado 50 000 de Piedra.",
              img: "src/assets/images/Achievements/AoE/Cantera.png",
            },
            {
              name: "Torres de Babel",
              description: "Construye 50 Torres Babilonias.",
              img: "src/assets/images/Achievements/AoE/TorresDeBabel.png",
            },
            {
              name: "Pegaso",
              description: "Has avanzado en primer lugar a todas las Edades.",
              img: "src/assets/images/Achievements/AoE/Pegaso.png",
            },
            {
              name: "¿Hogares?",
              description: "Construye 500 Casas.",
              img: "src/assets/images/Achievements/AoE/Hogares.png",
            },
            {
              name: "Syntagma",
              description: "Entrena 256 Hoplitas Macedonios.",
              img: "src/assets/images/Achievements/AoE/Syntagma.png",
            },
            {
              name: "Wololo",
              description: "Convierte 1000 unidades.",
              img: "src/assets/images/Achievements/AoE/Wololo.png",
            },
            {
              name: "El ojo de Horus",
              description: "Convierte 20 unidades con Sacerdotes Egipcios.",
              img: "src/assets/images/Achievements/AoE/ElOjoDeHorus.png",
            },
            {
              name: "Maravilloso",
              description:
                "Has ganado una partida construyendo y manteniendo una Maravilla.",
              img: "src/assets/images/Achievements/AoE/Maravilloso.png",
            },
            {
              name: "Murallas para todos",
              description: "Construye 789 Segmentos de Muralla Shang.",
              img: "src/assets/images/Achievements/AoE/MurallasParaTodos.png",
            },
            {
              name: "Tres, dos, huno...",
              description: "Destruye 200 Templos.",
              img: "src/assets/images/Achievements/AoE/TresDosHuno.png",
            },
            {
              name: "Artemisa",
              description: "Caza 250 animales.",
              img: "src/assets/images/Achievements/AoE/Artemisa.png",
            },
            {
              name: "Me parto con los partos",
              description: "Entrena 500 Arqueros a Caballo.",
              img: "src/assets/images/Achievements/AoE/MePartoConLosPartos.png",
            },
            {
              name: "Me parto con los partos",
              description: "Entrena 500 Arqueros a Caballo.",
              img: "src/assets/images/Achievements/AoE/MePartoConLosPartos.png",
            },
            {
              name: "Eres un hacha",
              description: "Entrena 400 Soldados con Hacha.",
              img: "src/assets/images/Achievements/AoE/EresUnHacha.png",
            },
            {
              name: "Catapultas de categoría",
              description: "Construye 500 Catapultas Pesadas.",
              img: "src/assets/images/Achievements/AoE/CatapultasDeCategoría.png",
            },
            {
              name: "No chocheas",
              description: "Crea 1000 Legiones Choson.",
              img: "src/assets/images/Achievements/AoE/NoChocheas.png",
            },
            {
              name: "Carros de guerra",
              description: "Entrena 400 Arqueros sobre Carros Asirios.",
              img: "src/assets/images/Achievements/AoE/CarrosDeGuerra.png",
            },
            {
              name: "Camaradas minoicos",
              description: "Entrena 100 Arqueros Arco Compuesto Minoicos.",
              img: "src/assets/images/Achievements/AoE/CamaradasMinoicos.png",
            },
            {
              name: "Qué escitante",
              description: "Entrena 100 Carros Escitas Egipcios.",
              img: "src/assets/images/Achievements/AoE/QuéEscitante.png",
            },
            {
              name: "Asesino",
              description: "Has derrotado a 20 héroes.",
              img: "src/assets/images/Achievements/AoE/Asesino.png",
            },
            {
              name: "Perseo",
              description: "Has matado a una medusa.",
              img: "src/assets/images/Achievements/AoE/Perseo.png",
            },
            {
              name: "Estado del Artefacto",
              description:
                "Has ganado una partida haciéndote con todos los Artefactos.",
              img: "src/assets/images/Achievements/AoE/EstadoDelArtefacto.png",
            },
            {
              name: "Para arruinarlos a todos",
              description: "Has ganado una partida haciéndote con ruinas.",
              img: "src/assets/images/Achievements/AoE/ParaArruinarlosATodos.png",
            },
            {
              name: "Res Publica",
              description: "Has ganado una partida con posición ELO.",
              img: "src/assets/images/Achievements/AoE/ResPublica.png",
            },
          ],
        },
        {
          name: "Age of Empires II",
          img: "src/assets/images/games/AoEII.png",
          Achievements: {
            name: "",
            description: "",
            img: "",
          },
        },
        {
          name: "Age of Empires III",
          img: "src/assets/images/games/AoEIII.png",
          Achievements: {
            name: "",
            description: "",
            img: "",
          },
        },
        {
          name: "Crash Bandicoot N-Sane Trylogy",
          img: "src/assets/images/games/CrashBandicootN-SaneTrylogy.png",
          Achievements: {
            name: "",
            description: "",
            img: "",
          },
        },
        {
          name: "GameDev Tycoon",
          img: "src/assets/images/games/GameDevTycoon.png",
          Achievements: {
            name: "",
            description: "",
            img: "",
          },
        },
        {
          name: "GreenHell",
          img: "src/assets/images/games/GreenHell.png",
          Achievements: {
            name: "",
            description: "",
            img: "",
          },
        },
        {
          name: "HogwartsLegacy",
          img: "src/assets/images/games/HogwartsLegacy.png",
          Achievements: {
            name: "",
            description: "",
            img: "",
          },
        },
        {
          name: "Humankind",
          img: "src/assets/images/games/Humankind.png",
          Achievements: {
            name: "",
            description: "",
            img: "",
          },
        },
        {
          name: "Jurassic World Evolution",
          img: "src/assets/images/games/JurassicWorldEvolution.png",
          Achievements: {
            name: "",
            description: "",
            img: "",
          },
        },
        {
          name: "Jurassic World Evolution 2",
          img: "src/assets/images/games/JurassicWorldEvolution2.png",
          Achievements: {
            name: "",
            description: "",
            img: "",
          },
        },
        {
          name: "Life is Stranger",
          img: "src/assets/images/games/LifeIsStrange.png",
          Achievements: {
            name: "",
            description: "",
            img: "",
          },
        },
        {
          name: "Life is Stranger Before The Storm",
          img: "src/assets/images/games/LISBeforeTheStorm.png",
          Achievements: {
            name: "",
            description: "",
            img: "",
          },
        },
        {
          name: "Raft",
          img: "src/assets/images/games/Raft.png",
          Achievements: {
            name: "",
            description: "",
            img: "",
          },
        },
        {
          name: "Resident Evil",
          img: "src/assets/images/games/RE.png",
          Achievements: {
            name: "",
            description: "",
            img: "",
          },
        },
        {
          name: "Return Of The Obra Dinn",
          img: "src/assets/images/games/ReturnOfTheObraDinn.png",
          Achievements: {
            name: "",
            description: "",
            img: "",
          },
        },
        {
          name: "Resident Evil 0",
          img: "src/assets/images/games/REZero.png",
          Achievements: {
            name: "",
            description: "",
            img: "",
          },
        },
        {
          name: "The Witcher 2",
          img: "src/assets/images/games/TheWitcher2.png",
          Achievements: {
            name: "",
            description: "",
            img: "",
          },
        },
        {
          name: "The Witcher 3",
          img: "src/assets/images/games/TheWitcher3.png",
          Achievements: {
            name: "",
            description: "",
            img: "",
          },
        },
      ],
      searchTerm: "",
      selectedGames: [],
    };
  },
  computed: {
    filteredGames() {
      return this.games.filter((game) =>
        game.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  methods: {
    addGameToTheList(game) {
      this.selectedGames.push(game);
      console.log("se hizo clic en el juego", game);
      console.log("Juegos seleccionados", this.selectedGames);
      localStorage.setItem("selectedGames", JSON.stringify(this.selectedGames));
    },
  },
  mounted() {
    const savedGames = localStorage.getItem("selectedGames");
    if (savedGames) {
      this.selectedGames = JSON.parse(savedGames);
    }
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
        <button class="game_button" @click="addGameToTheList(game)">
          <img class="game_img" :src="game.img" alt="" />
        </button>
      </ul>
    </div>
  </div>
</template>
<style scoped>
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
  margin: 20px;
  margin-left: 10px;
}

.frame {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
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
</style>
