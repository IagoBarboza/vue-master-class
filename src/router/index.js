import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/categories',
    component: () => import('@/views/Categories'),
    children: [
      {
        path: '',
        name: 'CategoriesList',
        component: () => import('@/views/Categories/views/CategoriesList'),
      },
    ],
  },
  {
    path: '/forums',
    component: () => import('@/views/Forums'),
    children: [
      {
        path: ':forumId',
        name: 'ForumView',
        component: () => import('@/views/Forums/views/ForumView'),
        props: true,
      }
    ],
  },
  {
    path: '/threads',
    component: () => import('@/views/Threads'),
    children: [
      {
        path: ':threadId',
        name: 'ThreadView',
        component: () => import('@/views/Threads/views/ThreadView'),
        props: true,
      },
    ],
  },
  {
    path: '/users',
    component: () => import('@/views/Users'),
    children: [
      {
        path: 'auth',
        name: 'AuthUserView',
        component: () => import('@/views/Users/views/AuthUserView'),
      },
    ],
  },
  {
    path: '*',
    component: () => import('@/views/PageNotFound'),   
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
