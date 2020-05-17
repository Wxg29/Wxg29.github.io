<template>
  <div>
    <h3>vuex入门学习</h3>
    <h3>{{info}}</h3>
    <h3>{{count}}</h3>
    <h3>{{city}}</h3>
    <h3>{{word1}}</h3>
    <p>
      <input type="text" :value="word1" @input="changeWord($event.target.value)" />
    </p>
    <van-button type="info" @click="changeNum">修改 foot 的num</van-button>
    <van-button type="info" @click="changeCount">修改 count</van-button>
    <van-button type="info" @click="changeCity('我想去武汉')">修改 city</van-button>
    <p v-for="(py,i) in yum.players" :key="i">{{py.name}}</p>
  </div>
</template>

<script>
import store from "@/utils";

import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      //取值 city   这里的city不能被该改变   写在计算属性的才能被改变  永远不要使用data
      // city1: this.$store.state.city
      info: this.$store.state.info
    };
  },
  computed: {
    // ...mapState({
    //   city2: state => state.city,
    //   count2: state => state.count,
    //   word1: "word" // 'word' 等同于 `state => state.word`
    // }),
    ...mapState([
      "count", // 映射 this.count 为 store.state.count
      "city",
      "word1",
      "yum"
    ])
    // city() {
    //   return this.$store.state.city;
    // },
    // count() {
    //   return this.$store.state.count;
    // },
    // word1: {
    //   get() {
    //     return this.$store.state.word;
    //   }
    // },
    // yum() {
    //   return this.$store.state.yum;
    // }
  },
  methods: {
    ...mapMutations({
      changeNum: "changeNum" // 将 `this.changeNum()` 映射为 `this.$store.commit('changeNum')`
    }),
    ...mapMutations([
      "changeCount", // this.changeCount  this.$store.commit("changeCount")
      "changeCity",
      "changeWord"
    ]),
    ...mapActions([
      "getPlayers" // this.getPlayers = this.$store.dispatch('getPlayers')
    ])

    // changeNum() {
    //   this.$store.commit("changeNum");
    // },
    // changeCount() {
    //   this.$store.commit("changeCount");
    // },
    // changeCity(city) {
    //   this.$store.commit("changeCity", city);
    // },
    // changeWord(e) {
    //   this.$store.commit("changeWord", e.target.value);
    // }
  },
  mounted() {
    // this.$store.dispatch("getPlayers");
    this.getPlayers();
  }
};
</script>

<style lang="scss" scoped>
h3 {
  color: cadetblue;
  font-size: 16px;
}
</style>