import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import i18n from './i18n';

Vue.config.productionTip = false;

Vue.mixin({
  data() {
    return {
      get apiEndpoint() {
        return 'https://api2.mezinamiridici.cz/v1';
      },
    };
  },
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
