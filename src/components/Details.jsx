import React from 'react'

const Details = ({ students, live }) => {

  return (
    <div className="details">
      <div className="d-left">
        Todal Students :{students.length}
      </div>
      <div className="d-right">
        Parsent :{live}
      </div>
    </div>
  )
}

export default Details
