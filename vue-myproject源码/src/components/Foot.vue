<template>
  <footer>
    <div v-for="(val,i) in foots" :key="i">
      <router-link :to="{name:val.name}">
        <van-tag v-if="i==2" class="hot" :color="color" round="round">6</van-tag>
        <i class="iconfont" v-html="val.icon"></i>
        <span>{{val.txt}}</span>
      </router-link>
    </div>
  </footer>
</template>

<script>
import { foots } from "@/utils";
export default {
  data() {
    return {
      foots,
      color: this.$route.name == "news" ? "#177cb0" : "#75878a",
      round: true
    };
  },
  watch: {
    $route(to) {
      console.log(to);
      to.name === "news" ? (this.color = "#177cb0") : (this.color = "#75878a");
    }
  },
  mounted() {
    console.log(this.$route);
  }
};
</script>

<style lang="scss" scoped>
footer {
  position: fixed;
  width: 100%;
  height: 45px;
  left: 0;
  bottom: 0;
  background: #fff;
  display: flex !important;
  z-index: 100;
  //   border-top: 1px solid black;
  div {
    flex: 1;
    height: 45px;
    a {
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding: 3px 0;
      text-align: center;
      font-family: "微软雅黑";
      color: #75878a;
      position: relative;
      i {
        width: 100%;
        height: 23px;
        line-height: 23px;
        font-size: 22px !important;
      }
      span {
        width: 100%;
        height: 19px;
        line-height: 19px;
        font-size: 14px;
      }
      .hot {
        position: absolute;
        top: 0;
        left: 60%;
        display: inline-block;
        width: 4px;
        height: 10px;
        font-size: 6px;
        line-height: 10px;
        // border-radius: 50%;
      }
    }
    .nav-active,
    .router-link-exact-active,
    .router-link-active {
      color: #177cb0;
      //   border-color: lightskyblue;
    }
  }
}
</style>
