import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store';

import obj from 'components/common/toast';

Vue.use(obj)

Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
