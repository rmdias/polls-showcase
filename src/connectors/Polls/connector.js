import _ from 'lodash'
import { connect } from 'react-redux'
import { polls } from 'actions/polls'

export default connect(
  (state, ownProps) => ({
    pollsList: _.get(state, 'polls.list', []),
    loading: _.get(state, 'polls.loading', true)
  }),
  (dispatch) => ({
    onFetchPolls: page => dispatch(polls.fetch.request())
  })
)
