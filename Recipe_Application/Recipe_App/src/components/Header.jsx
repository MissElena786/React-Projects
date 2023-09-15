import React, { useState } from 'react'
import {ImSpoonKnife} from 'react-icons/im'
import { Link } from 'react-router-dom'
import {RxHamburgerMenu} from 'react-icons/rx'

function Header() {

  // const [isActive, setIsActive] = useState(false);



  

  return (
  
    <header className= ' relative header text-yellow-500 z-20 '>
      <div className='  flex text-3xl'>

          {/* <span className=''
           onClick={hamburger}
          ><RxHamburgerMenu/></span> */}
        {/* <div className='hidden '>
           <div className= 'hamburger absolute list-none top-0 left-0 bg-gray-100 z-max min-w-[17rem] text-lg p-8  min-h-screen'>
          <li className=''> <Link to='/'> Home</Link></li>
            <li className=''><Link to='/about'> About</Link></li>
         <li className=''><Link to='/services'>Services</Link></li>
            <li className=''><Link to='/contact'>Contact</Link></li>
           

            <div className='absolute bottom-0 left-0'>
            <button className='btn w-full' onClick={login}>Login</button> 
            <button className='btn w-full' onClick={logout}>Logout</button>
          </div>
          </div >
        
          <div>

          </div>
        </div> */}
      <span className='ml-4 italic'>Recipe</span>   <ImSpoonKnife/> 
      </div>
      <div >
          <ul className='nav '>
            <li className='nav-item'> <Link to='/'> Home</Link></li>
            <li className='nav-item'><Link to='/about'> About</Link></li>
         <li className='nav-item'><Link to='/services'>Services</Link></li>
            <li className='nav-item'><Link to='/contact'>Contact</Link></li>
          </ul>
      </div>
      </header>
  )
}

export default Header
