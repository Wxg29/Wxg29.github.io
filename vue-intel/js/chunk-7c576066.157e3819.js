(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c576066"],{"590a":function(t,i,e){"use strict";var a=e("a120"),s=e.n(a);s.a},a120:function(t,i,e){},bb51:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"box",class:t.animateClass},[e("van-sticky",{attrs:{"offset-top":0}},[e("Header",{attrs:{title:"首页"}})],1),e("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.obj.banner,(function(t,i){return e("van-swipe-item",{key:i},[e("img",{staticClass:"h-bannerimg",attrs:{src:t.webPhoto,alt:""}})])})),1),e("van-tabs",{attrs:{"title-active-color":"#007aff",color:"#007aff",animated:""},model:{value:t.active,callback:function(i){t.active=i},expression:"active"}},[e("van-tab",{attrs:{title:"直播视频"}},[e("div",{staticClass:"h-video"},[e("div",{staticClass:"video-v"},t._l(t.obj.videos,(function(i,a){return e("div",{key:a,staticClass:"video-item"},[e("img",{staticClass:"video-pic",attrs:{src:i.file1,alt:""},on:{click:function(e){return t.watchLive(i)}}}),e("p",[t._v(t._s(i.title))])])})),0)])]),e("van-tab",{attrs:{title:"直播报名"}},[e("div",{staticClass:"h-live"},[e("div",{staticClass:"live-video"},t._l(t.obj.apply,(function(i,a){return e("div",{key:a,staticClass:"video-list"},[e("img",{staticClass:"video-img",attrs:{src:i.image,alt:""},on:{click:function(e){return t.watchBaoming(i)}}}),e("p",[t._v(t._s(i.subject))]),e("p",[t._v("嘉宾:"+t._s(i.host))])])})),0)])]),e("van-tab",{attrs:{title:"Online"}},[e("div",{staticClass:"h-live"},[e("div",{staticClass:"live-video"},t._l(t.obj.online,(function(i,a){return e("div",{key:a,staticClass:"video-list"},[e("img",{staticClass:"video-img",attrs:{src:i.file1,alt:""},on:{click:function(e){return t.watchOnline(i)}}}),e("p",[t._v(t._s(i.title))])])})),0)])]),e("van-tab",{attrs:{title:"在线培训"}},[e("div",{staticClass:"h-live"},[e("div",{staticClass:"live-video"},t._l(t.obj.study,(function(i,a){return e("div",{key:a,staticClass:"video-list"},[e("img",{staticClass:"video-img",attrs:{src:i.file1,alt:""},on:{click:function(e){return t.watchZaixian(i)}}}),e("p",[t._v(t._s(i.title))])])})),0)])])],1)],1)},s=[],n=e("5530"),o=e("ed08"),c=e("2f62"),l={mixins:[o["a"]],data:function(){return{bannerList:{},liveList:{},videoList:{},onlineList:{},zaixianList:{},active:0}},props:{flag:Boolean},computed:Object(n["a"])({},Object(c["c"])(["obj"])),methods:Object(n["a"])(Object(n["a"])({},Object(c["b"])(["getHomeBanner","getHomeVideo","getHomeApply","getHomeOnline","getHomeStudy"])),{},{watchLive:function(t){t.sourceLink&&this.$router.push({name:"watchvideo",params:{sourceLink:t.sourceLink}})},watchBaoming:function(t){t.sourceLink&&this.$router.push({name:"watchvideo",params:{sourceLink:t.sourceLink}})},watchOnline:function(t){t.sourceLink&&this.$router.push({name:"watchvideo",params:{sourceLink:t.sourceLink}})},watchZaixian:function(t){t.sourceLink&&this.$router.push({name:"watchvideo",params:{sourceLink:t.sourceLink}})}}),mounted:function(){this.getHomeBanner(),this.getHomeVideo(),this.getHomeApply(),this.getHomeOnline(),this.getHomeStudy()}},r=l,u=(e("590a"),e("2877")),v=Object(u["a"])(r,a,s,!1,null,"0f096fd2",null);i["default"]=v.exports}}]);
//# sourceMappingURL=chunk-7c576066.157e3819.js.map