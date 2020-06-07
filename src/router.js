import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  // Сохраняет позицию при переходе от страницы к стрнице, если на странице нету сохранненой позиции то прокручивает к самому верху
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'about-page',
      component: () => import('@/views/AboutPage.vue')
    }
  ]
});

export default router;
