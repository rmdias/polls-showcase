import { connect } from 'react-redux'

export default connect(
  (state, ownProps) => ({
    store: ownProps.store,
    history: ownProps.history
  }),
  (dispatch) => ({ })
)
