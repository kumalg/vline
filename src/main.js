import Vue from 'vue'
import App from './App'
import Scrollactive from 'vue-scrollactive'
import VueScrollTo from 'vue-scrollto'
 
Vue.config.productionTip = false

Vue.use(Scrollactive, {
  duration: 100,
  modifyUrl: true
});
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

new Vue({
  render: h => h(App),
}).$mount('#app')
