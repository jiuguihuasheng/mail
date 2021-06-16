/**
 * 插件形式的封装
 * this.$toast.show()
 */
import Toast from './Toast.vue';

const obj = {};
obj.install = function (Vue) {
  const toastConstructor = Vue.extend(Toast); // 组件构造器
  const toast = new toastConstructor(); // 实例组件
  toast.$mount(document.createElement('div')); // 挂载
  document.body.appendChild(toast.$el); // 必须append到真实dom上
  Vue.prototype.$toast = toast;
}

export default obj;
