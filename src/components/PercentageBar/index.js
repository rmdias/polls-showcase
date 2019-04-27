import React from 'react'

const PercentageBar = ({ values, width, fontSize }) => {
  const total = values.reduce((acc, value) => acc += value.amount, 0)
  return (
    <div style={{
      width,
      display: 'flex'
    }}>
      {
        values.map(value => {
          const relativeSize = ((value.amount * 100) / total) || 0
          const partialWidth =  width * (relativeSize / 100)
          return (
            <div
              key={JSON.stringify(value)}
              style={{
                padding: '1px 2px',
                fontSize,
                width: partialWidth,
                height: '16px',
                backgroundColor: value.color
              }}>
            </div>
          )
        })
      }
    </div>
  )
}

export default PercentageBar