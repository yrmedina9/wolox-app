<template>
  <div class="main">
    <div class="title" v-html="$t('thanks')"></div>
    <div class="description" v-t="'invite'"></div>
    <a
      href="https://www.wolox.com.ar"
      v-t="'buttons.learnMore'"
      target="_blank"
      class="btn btn-solid"
    ></a>
    <div class="footer">
      <img src="../assets/icons/Ic_Wolox_Footer.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
.main {
  font-family: Montserrat;
  margin: 0 auto;
  margin-top: 30px;
  justify-content: center;
  text-align: center;
  background-image: url('../assets/Backgrounds/Bg_Footer.png');
}
.title {
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
}

.description {
  padding: 10px;
}
.footer img {
  margin-top: 60px;
  width: 5%;
}
</style>
