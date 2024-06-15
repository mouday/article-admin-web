import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { getToken, removeToken } from '@/utils/token-util'
import { message } from 'antd'

const APP_API_URL = import.meta.env.VITE_APP_API_URL

const instance = axios.create({
  baseURL: APP_API_URL,
  timeout: 1000 * 10, // 毫秒
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    let token = getToken()

    if (token) {
      config.headers['X-Token'] = token
    }

    return config
  },
  (err) => {
    return err
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  (res) => {
    // 增加ok参数
    if (res.data.code == 0) {
      res.data.ok = true
    } else {
      if (res.data.code == 403) {
        removeToken()
      }
      res.data.ok = false

      message.error({
        content: res.data.msg,
      })
    }

    return res.data
  },
  (err) => {
    message.error({
      content: err,
    })

    return err
  }
)

export default instance
