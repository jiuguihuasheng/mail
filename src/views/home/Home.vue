<template>
  <div class="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>

    <tab-control
      ref="tabControlFixed"
      v-show="isTabFixed"
      class="tab-control"
      @typeChange="typeChange"
      :tabs="tabs"
    ></tab-control>

    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      @pullingUp="loadMore"
      :data="showGoods"
      :pull-up-load="true"
      :probe-type="3"
    >
      <swiper ref="swiper" v-if="banners.length">
        <swiper-item v-for="(item, index) in banners" :key="item.id">
          <a :href="item.link">
            <img :src="item.image_uri" :alt="index" />
          </a>
        </swiper-item>
      </swiper>

      <feature :features="banners"></feature>

      <recommend></recommend>

      <tab-control
        ref="tabControl"
        :tabs="tabs"
        @typeChange="typeChange"
      ></tab-control>

      <goods :goodsList="showGoods"></goods>
    </scroll>

    <back-top @click.native="backTop" class="back-top" v-show="showBackTop">
      <img src="~assets/img/common/top.png" alt="" />
    </back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { Swiper, SwiperItem } from "components/common/swiper";
import Scroll from "components/common/scroll/Scroll";
import Feature from "./components/Feature.vue";
import Recommend from "./components/Recommend.vue";
import TabControl from "components/content/tabControl/TabControl";
import Goods from "components/content/goods/Goods";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMulData, getGoods } from "network/home";
import { NEW, POP, SELL, BACKTOP_DISTANCE } from "@/common/const";
import { debounce } from "@/common/util";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      tabs: ["流行", "新款", "精选"],
      type: POP,
      isTabFixed: false,
      tabOffsetTop: 0,
      showBackTop: false,
      saveY: 0,
      imgListenner: null
    };
  },
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    Scroll,
    Feature,
    Recommend,
    TabControl,
    Goods,
    BackTop,
  },
  created() {
    this.getHomeMulData();
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100);
    this.imgListenner = () => {
      refresh();
    }
    this.$bus.$on('imgLoad', this.imgListenner)
  },
  activated() {
    console.log(this.saveY)
    this.$refs.scroll.scrollTo(0, this.saveY, -10);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
    console.log(this.saveY)

    // 取消监听图片加载事件
    this.$bus.$off('imgLoad', this.imgListenner)
  },
  computed: {
    showGoods() {
      return this.goods[this.type].list;
    },
  },
  methods: {
    contentScroll(position) {
      // 1.决定tabFixed是否显示
      this.isTabFixed = position.y < -this.tabOffsetTop;

      // 2.决定backTop是否显示
      this.showBackTop = position.y < -BACKTOP_DISTANCE;
    },
    loadMore() {
      console.log("下拉获取更多");
      this.getGoods(this.type);
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    getHomeMulData() {
      getHomeMulData()
        .then((res) => {
          this.banners = res.data.items;
          // 下次更新DOM时,获取新的tabOffsetTop值
          this.$nextTick(() => {
            this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
            console.log(this.tabOffsetTop)
          })
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getGoods(type) {
      getGoods({
        type: type,
        page: this.goods[type].page + 1,
      })
        .then((res) => {
          this.goods[type].page += 1;
          this.goods[type].list.push(...res.data.items);
          this.$refs.scroll.finishPullUp()
        })
        .catch((err) => {
          console.log(err);
        });
    },
    typeChange(index) {
      switch (index) {
        case 0:
          this.type = POP;
          break;
        case 1:
          this.type = NEW;
          break;
        case 2:
          this.type = SELL;
          break;
      }
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControlFixed.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.home {
  /* padding-top: 44px; */
  /* vh: viewport height 视口高度 */
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.tab-control {
  position: relative;
  z-index: 4;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 46px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.back-top {
  position: fixed;
  right: 10px;
  bottom: 60px;
}
</style>
