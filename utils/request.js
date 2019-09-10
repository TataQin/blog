import axios from 'axios'
import { message } from 'antd'
// import { browserHistory } from 'react-router'

const request = axios.create({
  baseURL: 'http://localhost:3000', // api的base_url
  headers: {
    post: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  },
  timeout: 10000 // 请求超时时间
})

// respone拦截器
request.interceptors.response.use(
  response => {
    if (response.data.code === 300) {
      // browserHistory.push('/login')
      message.error('token过期！请重新登陆')
      return response
    }
    if (response.data.code === 400) {
      message.error(response.data.msg)
      return response
    }
    return response.data
  },
  error => {
    console.log('err' + error)
    // browserHistory.push('/404')
    return Promise.reject(error)
  }
)

export default request
