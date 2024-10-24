import Vue from 'vue'
import App from './App.vue'

import router from "./router";  //路由

//样式引入
import ElementUI from 'element-ui';
Vue.use(ElementUI);

import 'element-ui/lib/theme-chalk/index.css';


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');




