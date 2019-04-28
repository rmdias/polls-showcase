import _ from 'lodash'
import { POLL } from 'actions/poll'

export default (state, action) => {
  switch (action.type) {
    case POLL.SAVE.REQUEST: {
      const pollState = _.cloneDeep(state)

      return pollState
    }
    case POLL.SAVE.SUCCESS: {
      const pollState = _.cloneDeep(state)

      pollState.newPoll = action.response

      return pollState
    }
    case POLL.SAVE.FAILURE: {
      const pollState = _.cloneDeep(state)

      return pollState
    }
    case POLL.SAVE.LOADING: {
      const pollState = _.cloneDeep(state)

      pollState.loading = action.toState

      return pollState
    }
    default:
      return state
  }
}
