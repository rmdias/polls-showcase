import axios from 'axios'
import { takeLatest, put, call } from 'redux-saga/effects'

import { poll, POLL } from 'actions/poll'

const REQUEST_URL = 'https://polls.apiblueprint.org'

function fetchPoll(method, url, data = {}) {
  return axios.request({
    url,
    data,
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

function* fetchPollSaga(action) {
  try {
    yield put(poll.fetch.loading(true))

    const pollRequest = yield call(fetchPoll, 'GET', `${REQUEST_URL}/questions/${action.questionId}`)

    yield put(poll.fetch.success(pollRequest.data))
  } catch (error) {
    yield put(poll.fetch.failure(error, 'Error when loading polls'))
  } finally {
    yield put(poll.fetch.loading(false))
  }
}

function* votingSaga(action) {
  try {
    yield put(poll.update.loading(true))

    const votingRequest = yield call(fetchPoll, 'POST', `${REQUEST_URL}${action.choiceId}`)

    yield put(poll.update.success(votingRequest.data))
  } catch (error) {
    yield put(poll.update.failure(error, 'Error when voting'))
  } finally {
    yield put(poll.update.loading(false))
  }
}

function* createSaga(action) {
  try {
    yield put(poll.save.loading(true))

    const createRequest = yield call(fetchPoll, 'POST', `${REQUEST_URL}/questions`, action.pollData)

    yield put(poll.save.success(createRequest.data))
  } catch (error) {
    yield put(poll.save.failure(error, 'Error when creating poll'))
  } finally {
    yield put(poll.save.loading(false))
  }
}

export default function* watchPoll() {
  yield takeLatest(POLL.FETCH.REQUEST, fetchPollSaga)
  yield takeLatest(POLL.UPDATE.REQUEST, votingSaga)
  yield takeLatest(POLL.SAVE.REQUEST, createSaga)
}