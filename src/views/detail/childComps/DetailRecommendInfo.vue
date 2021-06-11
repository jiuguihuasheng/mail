<template>
  <div class="recommend-info">
    <div class="info-header">热门推荐</div>
    <grid-view>
      <goods-item
        v-for="(item, index) in recommendList"
        :key="index"
        :goods="item"
      ></goods-item>
    </grid-view>
  </div>
</template>

<script>
import GridView from "components/common/gridView/GridView";
import GoodsItem from "components/content/goods/GoodsItem";

export default {
  name: "DetailRecommendInfo",
  components: {
    GridView,
    GoodsItem,
  },
  props: {
    recommendList: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.recommend-info {
  padding: 5px;
}

.info-header {
  line-height: 40px;
  padding-left: 8px;
  font-size: 15px;
  color: #333;
}
</style>
