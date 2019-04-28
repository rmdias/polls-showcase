import { action, createRequestTypes } from 'actions/utils'

export const POLL = {
  CLEAN: 'FETCH_CLEAN_POLL',
  SAVE: createRequestTypes('SAVE_POLL'),
  FETCH: createRequestTypes('FETCH_POLL'),
  UPDATE: createRequestTypes('UPDATE_POLL')
}

export const poll =  {
  save: {
    request: pollData => action(POLL.SAVE.REQUEST, { pollData }),
    success: response => action(POLL.SAVE.SUCCESS, { response }),
    failure: (error, requests) => action(POLL.SAVE.FAILURE, { error, requests }),
    loading: toState => action(POLL.SAVE.LOADING, { toState })
  },
  fetch: {
    clean: _ => action(POLL.CLEAN),
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
