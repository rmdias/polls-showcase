import _ from 'lodash'
import { POLL } from 'actions/poll'

export default (state, action) => {
  switch (action.type) {
    case POLL.UPDATE.REQUEST: {
      const pollState = _.cloneDeep(state)

      return pollState
    }
    case POLL.UPDATE.SUCCESS: {
      const pollState = _.cloneDeep(state)
      const replaceTarget = _.findIndex(pollState.data.choices, { url: action.response.url })

      pollState.data.choices[replaceTarget] = action.response

      return pollState
    }
    case POLL.UPDATE.FAILURE: {
      const pollState = _.cloneDeep(state)

      return pollState
    }
    case POLL.UPDATE.LOADING: {
      const pollState = _.cloneDeep(state)

      pollState.loading = action.toState

      return pollState
    }
    default:
      return state
  }
}
