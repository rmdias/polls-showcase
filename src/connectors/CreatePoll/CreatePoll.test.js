import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { BrowserRouter as Router } from 'react-router-dom'

const middlewares = []
const mockStore = configureStore(middlewares)

import CreatePoll from './index'

import { Theme } from 'luna-ui-lib'

const initialState = { }
const store = mockStore(initialState)

beforeEach(() => {
  global.scrollTo = jest.fn()
})

describe('<CreatePoll />', () => {
  it('toMatchSnapshot', () => {
    const component = (
      <Theme>
        <Router>
          <CreatePoll store={store}/>
        </Router>
      </Theme>
    )

    const tree = renderer
      .create(component)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

})
