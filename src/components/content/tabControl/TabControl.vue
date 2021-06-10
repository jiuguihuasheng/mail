<template>
  <div class="tab-control">
    <div class="tab-control-item"
      v-for="(item,index) in tabs"
      :key="index"
      :class="{'active': index === currentIndex}"
      @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    tabClick(index) {
      console.log(index)
      this.currentIndex = index;
      this.$emit('typeChange', index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  text-align: center;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 4px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-high-text);
}
</style>
