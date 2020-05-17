<template>
  <div>
    <input type="file" class="fileimg" ref="file" @change="changeImg" />
    <img @click="clickImg" :src="pic" alt class="avatar" />
    <slot></slot>
  </div>
</template>

<script>
import { baseURL } from "@/utils/axios";
//默认的头像
import pic from "@/assets/images/w1 (6).png";
export default {
  data() {
    return {
      pic: pic
    };
  },
  mounted() {
    // 判断本地存储  有没有头像
    // 如果有 判断手机号是否一样
    // 如果手机号一样 直接获取本地的
    // 如果手机号不一样  就再获取数据库
    if (localStorage.users) {
      var users = JSON.parse(localStorage.users);
      if (users.mobile == localStorage.mobile) {
        this.pic = users.path; //users的mobile是从数据库返回出来的   localStorage.mobile是登陆后存的
      } else {
        this.getAvatar();
      }
    } else {
      this.getAvatar();
    }
  },
  methods: {
    clickImg() {
      this.$refs.file.click();
    },
    changeImg() {
      console.log("开始上传头像");
      var file = this.$refs.file.files[0];
      console.log(file);
      var data = new FormData(); //FormData内置的对象    实例化一个表单对象(appliaction/formdata)
      data.append("avatar", file); // 配置 key  为  avatar

      // 头像上传
      this.$axios({
        url: "/vue/uploadimg",
        method: "POST",
        data: data
      }).then(res => {
        // this.pic = res.data.path.replace(/public/, baseURL); //piblic 是node里面的基路径  所以去掉
        //反向代理方法
        this.pic = res.data.path;
        console.log(this.pic);

        let users = {
          path: this.pic,
          mobile: res.data.mobile
        };
        localStorage.setItem("users", JSON.stringify(users)); //存储头像到本地
      });
    },
    getAvatar() {
      this.$axios.post("/vue/getavatar").then(res => {
        if (res.data.type) {
          this.pic = res.data.result.avatar.replace(/public/, baseURL);
        } else {
          this.pic = pic; //没有就等于默认的头像
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.fileimg {
  display: none;
}
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
</style>