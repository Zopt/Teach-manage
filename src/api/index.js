import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://your-backend-api.com', // 替换为你的后端 API 地址
  timeout: 5000
})

export default instance