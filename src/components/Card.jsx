import React from 'react'

function Card(props) {
  const { name, confirmed, recovered, deaths } = props.cases

  return (
    <>
      <h1 className="title">{ props.title }</h1>
      <div className="Card">
        <div className="confirmed">
          <h3>{name ? name : null}</h3>
          <h6>Confirmed cases:</h6>
          <h3>{confirmed ? confirmed.value : null}</h3>
        </div>
        <div className="recovered-death">
          <div className="recovered">
            <h6>Recovered:</h6>
            <p><span>{recovered ? recovered.value : null}</span></p>
          </div>
          <div className="death">
            <h6>Death:</h6>
            <p>{deaths ? deaths.value : null}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card