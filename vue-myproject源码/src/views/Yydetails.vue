<template>
  <div class="box" :class="animateClass">
    <van-sticky :offset-top="0">
      <Head :title="detail.name" :show="true"></Head>
    </van-sticky>

    <div class="y-detail">
      <h1>{{detail.name}}</h1>
      <div class="y-tag">
        <!-- 点击弹出 -->
        <p @click="showPopup" v-for="(val,i) in detail.services" :key="i">{{val.name}}</p>
      </div>
      <!-- 弹出层的内容 -->
      <van-popup v-model="show">
        <div class="y-popup" v-for="(val,i) in detail.services" :key="i">
          <p>{{val.name}}：</p>
          <span>{{val.description}}</span>
        </div>
      </van-popup>

      <!-- 地址 -->
      <div class="y-address">
        <p>
          <van-icon name="location-o" size="28" />
          {{detail.address}}
        </p>
        <van-icon class="y-icon" @click="call(detail.phone)" name="phone-o" size="38" />
      </div>

      <!-- 轮播 -->
      <div class="swipe">
        <Carousel id="b3" :swiperOptions="options">
          <Carouselitem v-for="(v,i) in films" :key="i">
            <img :src="v.poster" alt />
          </Carouselitem>
        </Carousel>
      </div>

      <div
        v-show="sactive == index"
        @click="gotoFilms(item)"
        class="y-item"
        v-for="(item,index) in films"
        :key="index"
      >
        <p>
          {{item.name}}
          <span>{{item.grade}}</span>
        </p>
        <p>{{item.category}} | {{item.runtime + '分钟'}} | {{item.director}}</p>
      </div>

      <div class="y-tab" v-if="films.ticketTypes == null">
        <van-tabs v-model="active">
          <van-tab title="正在热映">
            <van-empty description="暂无场次" />
          </van-tab>
          <van-tab title="明日上映">
            <van-empty description="暂无场次" />
          </van-tab>
          <van-tab title="即将上映">
            <van-empty description="暂无场次" />
          </van-tab>
        </van-tabs>
      </div>
      <div v-else>
        <van-tabs v-model="active">
          <van-tab title="正在热映"></van-tab>
          <van-tab title="明日上映"></van-tab>
          <van-tab title="即将上映"></van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { myMixin, animate } from "@/utils";
export default {
  mixins: [myMixin, animate],
  data() {
    return {
      detail: {},
      show: false,
      options: {},
      films: [],
      active: 0,
      sactive: 0
    };
  },
  mounted() {
    console.log(this.$route); //地址栏带过来的参数用params取
    this.$axios
      .get("/maizuo/gateway/?k=417263", {
        params: {
          cinemaId: this.$route.params.cinemaId
        },
        headers: {
          "X-Host": "mall.film-ticket.cinema.info"
        }
      })
      .then(res => {
        this.detail = res.data.data.cinema;
      });

    //获取的电影详情推荐的电影图片接口
    this.$axios
      .get("/maizuo/gateway?k=9682114", {
        params: {
          cinemaId: this.$route.params.cinemaId
          // cinemaId: 4876
        },
        headers: {
          "X-Host": "mall.film-ticket.film.cinema-show-film"
        }
      })
      .then(res => {
        var that = this;
        this.films = res.data.data.films;
        this.options = {
          effect: "coverflow",
          slidesPerView: 3,
          centeredSlides: true,
          coverflowEffect: {
            rotate: 30,
            stretch: 10,
            depth: 30,
            modifier: 2,
            slideShadows: false
          },
          on: {
            slideChange: function() {
              that.sactive = this.activeIndex;
            }
          }
        };
      });
  },
  methods: {
    call(phone) {
      Dialog({ message: "联系电话" + " " + phone });
    },
    showPopup() {
      this.show = !this.show;
    },
    gotoFilms(item) {
      this.$router.push({
        name: "films",
        params: {
          filmId: item.filmId
        },
        query: {
          filmName: item.name
        }
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background: #fff;
  .y-detail {
    width: 100%;
    height: 100%;
    background: #fff;
    h1 {
      font-size: 20px;
      padding: 30px 0 0 0;
    }
    .y-tag {
      width: 100%;
      padding: 10px 0 30px 0;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      p {
        padding: 1px 3px;
        margin: 0 5px;
        color: #ff5f16;
        font-size: 12px;
        border: lightsalmon 1px solid;
      }
    }
    .y-address {
      display: flex;
      justify-content: space-around;
      padding: 0 0 10px 0;
      border-bottom: 1px solid lightgray;
    }
    .swipe {
      width: 100%;
      overflow: hidden;
      padding: 20px 0;
      background: whitesmoke;
    }
    .y-item {
      padding: 10px 0;
      border-bottom: 1px solid lightgray;
    }
  }
}
</style>