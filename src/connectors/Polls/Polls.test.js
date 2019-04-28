import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { BrowserRouter as Router } from 'react-router-dom'

const middlewares = []
const mockStore = configureStore(middlewares)

import Polls from './index'
import PollsMock from './__mocks__/__mock__polls'

import { Theme } from 'luna-ui-lib'

let initialState
const polls = {
  list: [],
  loading: true
}

beforeEach(() => {
  initialState = { polls }
  global.scrollTo = jest.fn()
})

describe('<Polls />', () => {
  it('toMatchSnapshot: Loading', () => {
    const store = mockStore(initialState)
    const component = (
      <Theme>
        <Router>
          <Polls store={store}/>
        </Router>
      </Theme>
    )

    const tree = renderer
      .create(component)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('toMatchSnapshot: Load <Polls /> as list of <PollItem />', () => {
    initialState.polls.list = PollsMock
    const store = mockStore(initialState)
    const component = (
      <Theme>
        <Router>
          <Polls store={store}/>
        </Router>
      </Theme>
    )
    const tree = renderer
      .create(component)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
