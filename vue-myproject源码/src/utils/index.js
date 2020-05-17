//存放全局数据

export var foots = [
    { txt: "电影", name: "movie", path: "/main/movie", icon: "&#xe62e;" },
    { txt: "影院", name: "cinema", path: "/main/cinema", icon: "&#xe8c0;" },
    { txt: "资讯", name: "news", path: "/main/news", icon: "&#xe6b3;" },
    { txt: "电商", name: "shop", path: "/main/shop", icon: "&#xe60a;" },
    { txt: "我的", name: "mine", path: "/main/mine", icon: "&#xe61d;" }
]



export const myMixin = {
    data() {
        return {
            city: {}
        }
    },
    created() {
        if (localStorage.city) {
            var city = JSON.parse(localStorage.city);
            console.log(city);
            this.city = city;
        } else {
            this.$router.push({ name: "city" })
        }
    },
    mounted() {

    },
    filters: {

    },
    computed: {

    }
}

//混入动画
// beforeRouteEnter    进入这个组件之前
// beforeRouteLeave    离开这个组件之前  
export const animate = {
    data() {
        return {
            animateClass: "enter"
        }
    },
    beforeRouteEnter(to, from, next) {
        next()
    },
    beforeRouteLeave(to, from, next) {
        this.animateClass = "leave";
        setTimeout(() => {
            next()
        }, 200)

    },
}