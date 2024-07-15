import React from 'react'
import './blogpopup.css'

const blogpopup = ({prop}) => {
  return (
    <div className='blog-box'>
      <div>{prop}</div>
    </div>
  )
}

export default blogpopup