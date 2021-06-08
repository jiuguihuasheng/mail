<template>
<div>
  <tab-bar>
    <tab-bar-item url="/home" color="lightgreen">
    <!-- html如果路径有别名需要加上波浪号~assets/xxx -->
      <img slot="icon" src="~assets/img/tabbar/home.svg" alt="img1">
      <img slot="icon-active" src="~assets/img/tabbar/home_active.svg" alt="active1">
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item url="/category">
      <img slot="icon" src="~assets/img/tabbar/category.svg" alt="img2">
      <img slot="icon-active" src="~assets/img/tabbar/category_active.svg" alt="active2">
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item url="/cart">
      <img slot="icon" src="~assets/img/tabbar/cart.svg" alt="img3">
      <img slot="icon-active" src="~assets/img/tabbar/cart_active.svg" alt="active3">
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item url="/profile">
      <img slot="icon" src="~assets/img/tabbar/profile.svg" alt="img4">
      <img slot="icon-active" src="~assets/img/tabbar/profile_active.svg" alt="active4">
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  },
  /**
   * 组件内的守卫
   * beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave
   */
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    // console.log('to-------', to)
    // console.log('from-------', from)
    next()
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next()
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
