(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-97a9a5aa"],{5153:function(t,a,s){"use strict";var i=s("fc62"),n=s.n(i);n.a},8049:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"box",class:t.animateClass},[s("Header",{attrs:{title:"项目管理"}}),s("van-tabs",{attrs:{"title-active-color":"#007aff",color:"#007aff",animated:""},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[s("van-tab",{attrs:{title:"成功案例"}},[s("div",{staticClass:"spmp"},t._l(t.spmpList,(function(a,i){return s("div",{key:i,staticClass:"spmp-title",on:{click:function(s){return t.gotospmp2(a)}}},[s("img",{attrs:{src:a.coverImg,alt:""}})])})),0)]),s("van-tab",{attrs:{title:"高峰论坛"}},[s("div",{staticClass:"spmp"},t._l(t.pmpList,(function(a,i){return s("div",{key:i,staticClass:"spmp-title",on:{click:function(s){return t.gotospmp2(a)}}},[s("img",{attrs:{src:a.coverImg,alt:""}})])})),0)]),s("van-tab",{attrs:{title:"解决方案"}},[s("van-empty",{attrs:{description:"暂无最新方案"}})],1)],1)],1)},n=[],e=s("ed08"),c={mixins:[e["a"]],data:function(){return{active:0,spmpList:{},pmpList:{}}},mounted:function(){var t=this;this.$axios.post("/inl/api/caseData/getList").then((function(a){t.spmpList=a.data.data})),this.$axios.post("/inl/api/summits/getList").then((function(a){t.pmpList=a.data.data}))},methods:{gotospmp2:function(t){this.$router.push({name:"spmpto",params:{id:t.id}})}}},o=c,p=(s("5153"),s("2877")),r=Object(p["a"])(o,i,n,!1,null,"a6724886",null);a["default"]=r.exports},fc62:function(t,a,s){}}]);
//# sourceMappingURL=chunk-97a9a5aa.01d9ce88.js.map