import { combineReducers } from 'redux'
import { postsReducer } from './posts'

/** Root Reducer */
export const rootReducer = combineReducers({
  posts: postsReducer
})
