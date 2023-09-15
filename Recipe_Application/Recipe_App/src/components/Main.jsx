import React from 'react'
import  '../App.css'
import Header from './Header'
import Tabs from './Tabs'

function Main() {
  return (
    <div className='Container'>
         {/* <Header/> */}
       <main className='main'>
         <div className='main-heading'>
            <h1 className='text-yellow-500'>Recipe Restorent</h1>
            <p className='text-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nam labore corrupti fugit? Cupiditate facilis, quod inventore deleniti similique necessitatibus totam doloremque eum tempore fugiat
                provident consequatur unde sed distinctio eveniet.</p>
         </div>
       </main>

       <Tabs/>
    </div>
  )
}

export default Main
