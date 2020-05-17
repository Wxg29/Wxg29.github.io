<template>
  <div class="box" :class="animateClass">
    <van-sticky :offset-top="0">
      <Head title="影院"></Head>
    </van-sticky>

    <div class="cinema-list">
      <router-link
        :to="{name:'yydetails',params:{cinemaId:cinema.cinemaId}}"
        class="cinema-item"
        v-for="(cinema,index) in cinemaList"
        :key="index"
      >
        <div class="cinema-left">
          <h6>{{cinema.name}}</h6>
          <p>{{cinema.address}}</p>
        </div>
        <div class="cinema-right">
          <h6>{{cinema.lowPrice / 100 | price}}</h6>
          <p>距离未知</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { myMixin, animate } from "@/utils";

export default {
  mixins: [myMixin, animate],
  data() {
    return {
      cinemaList: []
    };
  },
  mounted() {
    this.$axios
      .get("/maizuo/gateway?ticketFlag=1&k=635051", {
        params: {
          cityId: this.city.cityId //混入的
        },
        headers: {
          "X-Host": "mall.film-ticket.cinema.list" // 根据请求头返回数据
        }
      })
      .then(res => {
        this.cinemaList = res.data.data.cinemas;
      });
  }
};
</script>
<style lang="scss" scoped>
.cinema-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  .cinema-item {
    display: flex;
    width: 100%;
    text-align: left;
    padding: 10px 5px;
    border-bottom: 1px solid lightgrey;
    box-sizing: border-box;
    .cinema-left {
      width: 70%;
      padding: 0 5px;
      h6 {
        color: #191a1b;
        font-size: 15px;
        padding: 5px 0;
      }
      p {
        max-width: 90%;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #797d82;
      }
    }
    .cinema-right {
      flex: 1;
      display: flex;
      flex-direction: column;
      text-align: right;
      padding: 0 5px;
      h6 {
        color: #ff5f16;
        font-size: 15px;
        padding: 5px 0;
      }
      p {
        color: #797d82;
      }
    }
  }
}
</style>