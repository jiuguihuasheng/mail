# 类之间共通代码可采取继承extend
# 组件是Vue实例，组件间共通代码可使用混入mixin
var mixin = {
  created: function () { console.log(1) }
}
var vm = new Vue({
  created: function () { console.log(2) },
  mixins: [mixin]
})
# 相当于vm会把created声明周期merge到一起，因此会把1和2都打印出来
// => 1
// => 2