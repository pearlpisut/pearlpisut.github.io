'use client'

import React, {useState} from 'react'
import { marked } from 'marked'
import './bloglayout.css'
import NextBlock from './nextBlock'

const Bloglayout = ({prop, allBlock}) => {
  const [currentProp, setCurrentProp] = useState(prop); // this is initial prop
  const style = "text-white text-sm md:text-base font-normal py-1 px-3 rounded-full"
  const tagColor = {
    "all": `bg-zinc-400 ${style}`,
    "highlighted": `bg-orange-400 ${style}`,
    "travel" : `bg-indigo-400 ${style}`,
    "work" : `bg-blue-400 ${style}`,
    "uni" : `bg-emerald-400 ${style}`,
    "self-discovery" : `bg-cyan-400 ${style}`
  }
  const imgSrc = `/pictures/${prop.id}.jpg`
  const compute_readTime = (content_length) => {
    return Math.ceil(content_length/1200)
  }

  const findNextIndex = (currentId) => {
    const currentIndex = allBlock.findIndex(block => block.id === currentId);
    return (currentIndex + 1) % allBlock.length; // Ensures wrapping back to the start
  };

  const handleNextClick = () => {
    const nextIndex = findNextIndex(currentProp.id);
    setCurrentProp(allBlock[nextIndex]);
  };
  

  return (
    <div id="blog" className='w-3/4 lg:w-1/2'>
      <div id="blog-header">
        <div id="blog-heading" className='flex flex-col items-center justify-center text-center md:mb-10 mb-5'>
          <h1 id="blog-title" className='font-bold text-white text-xl sm:text-2xl md:text-5xl w-5/6'>{prop.title}</h1>
          <div id="blog-written-date" className='lg:text-base text-sm'>{prop.written_date}</div>
          <div id="blog-tags">
            {prop.tag.map((tag, index) => (
              <div key={index} className={`tag ${tagColor[tag]}`}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <img id="blog-pic" src={imgSrc} />
      </div>
      <div id='read-time' className='mt-5 mb-4'>Read time: {compute_readTime(prop.content.length)} mins</div>
      <div id="blog-content" className='font-serif lg:leading-loose leading-relaxed' dangerouslySetInnerHTML={{ __html: marked(prop.content) }}></div>
      <NextBlock
        {...{
          id: allBlock[findNextIndex(currentProp.id)].id,
          title: allBlock[findNextIndex(currentProp.id)].title,
          readTime: compute_readTime(allBlock[findNextIndex(currentProp.id)].content.length)
        }}
        onClick={handleNextClick}
      />
    </div>
  )
}

export default Bloglayout