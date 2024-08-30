import React, { useState, useEffect } from 'react';
import './blogsection.scss'
import Link from 'next/link';

const BlogSection = ({prop}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentContent, setCurrentContent] = useState(<div>Blog section is loading</div>);
  const [currentTag, setCurrentTag] = useState('all')

  const genColor = (tag, color) => {
    return `${tag == currentTag ? `bg-${color}-500` : `bg-${color}-300`} hover:bg-${color}-500`
  }

  const notes = prop
  const notes_shown = currentTag == "all" ? notes : notes.filter(note => note.tag.some(tag => tag === currentTag))
  const notesPerPage = 5;
  const renderNotes = () => {
    const startIndex = (currentPage - 1) * notesPerPage;
    const endIndex = startIndex + notesPerPage;
    setCurrentContent(notes_shown.slice(startIndex, endIndex).map(note => {
      const blogUrl = `/${note.id}`
      return (
        <div key={note.id} id="blog-box" className='mb-5'>
          <div id="blog-box-text" className='lg:w-2/3 w-3/4'>
            <div id="title" className='font-sans w-11/12 xl:text-2xl md:text-2xl text-lg font-bold'>
              <Link href={blogUrl} className=''>
                    {note.title}
              </Link>
            </div>
            <div id="highlight" className='font-serif lg:text-sm text-xs w-11/12'> {note.highlight} </div>
            <div id="written" className='lg:text-sm text-xs'>By Pearl on {note.written_date}</div>
          </div>
          <Link href={blogUrl} className='lg:w-1/3 w-1/4'>
            <img className='' src={`/pictures/${note.id}.jpg`} />
          </Link>
        </div>
      )}
    ));
  };
  const totalPages = Math.ceil(notes.length / notesPerPage);


  const nextPage = () => {
    const totalPages = Math.ceil(notes.length / notesPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    renderNotes();
  }, [currentPage, currentTag]);

  // to reset to show page 1 when choosing a different tag.
  useEffect(() => {
    setCurrentPage(1)
  }, [currentTag])

  return (
    <div>
      <div id="tags-bar">
        <div className={`tag ${currentTag=="all" ? "bg-zinc-500" : "bg-zinc-200"} 
                        hover:bg-zinc-500 text-white font-normal py-1 px-3 rounded-full`} 
          onClick={()=>setCurrentTag("all")}>all</div>
        <div className={`tag ${currentTag=="highlighted" ? "bg-orange-500" : "bg-amber-300"} 
                        hover:bg-orange-500 text-white font-normal py-1 px-3 rounded-full`} 
          onClick={()=>setCurrentTag("highlighted")}>highlighted</div>
        <div className={`tag ${currentTag=="travel" ? "bg-indigo-500" : "bg-indigo-200"} 
                        hover:bg-indigo-500 text-white font-normal py-1 px-3 rounded-full`}
          onClick={()=>setCurrentTag("travel")}>travel</div>
        <div className={`tag ${currentTag=="work" ? "bg-blue-500" : "bg-blue-200"} 
                        hover:bg-blue-500 text-white font-normal py-1 px-3 rounded-full`} 
          onClick={()=>setCurrentTag("work")}>work</div>
        <div className={`tag ${currentTag=="uni" ? "bg-emerald-500" : "bg-emerald-200"} 
                        hover:bg-emerald-500 text-white font-normal py-1 px-3 rounded-full`} 
          onClick={()=>setCurrentTag("uni")}>uni</div>
        <div className={`tag ${currentTag=="self-discovery" ? "bg-cyan-600" : "bg-cyan-200"} 
                        hover:bg-cyan-600 text-white font-normal py-1 px-3 rounded-full`} 
          onClick={()=>setCurrentTag("self-discovery")}>self-discovery</div>
      </div>
      <div id="notes-container">
        {currentContent}
      </div>
      <div className="blog-navigator">
        <div>
          <button 
            className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1.5 px-3 rounded-l' 
            style={{borderRight: "1px solid black", cursor: currentPage===1 ? "not-allowed" : "pointer"}}
            onClick={prevPage} disabled={currentPage === 1}>
              prev
          </button>
          <button 
            className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1.5 px-3 rounded-r'
            style={{cursor: currentPage===totalPages ? "not-allowed" : "pointer"}}
            onClick={nextPage} disabled={currentPage === totalPages}>
              next
          </button>
        </div>
        <div>Page {currentPage} of {Math.ceil(notes_shown.length/5)}</div>
      </div>
    </div>
  );
};

export default BlogSection;
