import axios from 'axios'
import { takeLatest, put, call } from 'redux-saga/effects'

import { polls, POLLS } from 'actions/polls'

function fetchPolls(url) {
  return axios.request({
    url,
    method: 'GET',
    headers: {
      'Access-Control-Expose-Headers': 'Link'
    }
  })
}

function* fetchPollsSaga(action) {
  try {
    yield put(polls.fetch.loading(true))
    const REQUEST_URL = `https://cors-anywhere.herokuapp.com/https://polls.apiblueprint.org/questions?page=${action.page}`

    const pollsRequest = yield call(fetchPolls, REQUEST_URL)

    yield put(polls.fetch.success(pollsRequest))
  } catch (error) {
    yield put(polls.fetch.failure(error, 'Error when loading polls'))
  } finally {
    yield put(polls.fetch.loading(false))
  }
}

export default function* watchPolls() {
  yield takeLatest(POLLS.FETCH.REQUEST, fetchPollsSaga)
}
