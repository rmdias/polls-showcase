const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'
const LOADING = 'LOADING'

export const createRequestTypes = (base) => {
  return [REQUEST, SUCCESS, FAILURE, LOADING].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

export const action = (type, payload = {}) => ({ type, ...payload })