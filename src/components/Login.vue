<template>
  <div class="login-container">
    <el-card class="login-box">
      <h2 class="login-title">用户登录</h2>
      <el-form :model="loginForm" :rules="rules" ref="loginFormRef">
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-form-item prop="captcha" class="captcha-container">
          <el-input
            v-model="loginForm.captcha"
            placeholder="请输入验证码"
            prefix-icon="el-icon-picture"
            class="captcha-input"
          ></el-input>
          <img :src="captchaImage" alt="验证码" class="captcha-image" @click="refreshCaptcha" />
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="loginForm.rememberMe">记住我</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin" :loading="loading">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-link type="info" @click="goToRegister" class="register-link">没有密码？去登记</el-link>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import { ElMessage } from 'element-plus'

export default {
  setup() {
    const loginFormRef = ref(null)
    const loginForm = ref({
      username: '',
      password: '',
      captcha: '',
      rememberMe: false
    })
    const loading = ref(false)
    const captchaImage = ref('https://via.placeholder.com/150') // 替换为实际的验证码图片 URL

    const rules = {
      username: [
        { required: true, message: '请输入用户名', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
      ],
      // captcha: [
      //   { required: true, message: '请输入验证码', trigger: 'blur' }
      // ]
    }

    const handleLogin = () => {
      loginFormRef.value.validate((valid) => {
        if (valid) {
          loading.value = true
          axios.post('https://tqwrjwmouzlf.usw.sealos.io/api/users/login',{
            username: loginForm.value.username,
            password: loginForm.value.password
            // captcha: loginForm.value.captcha
          })
            .then(response => {
              console.log(response.data)
              if (response.data.success) {
                ElMessage.success('登录成功')
                // 这里可以跳转到主页或其他页面
              } else {
                ElMessage.error(response.data.message)
              }
            })
            .catch(error => {
              ElMessage.error('登录失败，请稍后重试')
            })
            .finally(() => {
              loading.value = false
            })
        } else {
          return false
        }
      })
    }

    const refreshCaptcha = () => {
      // 刷新验证码的逻辑
      captchaImage.value = 'https://via.placeholder.com/150?t=' + new Date().getTime()
    }

    const goToRegister = () => {
      // 跳转到注册页面的逻辑
      console.log('跳转到注册页面')
    }

    return {
      loginFormRef,
      loginForm,
      loading,
      captchaImage,
      rules,
      handleLogin,
      refreshCaptcha,
      goToRegister
    }
  }
}
</script>

<style scoped>

.login-container {
  display: flex;
  justify-content: center; /* 居中显示登录面板 */
  align-items: center;
  width: 100vw; /* 视口宽度 */
  height: 100vh; /* 视口高度 */
  background-image: url('@/assets/8005DA5347F5532BC2FD43333EC1D957.jpg'); /* 使用上传的图片作为背景 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0; /* 移除内边距 */
  position: absolute; /* 或者使用 fixed */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.login-box {
  width: 400px;
  padding: 20px;
  border-radius: 10px; /* 圆角效果 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 投影效果 */
  background-color: rgba(255, 255, 255, 0.9); /* 背景色突出 */
}

.login-title {
  text-align: center;
  margin-bottom: 20px;
  color: #333; /* 标题颜色 */
}

.captcha-container {
  display: flex;
  align-items: center;
}

.captcha-input {
  flex: 1;
  margin-right: 10px;
}

.captcha-image {
  height: 40px; /* 与输入框高度一致 */
  cursor: pointer;
}

.register-link {
  font-size: 12px; /* 字体大小偏小 */
  color: #909399; /* 浅色字体 */
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden; /* 防止滚动条出现 */
}
</style>