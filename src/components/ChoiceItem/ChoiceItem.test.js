import React from 'react'
import renderer from 'react-test-renderer'

import ChoiceItem from './index'
import ChoiceMock from './__mocks__/__mock__choice'

import { Theme } from 'luna-ui-lib'

describe('<ChoiceItem />', () => {
  it('toMatchSnapshot: Load <ChoiceItem /> component', () => {
    const component = (
      <Theme>
        <ChoiceItem
          choice={ChoiceMock}
          active={true}
          totalvotes={100}
          biggernumber={200}
          onClick={() => this.handleVotingSelection(choice.url)}
        />
      </Theme>
    )

    const tree = renderer
      .create(component)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
