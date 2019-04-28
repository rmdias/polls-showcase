import pollFetch from './fetch'
import pollSave from './save'
import pollUpdate from './update'

const initialState = {
  data: { },
  loading: false
}

export default (state = initialState, action) => {
  const regex = /(FETCH_(.)+)|(SAVE_(.)+)|(UPDATE_(.)+)/g
  const callDesignedReducer = regex.exec(action.type) || 'DEFAULT'

  switch (callDesignedReducer.input) {
    case callDesignedReducer[1]:
      return pollFetch(state, action)
    case callDesignedReducer[3]:
      return pollSave(state, action)
    case callDesignedReducer[5]:
      return pollUpdate(state, action)
    default:
      return state
  }
}
