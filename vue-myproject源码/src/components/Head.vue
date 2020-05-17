<template>
  <div>
    <van-nav-bar
      :title="title"
      :left-text="show?'返回':''"
      :left-arrow="show"
      @click-left="onClickLeft"
    >
      <template #right>
        <van-icon v-if="!search" @click="gotosearch" name="search" size="40" />
        <van-icon class="gotologin" v-if="!login" @click="gotologin" name="friends-o" size="40" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: String,
    show: Boolean,
    search: Boolean,
    login: Boolean
  },
  methods: {
    onClickLeft() {
      this.show ? this.$router.go(-1) : "";
    },
    gotosearch() {
      this.$router.push({ name: "search" });
    },
    gotologin() {
      this.$router.push({ name: "login" });
    }
  }
};
</script>


<style lang="scss" scoped>
.gotologin {
  padding-left: 10px;
}
</style>