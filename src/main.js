import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/global.css';
import AppDate from '@/components/AppDate';
import store from '@/store';

Vue.config.productionTip = false;

Vue.component('AppDate', AppDate);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
