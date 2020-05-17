import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//state  驱动应用数据的数据源
//mutations 修改状态的地方
import { axios } from "@/utils/axios";
export default new Vuex.Store({
  state: {  //state里面 任何组件都可以拿到的数据
    info: "我不能改变，因为我是取在data里面的初始数据",
    count: 1903,
    num: 10,
    city: "武汉",
    word: "fighting",
    yum: {
      players: []
    },
    obj: {
      banner: []
    }
  },
  mutations: {  //改变 store 中状态的唯一途径 就是显示地提交 (commit)   mutation
    changeNum(state) {
      state.num++
    },
    changeCount(state) {
      state.count += 100
    },
    changeCity(state, payload) {
      state.city = payload
    },
    changeWord(state, payload) {
      state.word = payload
    },
    getPlayers(state, payload) {
      // 当需要在对象上添加新属性时  
      // state.yum.players = payload;   
      state.yum = { ...state.yum, players: payload };
    },
    getBanner(state, payload) {
      state.obj = { ...state.obj, banner: payload };
    }
  },
  actions: {
    getPlayers({ commit }) {
      axios.get("/yun/toplist/artist")
        .then(res => {
          commit("getPlayers", res.data.list.artists);
        })
    },
    getBanner({ commit }) {
      axios.get("/vue/movie?limit=6")
        .then(res => {
          commit("getBanner", res.data.result);
        })
    }
  },
  modules: {
  }
})
