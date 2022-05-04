<template>
  <div><Home /><Benefits /></div>
</template>
<script>
import Home from "@/components/Home.vue";
import Benefits from "@/components/Benefits.vue";
export default {
  name: "homePage",
  components: {
    Home,
    Benefits,
  },
};
</script>
