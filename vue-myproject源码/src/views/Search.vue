<template>
  <div class="box">
    <Head title="搜索" :show="true" :search="true"></Head>
    <form action="/">
      <van-search v-model="keyWord" show-action placeholder="请输入搜索关键词" @search="onSearch">
        <template #action>
          <div @click="toSearch">搜索</div>
        </template>
      </van-search>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyWord: ""
    };
  },
  methods: {
    onSearch(value) {
      console.log(value);
    },
    toSearch(e) {
      console.log(e);
      console.log(this.keyWord);
    }
  }
};
</script>