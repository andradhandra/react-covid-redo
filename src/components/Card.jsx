import React from 'react'

function Card(props) {
  const { cases } = props
  console.log(cases)
    return (
      <div className="Card">
        <h6>Confirmed cases:</h6>
        <h3>{ cases }</h3>
      </div>
    )
}

export default Card