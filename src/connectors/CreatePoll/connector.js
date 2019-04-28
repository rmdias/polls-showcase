import _ from 'lodash'
import { connect } from 'react-redux'
import { poll } from 'actions/poll'

export default connect(
  (state, ownProps) => ({
    newPoll: _.get(state, 'poll.newPoll', {}),
    loading: _.get(state, 'poll.loading', true)
  }),
  (dispatch) => ({
    onCreate: pollData => dispatch(poll.save.request(pollData))
  })
)
