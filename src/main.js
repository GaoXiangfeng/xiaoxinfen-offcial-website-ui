// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from "vue-router"
import '../src/styles/basic.css'
import $ from 'jquery'
window.$ = $
import Vant from 'vant';
import 'vant/lib/index.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(Vant);
Vue.use(iView);

Vue.config.productionTip = false

Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
