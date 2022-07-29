import { createRouter, createWebHistory } from 'vue-router';
const routerHistory = createWebHistory();
import HomePage from '@/views/Home.vue';
import WeatherPage from '@/views/Weather.vue';
import ErorrPage from '@/views/Erorr.vue';
const routers = createRouter({
  history: routerHistory,
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/weather',
      component: WeatherPage,
    },
    {
      path: '/:CatchAll(.*)',
      component: ErorrPage,
    },
  ],
});

export default routers
export const routerName = routerHistory.location;