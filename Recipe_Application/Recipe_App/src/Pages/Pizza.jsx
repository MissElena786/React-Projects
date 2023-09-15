import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Pages.css'

function Pizza() {
   const [iconData, setIconDta] = useState([])
   const [loading, setLoading] = useState(false)


 const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=${import.meta.env.REACT_APP_API_ID}&app_key=${import.meta.env.REACT_APP_API_KEY}`
   

   const fetchDataIcons =async ()=>{

      

      const res = await axios.get(URL)
     setIconDta(res.data.hits)
    setLoading(true)
  
    
   }
 
   useEffect(()=>{
     fetchDataIcons()
   },[])

  return (
   <div className='pizza p-20 min-h-screen bg-gray-100'>
      <h1 className='text-6xl mb-10 text-center font-extrabold text-yellow-500'>Pizza</h1>
          <div className='flex  justify-center items-center gap-10 flex-wrap w-100%] '>
       {
         !loading ? 
         <div className='text-center'>
         <span className="loading loading-ball text-center text-yellow-500 loading-lg"></span>
         <p className='text-center text-yellow-500 text-2xl'>Loading</p>
       </div>
         :
          iconData.map((value, index)=>(
            <div key={index}>
          
            <div className='iconImage' key={index}>
               <img className='' src={value.recipe.image} alt="image" />
               <p className='w-[18rem] text-sm  text-center p-1 text-gray-500'>{value.recipe.label}</p>
            </div>
         
            </div>
          ))
       }

    </div>
           
   </div>

  )
}

export default Pizza
