import React from 'react'
import {FaLocationDot} from 'react-icons/fa6'
import {MdAttachEmail} from 'react-icons/md'
// import {FaLocationDot} from 'react-icons/fa6'
import {FaPhoneVolume} from 'react-icons/fa6'

function Contact() {
  return (
    <div className='min-h-screen py-28 bg-gray-200 '> 
         <div>
             
             <div className='flex justify-center items-center'>
              <form  className='flex flex-col justify-center items-center w-[80%] sm:w-[60%] shadow p-8 md:w-[40%]'>
              <div className='w-full m-3 text-center md:text-4xl text-2xl'>
                <h1>Rgistration Form</h1>
                  </div>
                  <div className='w-full '>
                    <input type="text" className='w-[90%] bg-slate-100 px-4 py-2 rounded-lg m-3' placeholder='Enter your Name' />
                  </div>
                  <div className='w-full '>
                    <input type="number"  className='w-[90%] bg-slate-100 px-4 py-2 rounded-lg m-3' placeholder='Enter your Number' />
                  </div>
                  <div className='w-full '>
                    <input type="email" className='w-[90%] bg-slate-100 px-4 py-2 rounded-lg m-3' placeholder='Enter your email' />
                  </div>
                  <div className='w-full '>
                    <input type="password" className='w-[90%] bg-slate-100 px-4 py-2 rounded-lg m-3' placeholder='Enter your password' />
                  </div>
                  <div className=' shadoe-sm'>
                  <button className="btn hover:bg-gray-500 hover:text-white w-full px-[2rem] bg-gray-600 text-yellow-500">Submit</button>
                  </div>
              </form>
             </div>

             <div className=' mt-20 flex justify-center items-center gap-20'>
              <div className=' shadow-sm rounded p-3  text-center  md:w-[13rem]'>  
              <span className='flex justify-center text-yellow-500'> 

                <MdAttachEmail />
              </span>
                <span className='text-gray-500'>bgulnaz009@gmail.com</span>
              </div>

              <div className=' shadow-sm rounded p-3  text-center md:w-[13rem]'>
                <span className='flex   text-yellow-500 justify-center'>
                  
                <FaPhoneVolume/>
                </span>
                <span className='text-gray-500'> +91 8302450971</span>
              </div>

              <div className=' shadow-sm rounded p-3  text-center md:w-[13rem]'>
                <span className='flex text-yellow-500 justify-center'>
                <FaLocationDot/>
                  
                </span>
                <span className='text-gray-500'>Jaipur , Rajasthan</span>
              </div>
             </div>
         </div>
    </div>
  )
}

export default Contact
