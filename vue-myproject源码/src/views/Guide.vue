<template>
  <div class="box">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(val,i) in imgs" :key="i">
        <img @click="gotoMain(i)" class="guide-img" :src="val" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import img1 from "@//assets/images/slide1.png";
export default {
  data() {
    return {
      //引入本地的静态文件必须模块化
      imgs: [
        img1,
        require("@/assets/images/slide2.png"),
        require("@/assets/images/slide3.png"),
        require("@/assets/images/slide4.png")
      ]
    };
  },
  methods: {
    gotoMain(i) {
      //如果图片是最后一张就点击跳转movie
      if (i === this.imgs.length - 1) {
        this.$router.push({ name: "movie" });
      }
    }
  },
  mounted() {
    //欢迎引导页  访问次数超过三次就自动过 guide
    //通过 本地存储判断
    // if (localStorage.visitCount) {
    //   localStorage.visitCount++;
    //   if (localStorage.visitCount > 3) {
    //     this.$router.push({ name: "movie" });
    //   }
    // } else {
    //   localStorage.visitCount = 1;
    // }
  }
};
</script>

<style lang="scss" scoped>
.my-swipe,
.guide-img {
  width: 100%;
  height: 100%;
}
</style>