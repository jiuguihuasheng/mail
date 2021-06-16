<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center">标题</slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  text-align: center;
  height: 46px;
  line-height: 46px;
}
.left,.right {
  flex: 0.3;
}
.center {
  flex: 1;
}
</style>
