import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.component('Header', Header)
Vue.component('Footer', Footer)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
