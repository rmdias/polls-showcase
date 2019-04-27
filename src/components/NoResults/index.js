import React from 'react'
import { Area } from 'luna-ui-lib'

import './styles.css'

export default function NoResults(props) {
  return (
    <Area className="polls__no_results">
      <strong>No data found <span role="img" aria-label="sad face">😢</span></strong>
    </Area>
  )
}
