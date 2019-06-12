//导入组件
import Vue from 'vue'
import App from './App.vue'
//导入插件
import './plugins/iview.js'
import VueRouter from 'vue-router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

//导入配置文件
import router from './router'

import './plugins/element.js'
Vue.use(VueRouter)
Vue.use(iView);

Vue.config.productionTip = false;



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
