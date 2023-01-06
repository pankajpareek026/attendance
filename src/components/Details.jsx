import React from 'react'

const Details = ({ students, live }) => {

  return (

    <div className="details">
      <div className="d-left">
        Todal Students :{0}
      </div>
      <div className="d-right">
        Parsent :{live}
      </div>
    </div>
  )
}

export default Details