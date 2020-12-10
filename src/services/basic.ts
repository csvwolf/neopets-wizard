import axios from 'axios'
import { ElMessage } from 'element-plus'
const instance = axios.create({
  baseURL: 'http://localhost:8090/'
})

instance.interceptors.response.use((response) => {
  if (response.data.error) {
    ElMessage.error(response.data.error)
  }
  return response
}, (error) => {
  ElMessage.error(`未知错误：${error.response.data}`)
})

export default instance
