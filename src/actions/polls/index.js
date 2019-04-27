import { action, createRequestTypes } from 'actions/utils'

export const POLLS = {
  FETCH: createRequestTypes('FETCH_POLLS')
}

export const polls =  {
  fetch: {
    request: page => action(POLLS.FETCH.REQUEST, { page }),
    success: response => action(POLLS.FETCH.SUCCESS, { response }),
    failure: (error, requests) => action(POLLS.FETCH.FAILURE, { error, requests }),
    loading: toState => action(POLLS.FETCH.LOADING, { toState })
  }
}
