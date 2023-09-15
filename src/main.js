import Vue,{createApp} from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
//라우터 선언
import router from './router';
//vuex
import store from '@/store/store.js';
//bootstrap with vue
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

//vuex
const app=createApp(App);
app.use(router);
app.use(store);
window.app=app.mount();
