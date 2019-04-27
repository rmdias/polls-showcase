import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { CircularLoader } from 'luna-ui-lib'

import NoResults from 'components/NoResults'
import PollItem from 'components/PollItem'

import './styles.css'
import connector from './connector'

class Polls extends PureComponent {
  constructor(props) {
    super(props)

    window.scrollTo(0, 0)
  }

  static propTypes = {
    loading: PropTypes.bool,
    pollsList: PropTypes.array,
    onFetchPolls: PropTypes.func
  }

  componentDidMount() {
    this.props.onFetchPolls()
  }

  render() {
    const showLoader = this.props.loading && !this.props.pollsList.length
    const showNoResults = !this.props.loading && !this.props.pollsList.length
    const loader = <CircularLoader className="polls__loader" key={0} kind="primary" size={50} border={1} />
    const Items = this.props.pollsList.map(poll => {
      return <PollItem key={JSON.stringify(poll)} poll={poll}></PollItem>
    })

    return (
      <div className="polls">
        <h1>Questions</h1>
        { showLoader && loader }
        { showNoResults && <NoResults /> }

        <div className="polls_items">
          { Items }
        </div>
      </div>
    )
  }
}

export default connector(Polls)
