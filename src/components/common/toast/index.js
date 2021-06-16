import Toast from './Toast.vue';

const obj = {};
obj.install = function (Vue) {
  const toastConstructor = Vue.extend(Toast);
  const toast = new toastConstructor();
  toast.$mount(document.createElement('div')); // 挂载
  document.body.appendChild(toast.$el); // 必须append到真实dom上
  Vue.prototype.$toast = toast;
}

export default obj;
