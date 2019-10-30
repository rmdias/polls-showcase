import { routerMiddleware } from 'connected-react-router'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import sagas from './sagas'
import reducers from './reducers'
import browserHistory from './history'

const initialState = {}
const sagaMiddleware = createSagaMiddleware()

const params = [
  applyMiddleware(sagaMiddleware),
  applyMiddleware(routerMiddleware(browserHistory))
]

// plugin https://github.com/zalmoxisus/redux-devtools-extension
/* eslint no-underscore-dangle: 0 */
const reduxDevBrowserApps =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

if (reduxDevBrowserApps) {
  params.push(reduxDevBrowserApps)
}

const composers = compose(...params)

const store = createStore(reducers(browserHistory), initialState, composers)

sagaMiddleware.run(sagas)

export default store
