<template>
  <div class="box">
    <van-sticky :offset-top="0">
      <Head title="电商"></Head>
    </van-sticky>

    <h3>
      <van-empty description="暂无电商" />
    </h3>
    <!-- <Vuex></Vuex> -->
  </div>
</template>



<style scoped>
.box {
  width: 100%;
  height: 100%;
  background: #ffffff;
}
</style>
