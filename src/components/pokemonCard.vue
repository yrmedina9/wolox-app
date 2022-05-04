<template>
  <main class="flex">
    <article class="card">
      <div class="icon" @click="searchPokemons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class=""
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div class="card-body">
        <img
          :src="pokemonData.img"
          alt="imagen de vitoko"
          class="card-body-img"
        />
        <h1 class="card-body-title">
          {{ pokemonData.name.toUpperCase() }}

          <span>{{ pokemonData.experiencia }}</span>
        </h1>
      </div>
      <div class="card-footer">
        <div class="card-footer-social">
          <h3>{{ pokemonData.ataque }} K</h3>
          <p>Ataque</p>
        </div>
        <div class="card-footer-social">
          <h3>{{ pokemonData.especial }} K</h3>
          <p>Ataque Especial</p>
        </div>
        <div class="card-footer-social">
          <h3>{{ pokemonData.defensa }}K</h3>
          <p>Defensa</p>
        </div>
      </div>
    </article>
  </main>
</template>
<script>
export default {
  name: "pokemonCard",
  props: {
    pokemonData: {
      default: {
        img: "",
        imgJuego: "",
        imgCvg: "",
        name: "",
        experiencia: "",
        hp: "",
        ataque: "",
        defensa: "",
        especial: "",
      },
    },
    searchPokemons: Function,
  },
};
</script>
<style scoped>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
.card {
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  max-width: 420px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.315);
}
.card-header {
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  max-width: 420px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.315);
  width: 100%;
  display: block;
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid #a3cc39;
}
.card-body img {
  border: 5px solid white;
  background-color: white;
  border-radius: 50%;
  width: 60%;
}
.card-title {
  margin: 0;
  margin-top: 2rem;
  color: #2aa7df;
  font-size: 1.8rem;
}
.card-title span {
  color: #3f3f3f;
  font-weight: 400;
}
.card-text {
  font-size: 1.7rem;
  color: #2aa7df;
  margin-bottom: 2rem;
}
.card-footer {
  display: flex;
  justify-content: space-evenly;
}
.card-footer-social {
  text-align: center;
}
.card-footer-social h3 {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  color: #2aa7df;
  font-size: Montserrat;
  font-weight:700
}
.card-footer-social p {
  margin-top: 0;
  margin-bottom: 2rem;
  letter-spacing: 1px;
  color: #474747;
  font-weight: 700;
  font-size: 1.2rem;
}
.icon {
  width: 50px;
  position: absolute;
  float: right;
}
</style>
