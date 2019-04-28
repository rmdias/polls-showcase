import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import poll from './poll'
import polls from './polls'

export default (history) => combineReducers({
  router: connectRouter(history),
  poll,
  polls
})
