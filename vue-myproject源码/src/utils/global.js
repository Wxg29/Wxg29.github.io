

//全局注册的组件

import Vue from "vue"
import Head from "@/components/Head.vue"
import Foot from "@/components/Foot.vue"
import Vantfoot from "@/components/Vantfoot.vue"
import Carousel from "@/components/Carousel.vue"
import Carouselitem from "@/components/Carouselitem.vue"
import Uploadimg from "@/components/Uploadimg.vue"
import Vuex from "@/components/Vuex.vue"



Vue.component("Head", Head)
Vue.component("Foot", Foot)
Vue.component("Vantfoot", Vantfoot)
Vue.component("Carousel", Carousel)
Vue.component("Carouselitem", Carouselitem)
Vue.component("Uploadimg", Uploadimg)
Vue.component("Vuex", Vuex)


//cinema 的价格过滤器

Vue.filter("price", value => {
    if (!value) return value;
    return "￥" + value.toFixed() + " 起"
})