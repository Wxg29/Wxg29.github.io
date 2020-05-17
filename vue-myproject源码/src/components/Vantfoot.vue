<template>
  <div>
    <van-tabbar v-model="active" :route="true">
      <van-tabbar-item v-for="(val,i) in foots" :key="i" :to="{name:val.name}" :badge="i==2?num:''">
        <span>{{val.txt}}</span>
        <template #icon="props">
          <i class="iconfont" v-html="val.icon"></i>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { foots } from "@/utils";
import store from "@/store"; //如果不导入就用this.$store取
export default {
  data() {
    return {
      active: 0,
      foots
    };
  },
  computed: {
    num() {
      console.log(this.$store);
      return store.state.num; //取到store里面的num
    }
  }
};
</script>