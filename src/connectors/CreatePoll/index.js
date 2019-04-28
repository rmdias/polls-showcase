import _ from 'lodash'
import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import { Button, Area, Form, ActionFeedback } from 'luna-ui-lib'

import './styles.css'
import connector from './connector'

class CreatePoll extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    onCreate: PropTypes.func
  }

  constructor(props) {
    super(props)

    window.scrollTo(0, 0)
    this.state = { choices: ['', ''] }
    this.poll = {
      question: '',
      choices: ['', '']
    }
  }

  create(e) {
    e.preventDefault()

    this.props.onCreate(this.poll)
  }

  updateField(target, event) {
    event.persist()

    _.set(this.poll, target, event.target.value)
  }

  manageChoices(action) {
    this.setState((state, props) => {
      const newState = _.cloneDeep(state)

      if (action === '+') {
        this.poll.choices.push('')
        newState.choices.push('')
      }
      if (action === '-') {
        this.poll.choices.pop()
        newState.choices.pop()
      }

      return newState
    })
  }

  getSuccessMessage() {
    setTimeout(() => {
      this.props.history.push(this.props.newPoll.url)
    }, 2000)

    return (
      <div className="poll__feedback_box">
        <ActionFeedback>
          <strong>A new poll has been created!</strong>
        </ActionFeedback>
      </div>
    )
  }

  render() {
    const sholdHaveDecreaseButton = this.poll.choices.length >= 3
    const choices = this.state.choices.map((choice, index) => {
      return <Form.InputText
        key={['recipient', index].join('_')}
        config={{
          type:'text',
          required: true,
          placeholder: 'Choice',
          id: `choice${index}`,
          name: `choice${index}`,
          defaultValue: this.poll.choices[index],
          className: 'poll__control_panel__input',
          onChange: (e) => this.updateField(`choices[${index}]`, e)
        }}
      />
    })

    return (
      <Fragment>
        { this.props.newPoll.url && this.getSuccessMessage() }

        <form className="poll" onSubmit={(e) => this.create(e)}>
          <Link className="back_to_polls" to="/">◄ Back</Link>
          <h1>Create a new question</h1>

          <Area>
            <Form.InputText
              icon="rocket"
              config={{
                type:'text',
                required: true,
                placeholder: 'Question',
                id: 'question',
                name: 'question',
                defaultValue: this.poll.question,
                onChange: (e) => this.updateField('question', e)
              }}
            />
          </Area>

          <Area>
            { choices }

            <div className="poll__control_panel">
              { sholdHaveDecreaseButton && <Button
                size="small"
                kind="primary"
                className="poll__control_panel__button"
                config={{
                  type: 'button',
                  onClick: () => this.manageChoices('-')
                }}
                > - </Button>
              }

              <Button
                size="small"
                kind="primary"
                className="poll__control_panel__button"
                config={{
                  type: 'button',
                  onClick: () => this.manageChoices('+')
                }}
              > + </Button>
            </div>
          </Area>

          <Button
            kind="primary"
            className="poll__voting_button"
            promise={this.props.loading}
            config={{
              type: 'submit'
            }}
          >
            save
          </Button>
        </form>
      </Fragment>
    )
  }
}

export default connector(withRouter(CreatePoll))
