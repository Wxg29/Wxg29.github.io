<template>
  <div class="box" :class="animateClass">
    <van-sticky :offset-top="0">
      <Head title="电影"></Head>
    </van-sticky>

    <div class="mbox">
      <p class="mcity" @click="gotoCity">{{city.name}}</p>
      <!-- 电影 -->
      <Carousel id="two-banner" :swiperOptions="swiperOptions">
        <Carouselitem v-for="(value,index) in obj.banner" :key="index">
          <img class="mimg" :src="value.images.large.replace(/img7/,'img3')" alt />
        </Carouselitem>
      </Carousel>
    </div>
    <!-- 567 -->
    <Carousel id="one-banner" :swiperOptions="swiperOptions" v-if="false">
      <Carouselitem class="swiper-slide" v-for="(val,i) in imgs" :key="i">
        <img class="mimg" :src="val" alt />
      </Carouselitem>
    </Carousel>

    <div class="mmovie">
      <van-tabs v-model="active" animated ellipsis>
        <van-tab title="正在热映">
          <div class="mbein" v-for="(val,i) in startmv" :key="i" @click="gotoFilm(val)">
            <img :src="val.poster" alt />
            <div class="minfo">
              <h3>
                {{val.name}}
                <span>{{val.filmType.name}}</span>
              </h3>
              <p>
                观众评分:
                <span>{{val.grade}}分</span>
              </p>
              <div class="mactors">
                <p v-for="(actor,i) in val.actors" :key="i">{{actor.role}} : {{actor.name}}</p>
              </div>
              <p>{{val.nation}} | {{val.runtime}} 分钟</p>
            </div>
            <div class="mbuy">
              <p>购票</p>
            </div>
          </div>
          <p style="text-align: center;background:#ededed;padding:40px">-暂无更多-</p>
        </van-tab>
        <van-tab title="即将上映">
          <div class="mbein" v-for="(v,i) in startlist" :key="i" @click="gotoFilm(v)">
            <img :src="v.poster" alt />
            <div class="minfo">
              <h3>
                {{v.name}}
                <span>{{v.filmType.name}}</span>
              </h3>
              <div class="mactors">
                <p v-for="(actor,i) in v.actors" :key="i">{{actor.role}} : {{actor.name}}</p>
              </div>
              <p>类型:{{v.category}}</p>
              <p>{{v.nation}} | {{v.runtime}}</p>
            </div>
          </div>
          <p style="text-align: center;background:#ededed;padding:40px">-暂无更多-</p>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { myMixin, animate } from "@/utils";
import { mapState, mapActions } from "vuex";
export default {
  mixins: [myMixin, animate],
  data() {
    return {
      active: 0,
      startmv: {},
      startlist: {},
      mv: [],
      imgs: [
        require("@/assets/images/w1 (1).png"),
        require("@/assets/images/w1 (2).png"),
        require("@/assets/images/w1 (3).png"),
        require("@/assets/images/w1 (4).png"),
        require("@/assets/images/w1 (5).png"),
        require("@/assets/images/w1 (6).png"),
        require("@/assets/images/w1 (7).png")
      ],
      swiperOptions: {
        loop: true,
        autoplay: true,
        observer: true,

        pagination: {
          // 分页器
          el: ".swiper-pagination"
        },
        autoplay: {
          disableOnInteraction: false
        }
      }
    };
  },
  computed: {
    ...mapState(["obj"])
  },
  methods: {
    gotoCity() {
      this.$router.push({ name: "city" });
    },
    ...mapActions([
      "getBanner" // this.getBanner  = this.$store.dispatch('getBanner')
    ]),
    gotoFilm(v) {
      this.$router.push({
        name: "films",
        params: {
          filmId: v.filmId
        },
        query: {
          filmName: v.name
        }
      });
    }
  },
  created() {
    this.getBanner();
    // this.$axios.get("/vue/movie?limit=6").then(res => {
    //   console.log(res);
    //   this.mv = res.data.result; // 修改了这个数据  所以一定会进入updated生命周期
    // });
  },
  mounted() {
    //mixin公有化了
    //   //判断 --- 如果选择了城市就获取出来显示   如果没有就自动跳转去选择城市
    //   if (localStorage.city) {
    //     var city = JSON.parse(localStorage.city); //从 localStorage 获取城市  转对象
    //     console.log(city);
    //     this.city = city;
    //   } else {
    //     this.$router.push({ name: "city" });
    //   },
    this.$axios
      .get("/maizuo/gateway?pageNum=1&pageSize=10&type=1&k=2722275", {
        params: {
          cityId: this.city.cityId
        },
        headers: {
          "X-Host": "mall.film-ticket.film.list"
        }
      })
      .then(res => {
        this.startmv = res.data.data.films;
      });

    this.$axios
      .get("/maizuo/gateway?pageNum=1&pageSize=10&type=2&k=2861113", {
        params: {
          cityId: this.city.cityId
        },
        headers: {
          "X-Host": "mall.film-ticket.film.list"
        }
      })
      .then(data => {
        this.startlist = data.data.data.films;
      });
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: hidden;
  .mimg {
    width: 100%;
    height: 200px;
  }
  .mbox {
    position: relative;
  }
  .mcity {
    position: absolute;
    top: 20px;
    left: 20px;
    border: cornflowerblue 1px solid;
    color: cadetblue;
    width: 48px;
    height: 20px;
    border-radius: 10px;
    z-index: 10;
    text-align: center;
    line-height: 20px;
    padding: 0 5px;
  }
  .mmovie {
    width: 100%;
    text-align: left;
    padding-bottom: 80px;
  }
  .mbein {
    width: 100%;
    padding: 20px 10px;
    display: flex;
    img {
      width: 20%;
      height: 100px;
    }
    .minfo {
      padding: 10px;
      width: 50%;
      h3 {
        font-size: 14px;
        span {
          font-size: 12px;
          color: gray;
          background: bisque;
        }
      }
      p {
        padding: 3px 0;
      }
      p span {
        font-size: 12px;
        color: orange;
      }
      .mactors {
        display: flex;
        // width: 100%;
        p {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
    .mbuy {
      p {
        border: 1px solid #ff5f16;
        color: #ff5f16;
        padding: 3px 5px;
        margin: 20px 0 0 20px;
      }
    }
  }
}
</style>