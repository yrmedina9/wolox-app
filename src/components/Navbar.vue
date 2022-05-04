<template>
  <nav>
    <input id="nav-toggle" type="checkbox" />
    <div class="logo">
      <img src="../assets/icons/logo_full_color.svg" alt="" srcset="" />
    </div>
    <ul class="links">
      <li><a href="/#Home" v-t="'header.home'"></a></li>
      <li><a href="/#Benefits" v-t="'header.benefits'"></a></li>
      <li><router-link to="/pokemons">Pokémons</router-link></li>
      <router-link to="/login" class="btn">Login</router-link>
      <div>
        <select v-model="$i18n.locale">
          <option v-for="(lang, i) in langs" :key="i" :value="lang.value">
            {{ lang.text }}
          </option>
        </select>
      </div>
    </ul>
    <label for="nav-toggle" class="icon-burger">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </label>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  },

  setup() {
    const langs = [
      { value: 'en', text: '🇺🇸 English' },
      { value: 'es', text: '🇨🇴 Spanish' }
    ];
    return { langs };
  }
};
</script>
<style>
nav {
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  top: 0;
  padding: 0 5%;
  height: 100px;
  background-color: rgba(209, 209, 209, 0.147);
  background-image: url('../assets/Backgrounds/Bg_Header.png');
  font-weight: 700;
  font-family: Montserrat;
}

nav .logo {
  float: left;
  height: 100%;
  display: flex;
  align-items: center;
  color: rgb(198, 17, 17);
  width: 15%;
}
nav .logo img {
  position: relative;
  animation-name: logo-animate;
  animation-duration: 6s;
  animation-delay: -3s;
  width: 100%;
}
nav .links {
  float: right;
  margin: 0;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
nav .links li {
  list-style: none;
}
nav .links a {
  display: block;
  padding: 1em;
  font-size: 16px;
  font-weight: bold;
  color: rgb(48, 47, 47);
  text-decoration: none;
}
#nav-toggle {
  position: absolute;
  top: -100px;
}
nav .icon-burger {
  display: none;
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
}
nav .icon-burger .line {
  width: 30px;
  height: 5px;
  background-color: #2aa7df;
  margin: 5px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
}
@media screen and (max-width: 720px) {
  nav .logo {
    float: none;
    width: auto;
    justify-content: center;
  }
  nav .logo img {
    float: none;
    width: auto;
    justify-content: center;
    width: 40%;
  }
  nav .links {
    float: none;
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 100px;
    bottom: 100%;
    width: auto;
    height: auto;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: rgba(195, 194, 194, 0.762);
    overflow: hidden;
    box-sizing: border-box;
    transition: all 0.5s ease-in-out;
  }
  nav .links a {
    font-size: 20px;
  }
  nav :checked ~ .links {
    bottom: 0;
  }
  nav .icon-burger {
    display: block;
  }
  nav :checked ~ .icon-burger .line:nth-child(1) {
    transform: translateY(10px) rotate(225deg);
  }
  nav :checked ~ .icon-burger .line:nth-child(3) {
    transform: translateY(-10px) rotate(-225deg);
  }
  nav :checked ~ .icon-burger .line:nth-child(2) {
    opacity: 0;
  }
}
@keyframes logo-animate {
  0% {
    left: 0px;
    top: 0px;
    width: 1000px;
  }
  25% {
    left: 600px;
    top: 0px;

    width: 600px;
  }
  50% {
    left: 600px;
    top: 200px;
    width: 300px;
  }
  75% {
    left: 0px;
    top: 200px;
    width: 200px;
  }
  100% {
    left: 0px;
    top: 0px;
    width: 160px;
  }
}
select {
  margin: 9px;
  padding: 6px;
  color: #a3cc39;
  font-size: 16px;
}
</style>
