import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { BrowserRouter as Router } from 'react-router-dom'

const middlewares = []
const mockStore = configureStore(middlewares)

import PollDetail from './index'
import PollMock from './__mocks__/__mock__poll'

import { Theme } from 'luna-ui-lib'

const poll = {
  data: PollMock,
  loading: false
}
const initialState = { poll }
const store = mockStore(initialState)

beforeEach(() => {
  global.scrollTo = jest.fn()
})

describe('<PollDetail />', () => {
  it('toMatchSnapshot: Loading', () => {
    const component = (
      <Theme>
        <Router>
          <PollDetail store={store}/>
        </Router>
      </Theme>
    )

    const tree = renderer
      .create(component)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

})
