import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';

const routes = [
  {
    path: '/:tag?',
    name: 'Home',
    component: Home
  },
  {
    path: '/Pokemons',
    name: 'PokemosApi',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Pokemons.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
router.beforeEach(() => {
  window.scrollTo(0, 0);
});
export default router;
