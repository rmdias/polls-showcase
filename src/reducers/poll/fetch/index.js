import _ from 'lodash'
import { POLL } from 'actions/poll'

const initialState = {
  data: {},
  loading: false
}

export default (state, action) => {
  switch (action.type) {
    case POLL.FETCH.REQUEST: {
      const pollState = _.cloneDeep(state)

      pollState.data = {}

      return pollState
    }
    case POLL.FETCH.SUCCESS: {
      const pollState = _.cloneDeep(state)

      pollState.data = action.response

      return pollState
    }
    case POLL.FETCH.FAILURE: {
      const pollState = _.cloneDeep(state)

      return pollState
    }
    case POLL.FETCH.LOADING: {
      const pollState = _.cloneDeep(state)

      pollState.loading = action.toState

      return pollState
    }
    case POLL.CLEAN: {
      return initialState
    }
    default:
      return state
  }
}
