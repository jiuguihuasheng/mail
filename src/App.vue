<template>
  <div id="app">
    <router-view/>
    <min-tab-bar></min-tab-bar>
  </div>
</template>

<script>
 import MinTabBar from 'components/content/mainTabbar/MainTabBar'

export default {
  components: {
    MinTabBar
  }
}
</script>

<style>
@import 'assets/css/base.css';
</style>
