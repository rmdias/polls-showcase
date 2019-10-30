import { fork, all } from 'redux-saga/effects'

import pollSaga from './poll'
import pollsSaga from './polls'

export default function* root() {
  yield all([fork(pollSaga), fork(pollsSaga)])
}
