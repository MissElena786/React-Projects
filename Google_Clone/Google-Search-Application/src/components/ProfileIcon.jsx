import React from 'react'
import {TbGridDots} from 'react-icons/tb'
import ProfileRing from '../assets/profile-ring.svg'
import profile from '../assets/profile-200x200.jpg'

function ProfileIcon() {
  return (
    <div className='flex gap-2'>
      <span className='h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05] '>
        <TbGridDots size={20} color='#5f6368'/>
      </span>
      <span className='h-10 w-10 relative flex justify-center items-center'>
    <img className='absolute' src={ProfileRing} alt="image" />
    <span className='h-8 rounded-full w-full  overflow-hidden'>
    <img className='h-full w-full object-cover' src="https://st3.depositphotos.com/1561359/12975/i/450/depositphotos_129758586-stock-photo-3d-green-letter-g.jpg" alt="image" />

    </span>
      </span>
    </div>
  )
}

export default ProfileIcon
