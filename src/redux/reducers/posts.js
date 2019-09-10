
import { REQUEST_POSTS, POSTS_FETCH_DONE, POSTS_FETCH_ERROR } from '../actions/posts'
/** Init default state */
const initState = () => ({
  isFetching: false,
  items: []
})

/** Posts Reducer */
export const postsReducer = (state = initState(), action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      }
    case POSTS_FETCH_DONE:
      console.log(action)
      return {
        ...state,
        isFetching: false,
        items: action.posts
      }
    case POSTS_FETCH_ERROR:
      return state
    default:
      return state
  }
}
