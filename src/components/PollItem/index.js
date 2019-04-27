import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import moment from 'moment'

import { Area, Hint } from 'luna-ui-lib'

import './styles.css'

export default class PollItem extends PureComponent {
  static propTypes = {
    poll: PropTypes.object
  }

  render() {
    return (
      <Link className="poll__item" to={`${this.props.poll.url}`}>
        <Area className="poll__item__area">
          <h4 className="poll__item__title"><strong>{this.props.poll.question}</strong></h4>
          <Hint>Published at {moment(this.props.poll.published_at).format('DD.MM.YYYY hh:mm:ss')}</Hint>
          <p>{this.props.poll.choices.length} choices</p>
        </Area>
      </Link>
    )
  }
}
