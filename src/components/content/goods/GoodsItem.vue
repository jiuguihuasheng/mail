<template>
  <div class="goods" @click="goToDetail">
    <img v-lazy="getImg" :key="getImg" @load="imgLoad" alt=""/>
    <!-- <img :src="getImg" :key="getImg" alt="" @load="imgLoad"/> -->
    <div class="goods-info">
      <p>{{ goods.title }}</p>
      <span class="price">¥{{ goods.price }}</span>
      <span class="collect">{{ goods.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goods: {
      type: Object,
      default: () => {},
    },
  },
  mounted: function () {
    // console.log(this.goods);
  },
  methods: {
    goToDetail: function () {
      // 1.获取iid
      let iid = this.goods.id;

      // 2.跳转到详情页面
      // this.$router.push({ path: "/detail", query: { iid } });
      this.$router.push({ path: "/detail/" + iid });
    },
    imgLoad() {
      // 方法1 发送同一事件在离开的组件取消监听
      this.$bus.$emit('imgLoad', '来自goodsitem：图片加载完成')
      // 方法2 不同路由发送不同事件
      // if (this.$route.path.indexOf('/home')) {
      //   this.$bus.$emit('imgLoad', '来自goodsitem：图片加载完成')
      // } else if (this.$route.path.indexOf('/detail')) {
      //   this.$bus.$emit('detailImgLoad', '来自goodsitem：图片加载完成')
      // }
    }
  },
  computed: {
    getImg() {
      return this.goods.image_uri;
    },
  },
};
</script>

<style scoped>
.goods {
  padding-bottom: 40px;
  position: relative;
}
.goods img {
  width: 100%;
  border-radius: 5%;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
