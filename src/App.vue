<template>
  <div>
    <Navbar />
    <div class="container"><router-view /></div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "appPage",
  components: {
    Navbar,
    Footer,
  },

};
</script>
