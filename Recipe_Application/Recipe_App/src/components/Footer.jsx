import React from 'react'
import { ImSpoonKnife } from 'react-icons/im'
import {VscGithub} from 'react-icons/vsc'
import {ImLinkedin} from 'react-icons/im'
function Footer() {
const date =  new Date()
const year = date.getFullYear()
  return (
      <footer className='flex justify-between items-center py-3 text-yellow-500 relative left-0 bottom-0 px-5 bg-slate-700 '>
             <div className='flex text-3xl'>
             <span className='ml-4 italic'>Recipe</span>   <ImSpoonKnife/> 
             </div>
             <div><p className='text-gray-400'>elenacoder@copyrights{year}</p></div>
             <div className='flex gap-2'>
              <span className='text-black md:text-3xl'><VscGithub/></span>
              <span className='text-blue-500 md:text-3xl'><ImLinkedin/></span>
             </div>
      </footer>
  )
}

export default Footer
