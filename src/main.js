// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Scrollactive from 'vue-scrollactive'
import VueHead from 'vue-head'
var VueScrollTo = require('vue-scrollto');
// import VueAgile from 'vue-agile'
 
Vue.config.productionTip = false

Vue.use(Scrollactive, {
  duration: 100,
});
Vue.use(VueHead);
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: -96,
  cancelable: true,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
// Vue.use(VueAgile)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
