import axios from 'axios'
import { takeLatest, put, call } from 'redux-saga/effects'

import { polls, POLLS } from 'actions/polls'

const REQUEST_URL = 'https://polls.apiblueprint.org/questions?page=1'

function fetchPolls(url) {
  return axios.request({
    url,
    method: 'GET'
  })
}

function* fetchPollsSaga() {
  try {
    yield put(polls.fetch.loading(true))

    const pollsRequest = yield call(fetchPolls, REQUEST_URL)

    yield put(polls.fetch.success(pollsRequest.data))
  } catch (error) {
    yield put(polls.fetch.failure(error, 'Error when loading polls'))
  } finally {
    yield put(polls.fetch.loading(false))
  }
}

export default function* watchPolls() {
  yield takeLatest(POLLS.FETCH.REQUEST, fetchPollsSaga)
}