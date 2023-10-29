// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Contect from '../views/ContectView.vue';
import Game from '../views/GameView.vue';
import Group from '../views/GroupView.vue';
import Popularize_science from '../views/Popularize_scienceView.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/contect', component: Contect },
  { path: '/game', component: Game },
  { path: '/group', component: Group },
  { path: '/ps', component: Popularize_science }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
