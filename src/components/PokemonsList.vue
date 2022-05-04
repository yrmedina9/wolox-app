<template>
  <div>
    <main v-if="!preloader">
      <div class="elements">
        <div class="elements-content">
          <select v-model="numPokemons">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>

          <div class="search">
            <input type="" v-model="search" />
            <button @click="getSearch()" class="btn-search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                class="icon"
                style="width: 40px: "
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <PokemonCard
        v-if="pokemonViev"
        :searchPokemons="searchPokemons"
        :pokemonData="pokemonData"
      ></PokemonCard>

      <div class="cards" v-if="!pokemonViev">
        <div
          class="cards__item"
          v-for="(pokemon, index) in pokemons.results"
          :key="index"
          @click="getSearch(pokemon.data.id)"
        >
          <div class="card">
            <div class="card__image">
              <img :src="pokemon.img" alt="" />
            </div>
            <div class="card__content">
              <div class="card__title">{{ pokemon.name }}</div>
              <div
                class="card__text"
                v-for="abilities in pokemon.data.abilities"
                :key="abilities.name"
              >
                🏅{{ abilities.ability.name }}
              </div>
            </div>
          </div>
        </div>

        <div class="elements-content">
          <div @click="pokemonsPaginate(pokemons.previous)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style="width: 40px"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              />
            </svg>
          </div>
          <div class="text">Total de registros {{ pokemons.count }}</div>
          <div @click="pokemonsPaginate(pokemons.next)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style="width: 40px"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </main>
    <Preloader v-if="preloader" />
  </div>
</template>
<script>
import { getPokemons, getPokemonsPaginate } from "../api/api_Pokemons";
import { ref, watchEffect } from "vue";
import Preloader from "@/components/Preloader.vue";
import PokemonCard from "@/components/pokemonCard.vue";
export default {
  name: "PokemonsList",
  components: {
    Preloader,
    PokemonCard,
  },
  setup() {
    const preloader = ref(true);
    const pokemons = ref([{ sprites: { front_default: "" } }]);
    const numPokemons = ref("20");
    const searchPokemons = async () => {
      pokemonViev.value = false;
      pokemons.value = await getPokemons(numPokemons.value);
      preloader.value = false;
    };
    const pokemonsPaginate = async (url) => {
      preloader.value = true;
      pokemons.value = await getPokemonsPaginate(url);
      preloader.value = false;
    };
    const search = ref("");
    const pokemonData = ref({});
    const getSearch = async (id) => {
      if (id) {
        search.value = id;
      }
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${search.value}`
      );
      const data = await res.json();
      if (data) {
        pokemonViev.value = true;
        pokemonData.value = {
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
          imgJuego: data.sprites.front_default,
          imgCvg: data.sprites.other.dream_world.front_default,
          name: data.name,
          experiencia: data.base_experience,
          hp: data.stats[0].base_stat,
          ataque: data.stats[1].base_stat,
          defensa: data.stats[2].base_stat,
          especial: data.stats[3].base_stat,
        };
        console.log(pokemonData.value);
      } else {
        pokemonViev.value = false;
        await searchPokemons(numPokemons.value);
      }
    };
    const pokemonViev = ref(false);
    const title = "Bienvenido  a la api de pokemon";
    watchEffect(async () => {
      numPokemons.value;
      await searchPokemons(numPokemons.value);
    });

    return {
      searchPokemons,
      pokemonViev,
      pokemons,
      numPokemons,
      preloader,
      pokemonsPaginate,
      search,
      getSearch,
      pokemonData,
      title,
    };
  },
};
</script>
<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  cursor: pointer;
}
main {
  background-image: url("../assets/Backgrounds/Bg_Header@2x.png");
  padding-bottom: 40px;
}
img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
}
.cards__item {
  display: flex;
  padding: 1rem;
}
.card {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  overflow: hidden;
  justify-content: center;
  border-left: solid #212121;
  width: 250px;
}

.card__content {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
}
.card__image {
  justify-content: center;
  text-align: center;
}

.card__title {
  color: #2aa7df;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 2px;
  font-family: Montserrat;
  font-weight: 700;
  text-transform: uppercase;
}
.card__text {
  font-size: 0.875rem;
  color: #a3cc39;
  font-family: Montserrat;
  font-weight: 400;
}
select {
  padding: 6px;
  color: #2aa7df;
  font-size: 16px;
  background: transparent;
  -webkit-appearance: none;
}
.text {
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 400;
}
.elements {
  justify-content: center;
}
.elements-content {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-between;
  width: 80%;
  margin-top: 40px;
}
.search {
  display: flex;
}
.search input {
  width: 300px;
  font-size: 20px;
}
.btn-search {
  background: #a3cc39;
  color: #2aa7df;
  border: 2px solid #a3cc39;
  padding: 2px;
  border-radius: 2px;
  cursor: pointer;
  width: 40px;
  margin-left: 10px;
}
.btn-search:hover {
  background: rgb(255, 255, 255);
  border: 2px solid #2aa7df;
}
</style>
