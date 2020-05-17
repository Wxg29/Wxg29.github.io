<template>
  <div class="box">
    <Head title="城市" :show="true"></Head>
    <van-notice-bar mode="closeable">当前城市的热门电影正在热映，请选择城市后移步 movie 购票</van-notice-bar>
    <van-index-bar :index-list="pylist">
      <div v-for="(py,i) in pylist" :key="i">
        <van-index-anchor :index="py" />
        <van-cell
          v-for="(city,index) in cityList.filter(item=>item.pinyin.indexOf(py.toLowerCase()) == '0')"
          :key="index"
          :title="city.name"
          @click="selectCity(city)"
        ></van-cell>
      </div>
    </van-index-bar>
  </div>
</template>


<script>
//这不是组件   这是插件---直接引入就够了
import { Toast } from "vant";

export default {
  data() {
    return {
      cityList: [],
      pylist: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        // "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        // "U",
        // "V",
        "W",
        "X",
        "Y",
        "Z"
      ]
    };
  },
  methods: {
    selectCity(city) {
      console.log(city);
      localStorage.setItem("city", JSON.stringify(city)); //localStorage要存json格式
      this.$router.push({ name: "movie" });
    }
  },
  mounted() {
    Toast.loading({
      message: "正在加载",
      forbidClick: true,
      loadingType: "spinner",
      duration: 3000
    });
    this.$axios({
      url: "/maizuo/gateway?k=2020849",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15729643184239132721923","bc":"110100"}',
        "X-Host": "mall.film-ticket.city.list"
      }
    }).then(res => {
      Toast.clear(); //清除成功就关闭轻提示
      console.log(res);
      this.cityList = res.data.data.cities;
      Toast.success("获取城市信息成功"); //轻提示 获取信息成功的文案
    });
  }
};
</script>