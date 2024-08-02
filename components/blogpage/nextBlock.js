import React from 'react'
import './nextBlock.css'
import Link from 'next/link'

const NextBlock = ({id, title, readTime}) => {
  const imgSrc = `/pictures/${id}.jpg`

  return (
    <div>
      <div id="next-wrapper" className='mt-4'>
        <div className='lg:w-4/6 w-7/12' id="next-teaser">
          <Link href={`/${id}`} id="next-name" className='lg:text-lg text-base font-semibold'>
            {title}
          </Link>
          <div id="next-read-time" className='lg:mt-5 mt-3'>{readTime} mins read</div>
        </div>
        <img className='lg:w-1/6 w-4/12' src={imgSrc}/>
      </div>

    </div>
  )
}

export default NextBlock