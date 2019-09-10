
import request from '../../../utils/request'

export const fetchPostsApi = () => request({
  // method: 'post',
  url: '/blog/posts'
})
