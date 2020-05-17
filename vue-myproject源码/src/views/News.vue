<template>
  <div class="box" :class="animateClass">
    <van-sticky :offset-top="0">
      <Head title="资讯"></Head>
    </van-sticky>

    <div v-html="page"></div>
  </div>
</template>

<script>
import { myMixin, animate } from "@/utils";

export default {
  mixins: [myMixin, animate],
  data() {
    return {
      page: ""
    };
  },
  mounted() {
    this.$axios
      .get("/maizuo/gateway?actId=ElzMZU125260", {
        headers: {
          "X-Host": "mall.act.static-page.info"
        }
      })
      .then(res => {
        this.page = res.data.data.data.content;
      });
  }
};
</script>