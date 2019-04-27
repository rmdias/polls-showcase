import React from 'react'
import ReactDOM from 'react-dom'

import browserHistory from './history'
import store from './store'

import App from 'connectors/App'
import './index.css'

ReactDOM.render(<App store={store} history={browserHistory}/>, document.getElementById('root'))
