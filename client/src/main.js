import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
Vue.use(ElementUI);
import './assets/css/base.css'
import router from './routers/index.js'
import $axios from './config/axios.js'
Vue.prototype.axios=$axios
Vue.config.productionTip = false

import { ElementTiptapPlugin } from 'element-tiptap';
import 'element-tiptap/lib/index.css';
Vue.use(ElementTiptapPlugin, {
  lang: 'zh',
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
