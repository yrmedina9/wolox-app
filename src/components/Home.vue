<template>
  <section id="Home">
    <section class="flex-section-1">
      <div class="items">
        <div class="items-text" v-html="$t('welcome')" />
      </div>
      <div class="items">
        <img src="../assets/Img_Hero/Ic_ilustra_Hero.png" alt="" srcset="" />
      </div>
    </section>
    <section class="flex-section-2">
      <div class="items-info">
        <div class="items">
          <div class="items-text" style="font-size: 30px; text-align: center">
            <span style="font-weight: 700; color: #a3cc39">350 + </span>
            <span style="font-weight: 700; color: #2aa7df">Woloxers </span>
            <div>
              <div>
                <img src="../assets/img/logo_twitter.png" alt="" />
              </div>
              <a
                href="https://twitter.com/wolox?lang=en"
                target="_blank"
                class="btn btn-primary"
                v-t="'buttons.followUs'"
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div class="items">
        <div class="items-text" v-html="$t('working')" />
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Home'
};
</script>
<style scoped>
.flex-section-1 {
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: center;
  align-content: center;
  background-image: url('../assets/Backgrounds/Bg_Header.png');
  font-family: Montserrat;
  margin: 0 auto;
  font-size: 25px;
}
.flex-section-2 {
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: center;
  align-content: center;
  font-family: Montserrat;
  margin: 0 auto;
  font-size: 25px;
  background: #f2f5fa;
}
.items {
  width: 80%;
  justify-content: center;
  align-content: center;
  display: flex;
  align-items: center;
}
.items-info {
  width: 100%;
  display: flex;
  align-items: center;
  height: 300px;
  background-image: url('../assets/img/img_woloxer.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.items img {
  width: 80%;
}
.items-text {
  width: 80%;
  margin: auto;
  align-content: center;
}
.items-text img {
  width: 10%;
}

@media screen and (max-width: 720px) {
  .flex-section-1 {
    flex-direction: column;
    text-align: center;
    display: flex;
  }
  .flex-section-2 {
    flex-direction: column;
    text-align: center;
    display: flex;
  }
  .items {
    width: 100%;
    padding: 10px;
  }
}
</style>
