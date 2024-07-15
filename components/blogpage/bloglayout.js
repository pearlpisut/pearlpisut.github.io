import React from 'react'
import { marked } from 'marked'
import './bloglayout.css'

const Bloglayout = ({prop}) => {
  return (
    <div id="blog" className='w-3/4 md:w-3/5'>
      <h1>{prop.id}</h1>
      <div id="content-wrap" dangerouslySetInnerHTML={{ __html: marked(prop.content) }}></div>
    </div>
  )
}

export default Bloglayout