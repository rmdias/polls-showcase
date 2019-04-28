import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller'

import { CircularLoader, Button } from 'luna-ui-lib'

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
    hasMore: PropTypes.bool,
    loading: PropTypes.bool,
    pollsList: PropTypes.array,
    onFetchPolls: PropTypes.func
  }

  componentDidMount() {
    this.props.onFetchPolls(1)
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

        <Link to="/new" className="poll__create_new">
          <Button size="large" kind="primary">
            Create
          </Button>
        </Link>
        <h1>Questions</h1>
        { showLoader && loader }
        { showNoResults && <NoResults /> }

        <div className="polls_items">
          { Items }
          <InfiniteScroll
            pageStart={1}
            loadMore={(e) => this.props.onFetchPolls(e)}
            hasMore={this.props.hasMore}
            loader={loader}
          >
            { Items }
          </InfiniteScroll>
        </div>
      </div>
    )
  }
}

export default connector(Polls)
