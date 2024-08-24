import React from 'react'
import "./Status.css"

const Status = ({statu,imgstatu}) => {
  return (
    <div className='status'>
        <div className="stat-img">
            <img src={imgstatu} alt="" />
            <h2>{statu}</h2>
        </div>
      
    </div>
  )
}

export default Status
