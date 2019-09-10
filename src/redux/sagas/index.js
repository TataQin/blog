import { put, takeEvery, all, call } from 'redux-saga/effects'
import { REQUEST_POSTS, receivePosts, requestPosts } from '../actions/posts'
import { fetchPostsApi } from '../services/api'

/** Event Watcher */
function * eventWatcher () {
  yield takeEvery(REQUEST_POSTS, fetchPosts)
}

function * fetchPosts () {
  const data = yield fetchPostsApi()
  yield put(receivePosts(data))
}

/** Root saga */
export function * rootSaga () {
  const sagas = [eventWatcher()]
  yield all(sagas)
}
