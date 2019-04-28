import _ from 'lodash'
import { POLLS } from 'actions/polls'

const initialState = {
  list: [ ],
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POLLS.FETCH.REQUEST: {
      const pollsState = _.cloneDeep(state)

      return pollsState
    }
    case POLLS.FETCH.SUCCESS: {
      const pollsState = _.cloneDeep(state)

      pollsState.list = action.response

      return pollsState
    }
    case POLLS.FETCH.FAILURE: {
      const pollsState = _.cloneDeep(state)

      return pollsState
    }
    case POLLS.FETCH.LOADING: {
      const pollsState = _.cloneDeep(state)

      pollsState.loading = action.toState

      return pollsState
    }
    default:
      return state
  }
}
