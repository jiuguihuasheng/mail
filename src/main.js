import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import FastClick from 'fastclick'
import Toast from 'components/common/toast'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();

Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require('assets/img/common/loading.gif')
})

Vue.use(Toast);

// 解决移动端300ms延迟
FastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
