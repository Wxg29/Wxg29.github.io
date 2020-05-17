<template>
  <div class="box" :class="animateClass">
    <van-sticky :offset-top="0">
      <Head :title="$route.query.filmName" :show="true"></Head>
    </van-sticky>

    <div class="banner">
      <img :src="film.poster" alt />
    </div>

    <div class="detail">
      <div class="d-title">
        <h3>{{film.name}}</h3>
        <p>{{film.grade}}分</p>
      </div>
      <div class="d-info">
        <p>{{film.category}}</p>
        <p>{{film.nation}} | {{film.runtime}}分钟</p>
        <p class="info-three">{{film.synopsis}}</p>
      </div>
    </div>

    <h3>演职人员</h3>
    <div class="d-actors">
      <div class="d-actors-pic" v-for="(val,i) in film.actors" :key="i">
        <img :src="val.avatarAddress" alt />
        <p>{{val.name}}</p>
        <p>{{val.role}}</p>
      </div>
    </div>

    <h3>剧照</h3>
    <div class="d-photos">
      <div v-for="(v,i) in film.photos" :key="i">
        <img class="d-photos-pic" :src="v" alt />
      </div>
    </div>
  </div>
</template>





<script>
import { myMixin, animate } from "@/utils";
export default {
  mixins: [myMixin, animate],
  data() {
    return {
      film: {}
    };
  },
  mounted() {
    console.log(this.$route); //取传过来的 parmas
    this.$axios
      .get("/maizuo/gateway?k=9391735", {
        params: {
          filmId: this.$route.params.filmId
        },
        headers: {
          "X-Host": "mall.film-ticket.film.info"
        }
      })
      .then(res => {
        this.film = res.data.data.film;
      });
  }
};
</script>


<style lang="scss" scoped>
.box {
  background: #fff;
  .banner img {
    width: 100%;
    height: 220px;
  }
  .d-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px 5px 5px;
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
      color: lightsalmon;
    }
  }
  .d-info {
    text-align: left;
    padding: 0 5px;
    color: gray;
    p {
      padding: 3px 0;
    }
    .info-three {
      padding: 15px 0 0 0;
    }
  }
  h3 {
    font-size: 18px;
    text-align: left;
    padding: 30px 0 10px 5px;
  }
  .d-actors {
    width: 100%;
    display: flex;
    overflow: scroll;
    .d-actors-pic {
      padding: 0 5px;
      width: 100px;
      height: 150px;
    }
  }
  .d-photos {
    width: 100%;
    display: flex;
    overflow: scroll;
    .d-photos-pic {
      width: 200px;
      height: 250px;
    }
  }
}
</style>