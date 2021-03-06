import _ from 'lodash'
import { POLLS } from 'actions/polls'

const initialState = {
  list: [],
  hasMore: false,
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POLLS.FETCH.REQUEST: {
      const pollsState = _.cloneDeep(state)

      pollsState.hasMore = false

      return pollsState
    }
    case POLLS.FETCH.SUCCESS: {
      const pollsState = _.cloneDeep(state)
      const nextPage = action.response.headers.link.indexOf('rel="next"') > -1

      if (nextPage) {
        pollsState.hasMore = true
      }

      pollsState.list = [...pollsState.list, ...action.response.data]

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
    case POLLS.CLEAN: {
      return initialState
    }
    default:
      return state
  }
}
