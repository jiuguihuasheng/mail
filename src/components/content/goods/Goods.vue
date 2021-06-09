<template>
  <grid-view>
    <goods-item v-for="(item, index) in goodsList" :key="index" :goods="item"></goods-item>
  </grid-view>
</template>

<script>
  import GridView from 'components/common/gridView/GridView'
  import GoodsItem from './GoodsItem'

  export default {
    name: "Goods",
    components: {
      GridView,
      GoodsItem
    },
    props: {
      goodsList: {
        type: Array,
        default: () => []
      }
    },
  }
</script>

<style scoped>

</style>
