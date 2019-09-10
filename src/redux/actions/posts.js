/** Action Types */
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const POSTS_FETCH_DONE = 'POSTS_FETCH_DONE'
export const POSTS_FETCH_ERROR = 'POSTS_FETCH_ERROR'

/** Action Handlers */
export const requestPosts = () => ({ type: REQUEST_POSTS })
export const receivePosts = (posts) => ({ type: POSTS_FETCH_DONE, posts })
