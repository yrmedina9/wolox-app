<template>
  <section id="Benefits" class="main">
    <div class="title" v-html="$t('benefits')" />
    <div class="content">
      <div class="card" v-for="(item, index) in benefits" :key="index">
        <img
          :src="require(`../assets/icons/${item.icon}`)"
          alt="Avatar"
          style="width: 40px"
        />
        <div class="content-description">
          <p>{{ $t(item.title) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { ref } from '@vue/reactivity';
export default {
  name: 'Benefits',
  setup() {
    const benefits = ref([
      {
        icon: 'Ic_Hour.svg',
        title: 'elementsBenefits.Ic_Hour'
      },
      {
        icon: 'Ic_HomeOffice.svg',
        title: 'elementsBenefits.Ic_HomeOffice'
      },
      {
        icon: 'Ic_Workshops.svg',
        title: 'elementsBenefits.Ic_Workshops'
      },
      {
        icon: 'Ic_DrinkSnacks.svg',
        title: 'elementsBenefits.Ic_DrinkSnacks'
      },
      {
        icon: 'Ic_laptop.svg',
        title: 'elementsBenefits.Ic_laptop'
      },
      {
        icon: 'Ic_brain.svg',
        title: 'elementsBenefits.Ic_brain'
      }
    ]);
    return { benefits };
  }
};
</script>
<style scoped>
.main {
  font-family: Montserrat;
  margin: 0 auto;
  margin-top: 30px;
}
.title {
  font-size: 16px;
  font-weight: 500;
  text-align: center;
}
.content {
  font-family: Montserrat;
  margin: 0 auto;
  margin-top: 30px;
  width: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.card {
  align-content: center;
  text-align: center;
  width: 150px;
}
</style>
