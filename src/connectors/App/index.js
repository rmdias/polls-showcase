import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { Theme } from 'luna-ui-lib'
import { ConnectedRouter } from 'connected-react-router'

import { Route } from 'react-router-dom'

// Connectors
import Polls from 'connectors/Polls'
import PollDetail from 'connectors/PollDetail'

import connector from './connector'

class App extends PureComponent {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Theme>
        <ConnectedRouter history={this.props.history}>
          <div className="container">
            <Route exact path="/" component={() => <Polls />} />
            <Route exact path="/questions/:questionId" component={() => <PollDetail />} />
          </div>
        </ConnectedRouter>
        </Theme>
      </Provider>
    )
  }
}

export default connector(App)