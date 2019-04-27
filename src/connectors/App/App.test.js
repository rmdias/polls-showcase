import React from 'react'
import ReactDOM from 'react-dom'

import browserHistory from '../../history'
import store from '../../store'

import App from './index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  global.scrollTo = jest.fn()

  ReactDOM.render(<App store={store} history={browserHistory}/>, div)
  ReactDOM.unmountComponentAtNode(div)
})
