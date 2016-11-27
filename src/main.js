import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routesConfig from './routes';


const router = new VueRouter({
  mode: 'history',
  routes: routesConfig.config,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
