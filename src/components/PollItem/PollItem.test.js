import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'

import PollItem from './index'
import PollMock from './__mocks__/__mock__poll'

import { Theme } from 'luna-ui-lib'

describe('<PollItem />', () => {
  it('toMatchSnapshot: Load <PollItem /> component', () => {
    const component = (
      <Theme>
        <Router>
          <PollItem poll={PollMock}/>
        </Router>
      </Theme>
    )

    const tree = renderer
      .create(component)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
