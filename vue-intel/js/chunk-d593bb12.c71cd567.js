(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d593bb12"],{"5c4c":function(t,n,e){},"5f5d":function(t,n,e){"use strict";var s=e("5c4c"),i=e.n(s);i.a},de7e:function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"box"},[e("van-sticky",{attrs:{"offset-top":0}},[e("Header",{attrs:{show:!0,title:"资讯"}})],1),e("div",{staticClass:"w-content"},[e("h3",[t._v(t._s(t.content.title))]),e("p",{domProps:{innerHTML:t._s(t.content.content)}})])],1)},i=[],o={data:function(){return{id:"",content:""}},mounted:function(){var t=this;console.log(this.$route),this.id=this.$route.params.id,this.$axios.get("/inl/api/news/getNews?id="+this.id).then((function(n){t.content=n.data}))}},c=o,a=(e("5f5d"),e("2877")),r=Object(a["a"])(c,s,i,!1,null,"58e78270",null);n["default"]=r.exports}}]);
//# sourceMappingURL=chunk-d593bb12.c71cd567.js.map