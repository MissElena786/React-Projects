import React from 'react'
import logo from '../assets/google-logo.png'
import HomeHeaders from './HomeHeaders'
import Footer from './Footer'
import SearchInput from './SearchInput'




function Home() {
  return (
    <div className='flex h-[100vh] flex-col'>
      <HomeHeaders/>
      <main className='grow flex justify-center'>
         <div className='w-full px-5 flex flex-col items-center mt-44 '>
               <img className='w-[172px] md:w-[272px] mb-8' src={logo} alt="" />
               <SearchInput/>
               <div className='flex gap-2 text-gray-700 m-8'>
                <button className='google-btn  h-9 px-4 bg-gray-100 text-sm rounded-md border hover:border-[#d7d4d4ed] hover:shadow-c2'>Google Search</button>
                <button className='google-btn  h-9 px-4 bg-gray-100 text-sm rounded-md border hover:border-[#d7d4d4ed]  hover:shadow-c2'>I am Feeling Lucky</button>
               </div>
                {/* <p>Google offered in: 
                  हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ
                </p> */}

                <ul className='flex gap-[9px] '>
                Google offered in: 
                  <li className='text-blue-800 hover:underline cursor-pointer'>हिन्दी</li>
                  <li className='text-blue-800 hover:underline cursor-pointer'>বাংলা</li>
                  <li className='text-blue-800 hover:underline cursor-pointer'>తెలుగు</li>
                  <li className='text-blue-800 hover:underline cursor-pointer'>मराठी</li>
                  <li className='text-blue-800 hover:underline cursor-pointer'> தமிழ்</li>
                  <li className='text-blue-800 hover:underline cursor-pointer'>ગુજરાતી</li>
                  <li className='text-blue-800 hover:underline cursor-pointer'>മലയാളം</li>
                  <li className='text-blue-800 hover:underline cursor-pointer'>ਪੰਜਾਬੀ</li>

            
                </ul>
         </div>
       </main>

         <Footer/> 
        
    </div>
  )
}

export default Home
