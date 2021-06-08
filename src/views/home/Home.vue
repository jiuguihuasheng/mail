<template>
  <div class="home">
  <nav-bar class="nav-bar">
    <div slot="center">购物街</div>
  </nav-bar>
  <swiper>
    <swiper-item></swiper-item>
  </swiper>
    <h2>首页</h2>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { getHomeMulData } from 'network/home'
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
  name: 'Home',
  data () {
    return {
      banners: []
    }
  },
  components: {
    NavBar,
    Swiper,
    SwiperItem
  },
  created() {
    getHomeMulData().then(data => {
      this.banners = data;
    }).catch(err => { console.log(err) });
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  box-shadow: 0 1px 1px rgba(100,100,100, 0.1);
}
</style>
