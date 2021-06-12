<template>
  <div>
    <swiper class="detail-swiper" v-if="images.length">
      <swiper-item class="item" v-for="(item, index) in images" :key="index">
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  inject: ['p1', 'p2'],
  created() {
    console.log(this.p1);
    console.log(this.p2());
  },
  props: {
    images: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.item {
  text-align: center;
  height: 190px;
}
</style>
