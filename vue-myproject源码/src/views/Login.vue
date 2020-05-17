<template>
  <div class="box">
    <Head title="登陆/注册" :show="true" :login="true"></Head>
    <van-tabs
      v-model="active"
      animated
      color="#177cb0"
      title-inactive-color="#75878a"
      title-active-color="#177cb0"
    >
      <!-- 密码登陆 -->
      <van-tab title="密码登陆">
        <van-form @submit="loginSubmit">
          <van-field
            v-model="login.mobile"
            name="mobile"
            label="电话号码"
            placeholder="电话号码"
            :rules="[{ required: true, message: '请填写电话号码' }]"
          />
          <van-field
            v-model="login.password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">登陆</van-button>
          </div>
        </van-form>
      </van-tab>

      <!--验证登陆  -->
      <van-tab title="验证登陆">
        <van-field v-model="mobile" name="mobile" label="手机号" placeholder="手机号" />
        <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
          <template #button>
            <van-button @click="sendSms" size="small" type="primary">发送验证码</van-button>
          </template>
        </van-field>
        <div style="margin: 16px;">
          <van-button round block type="info" @click="checkSms">登陆</van-button>
        </div>
      </van-tab>

      <!-- 注册 -->
      <van-tab title="立即注册">
        <van-form @submit="registerSubmit">
          <van-field
            v-model="register.username"
            name="username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="register.mobile"
            name="mobile"
            label="电话号码"
            placeholder="电话号码"
            :rules="[{ required: true, message: '请填写电话号码' }]"
          />
          <van-field
            v-model="register.password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <van-field
            v-model="register.repassword"
            type="repassword"
            name="repassword"
            label="确认密码"
            placeholder="确认密码"
            :rules="[{ required: true, message: '请确认密码' }]"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">注册</van-button>
          </div>
        </van-form>
      </van-tab>
    </van-tabs>
  </div>
</template>


<script>
export default {
  data() {
    return {
      active: "a",
      login: {
        mobile: localStorage.mobile
      },
      register: {},
      username: "",
      password: "",
      sms: "",
      mobile: ""
    };
  },
  computed: {},
  methods: {
    //登陆
    loginSubmit(val) {
      // console.log(val);
      this.$axios.post("/vue/login", this.login).then(res => {
        if (res.data.type) {
          localStorage.mobile = this.login.mobile;
          // localStorage.username = this.login.username;
          localStorage.isLogin = true;
          this.$router.push({ name: "mine" });
          //后端传过来的token 要存进sessionStorage
          sessionStorage.token = res.data.token;
        }
      });
    },

    //注册
    registerSubmit(val) {
      // console.log(val);
      this.$axios.post("/vue/register", this.register).then(res => {
        if (res.data.type) {
          this.active = 0;
          this.login.mobile = this.register.mobile;
        }
      });
    },

    //发送验证码
    sendSms() {
      this.$axios
        .get("/yun/captcha/sent", {
          params: {
            phone: this.mobile
          }
        })
        .then(res => {
          console.log(res);
        });
    },
    //验证验证码
    checkSms() {
      this.$axios
        .get("/yun/captcha/verify", {
          params: {
            phone: this.mobile,
            captcha: this.sms
          }
        })
        .then(res => {
          //如果验证码成功就存下来,跳转
          if (res.data.code == 200) {
            localStorage.mobile = this.mobile;
            localStorage.isLogin = true;
            this.$router.push({ name: "mine" });
          } else {
            localStorage.isLogin = false;
          }
        });
    }
  }
};
</script>