import _ from 'lodash'
import { connect } from 'react-redux'
import { polls } from 'actions/polls'

export default connect(
  (state, ownProps) => ({
    pollsList: _.get(state, 'polls.list', []),
    loading: _.get(state, 'polls.loading', true),
    hasMore: _.get(state, 'polls.hasMore', false)
  }),
  dispatch => ({
    onCleanPolls: _ => dispatch(polls.clean()),
    onFetchPolls: page => dispatch(polls.fetch.request(page))
  })
)
