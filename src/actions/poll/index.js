import { action, createRequestTypes } from 'actions/utils'

export const POLL = {
  FETCH: createRequestTypes('FETCH_POLL'),
  UPDATE: createRequestTypes('UPDATE_POLL')
}

export const poll =  {
  fetch: {
    request: questionId => action(POLL.FETCH.REQUEST, { questionId }),
    success: response => action(POLL.FETCH.SUCCESS, { response }),
    failure: (error, requests) => action(POLL.FETCH.FAILURE, { error, requests }),
    loading: toState => action(POLL.FETCH.LOADING, { toState })
  },
  update: {
    request: choiceId => action(POLL.UPDATE.REQUEST, { choiceId }),
    success: response => action(POLL.UPDATE.SUCCESS, { response }),
    failure: (error, requests) => action(POLL.UPDATE.FAILURE, { error, requests }),
    loading: toState => action(POLL.UPDATE.LOADING, { toState })
  }
}
