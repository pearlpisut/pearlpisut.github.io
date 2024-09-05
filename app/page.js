'use client'

import './style.scss'
import BlogSection from '@/components/mainpage/blogsection.jsx';
import mergedData from '@/constants';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="body profile-sec flex flex-wrap w-3/4 lg:w-1/2">
        <div className="profile-pic w-7/12 sm:w-3/4 md:w-5/12">
          <img src='/pictures/pearl1.jpg' className='profile-pic'/>
        </div>
        <div className="bio w-full md:w-7/12">
          <h1 className="bio-desc text-center md:text-left text-xl sm:text-2xl font-semibold md:mt-0 mt-5">
            Pearl Phutanate Pisutsin
          </h1>
          <div className="bio-desc">
            Hey! It's Pearl. I've made this site to tell you more about myself.
          </div>
          <div className="bio-desc">
              {/* <Link className='prof-link' id='cuhk' href='https://www.cse.cuhk.edu.hk/'> (CUHK)</Link>.  */}
            I'm a final year CS major at The Chinese University of Hong Kong. 
          </div>
          <div className="bio-desc">
            I'm currently studying <secion className="text-blue-600">Deep Learning</secion>, and have worked 
            in <secion className="text-blue-600">full-stack dev </secion>  
            at <Link className='prof-link underline text-indigo-700 hover:text-amber-500' id='pantheon' href='https://www.pantheonlab.ai/'>Pantheon Lab</Link>. 
            {/* I do competitive programming mainly in  <secion className="text-blue-600">C++</secion> on 100+ problems on 
            <Link className='prof-link underline text-indigo-700 hover:text-amber-500' id='pantheon' href='https://leetcode.com/u/chris_pearl/'> Leetcode</Link>. */}
            See my CV for full details!
            {/* , previously at
            <Link className='prof-link' id='pantheon' href='https://www.pantheonlab.ai/'> Pantheon Lab, </Link>
            Hong Kong. */}
          </div>
          <div className="bio-desc">
            My interests lay 
            in <secion className="text-blue-600">sports</secion> 
            , <secion className="text-blue-600">entrepreneurship</secion>,  
            and <secion className="text-blue-600">story-telling</secion>.
            I aspire to truly discover my passions and be in the position to pursue them while
            putting smiles on people's face.
          </div>
          <div id="contact-blog" className="bio-desc">
            <div>Convinced?! Find me at </div>
            <div id="contact" className='mt-2'>
              <a className='text-indigo-700 hover:text-amber-500' href="mailto:pearlphutanate@gmail.com" target="_blank">(email)</a>
              <a className='text-indigo-700 hover:text-amber-500' href="https://www.linkedin.com/in/phutanate/" target="_blank">(linkedin)</a>
              <a className='text-indigo-700 hover:text-amber-500' href="https://github.com/pearlpisut" target="_blank">(github)</a>
              <a className='text-indigo-700 hover:text-amber-500' href="https://www.instagram.com/pearl1st/" target="_blank">(instagram)</a>
              <a className='text-indigo-700 hover:text-amber-500' href="https://github.com/pearlpisut/pearlpisut.github.io/blob/master/public/cv/cv.pdf" target="_blank">(CV)</a>
            </div>
          </div>
        </div>
      </div>
      <div className="body w-3/4 lg:w-1/2">
        I also try writing these blogs. Hope someone reads it a bit LOLL.
      </div>
      <div className="body blog-sec w-3/4 lg:w-1/2">
        <BlogSection prop={mergedData}/>
      </div>
    </main>
  );
}
