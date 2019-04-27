import _ from 'lodash'
import { connect } from 'react-redux'
import { poll } from 'actions/poll'

export default connect(
  (state, ownProps) => ({
    poll: _.get(state, 'poll.data', {}),
    loading: _.get(state, 'poll.loading', true)
  }),
  (dispatch) => ({
    onVote: choiceId => dispatch(poll.update.request(choiceId)),
    onFetchPoll: questionId => dispatch(poll.fetch.request(questionId))
  })
)
