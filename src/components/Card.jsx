import React from 'react'

function Card(props) {
  if (!props.cases.confirmed) return <p>loading...</p>
  const { confirmed, recovered, deaths } = props.cases

  return (
    <>
      <h1 className="title">{ props.title }</h1>
      <div className="Card">
        <div className="confirmed">
          <h6>Confirmed cases:</h6>
          <h3>{confirmed.value}</h3>
        </div>
        <div className="recovered-death">
          <div className="recovered">
            <h6>Recovered:</h6>
            <p><span>{recovered.value}</span></p>
          </div>
          <div className="death">
            <h6>Death:</h6>
            <p>{deaths.value}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card