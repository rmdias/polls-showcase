import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Area } from 'luna-ui-lib'

import PercentageBar from 'components/PercentageBar'

import './styles.css'

export default class ChoiceItem extends PureComponent {
  static propTypes = {
    active: PropTypes.bool,
    choice: PropTypes.object,
    totalvotes: PropTypes.number,
    biggernumber: PropTypes.number
  }

  render() {
    const values = [
      { color: '#b2e2bf', amount: this.props.choice.votes },
      { color: '#c7c7c7', amount: this.props.biggernumber }
    ]
    const active = this.props.active && 'poll__choice_selected'

    return (
      <div onClick={this.props.onClick}>
        <Area className={`poll__choice_item ${active}`}>
          <div><strong>{ this.props.choice.choice }</strong></div>
          <div>{ this.props.choice.votes } votes</div>
          <div>{ Math.floor(((this.props.choice.votes / this.props.totalvotes) || 0) * 100) }%</div>
          <div className="poll__choice_percentage"><PercentageBar values={values} width={200}/></div>
        </Area>
      </div>
    )
  }
}
