import { action, createRequestTypes } from 'actions/utils'

export const POLLS = {
  CLEAN: 'CLEAN_POLLS',
  FETCH: createRequestTypes('FETCH_POLLS')
}

export const polls =  {
  clean: _ => action(POLLS.CLEAN),
  fetch: {
    request: page => action(POLLS.FETCH.REQUEST, { page }),
    success: response => action(POLLS.FETCH.SUCCESS, { response }),
    failure: (error, requests) => action(POLLS.FETCH.FAILURE, { error, requests }),
    loading: toState => action(POLLS.FETCH.LOADING, { toState })
  }
}
