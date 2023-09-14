import React from 'react'
import ProfileIcon from './ProfileIcon'

function HomeHeaders() {
  return (
    <header className='h-16  flex justify-center md:justify-end items-center gap-4 px-5'>
      <div className='flex gap-4 '>
        <span className='text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer'>Gmail</span>
        <span className='text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer'>Images</span>
      </div>
      <ProfileIcon/>
    </header>
  )
  
}

export default HomeHeaders
