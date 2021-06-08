<template>
  <div class="tab-bar-item" @click="shopGo">
    <div v-if="!isActive">
      <slot name="icon"></slot>
    </div>
    <div v-else>
      <slot name="icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    url: String,
    color: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive: {
      get() {
        return this.$route.path === this.url;
      },
      set() {},
    },
    activeStyle() {
      return this.isActive ? { color: this.color } : {};
    },
  },
  methods: {
    shopGo() {
      this.$router.replace(this.url);
    },
  },
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>
