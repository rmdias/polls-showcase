import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import { CircularLoader, Button } from 'luna-ui-lib'

// Components
import ChoiceItem from 'components/ChoiceItem'

import './styles.css'
import connector from './connector'

class PollDetail extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    poll: PropTypes.object,
    onVote: PropTypes.func,
    onFetchPoll: PropTypes.func
  }

  constructor(props) {
    super(props)

    window.scrollTo(0, 0)
    this.state = { selectedChoice: '' }
  }

  handleVotingSelection(choice) {
    if (choice === this.state.selectedChoice) {
      return this.setState((state, props) => ({ selectedChoice: '' }))
    }

    this.setState((state, props) => ({ selectedChoice: choice }))
  }

  vote() {
    this.props.onVote(this.state.selectedChoice)

    setTimeout(() => this.setState((state, props) => ({ selectedChoice: '' })), 500)
  }

  isSelectedChoice(choice) {
    return this.state.selectedChoice === choice.url
  }

  componentDidMount() {
    this.props.onFetchPoll(this.props.match.params.questionId)
  }

  render() {
    const showLoader = this.props.loading && !this.props.poll.question
    const loader = <CircularLoader className="polls__loader" key={0} kind="primary" size={50} border={1} />
    const totalVotes = this.props.poll.choices && this.props.poll.choices.reduce((acc, value) => acc += value.votes, 0)
    const biggerNumber = this.props.poll.choices && this.props.poll.choices.sort((a, b) => a.votes + b.votes)[0].votes

    const Items = this.props.poll.choices && this.props.poll.choices.map(choice => {
      return <ChoiceItem
        key={choice.url}
        choice={choice}
        active={this.isSelectedChoice(choice)}
        totalvotes={totalVotes}
        biggernumber={biggerNumber}
        onClick={() => this.handleVotingSelection(choice.url)}
      />
    })

    return (
      <div className="poll">
        <Link className="back_to_polls" to="/">◄ Back</Link>
        <h1>Question: {this.props.poll.question}</h1>
        { showLoader && loader }

        <div className="poll__choices">
          { Items }
        </div>

        { this.state.selectedChoice && <Button
          kind="primary"
          className="poll__voting_button"
          promise={this.props.loading}
          config={{
            onClick: () => this.vote()
          }}
          >
            save vote
          </Button>
        }
      </div>
    )
  }
}

export default connector(withRouter(PollDetail))
