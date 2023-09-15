import axios from 'axios'
import React, {useEffect, useState} from 'react'
import '../Component.css'
import { useNavigate } from 'react-router-dom'

function About() {

   const [text, setText] = useState("")

   const navigate = useNavigate()
 
   const [data, setDAta] = useState([])
   const [message, setMessage] = useState("")
   const [loading, setLoading] = useState(false)
 
 
   const fetchData = async () => {
     const res = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=food&app_id=${import.meta.env.REACT_APP_API_ID}&app_key=${import.meta.env.REACT_APP_API_KEY}`)
     setDAta(res.data.hits)
     console.log(res.data.hits)
     setLoading(true)
     if (res.data.hits.length === 0) {
       setMessage("OOP'S NOT FOUND")
     } else {
       setMessage("")
     }
 
 
   }
   useEffect(()=>{
      fetchData()
   },[])
  return (
    <div className=' p-10 min-h-screen pt-20 bg-slate-100'>
      <main className='border-b-2 border-gray-300   min-h-[70vh] flex justify-center items-center '>
         <div className='w-[70%] shadow relative text-white bg-yellow-400 about-main bg-slate-400'>
            <h1 className='md:text-4xl mb-2 '>We are providing a online food</h1>
            <p className='text-gray-100 pb-3 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas praesentium dolorum
                officiis ad quis officia libero maiores delectus,
                ducimus repellat odio aperiam nihil optio. Deserunt repellat ut atque neque mollitia.</p>
                <button 
                onClick={()=> navigate('/contact')}
                className='border-2  shadow-md rounded text-yellow-500 px-[1rem] py-[0.5rem] absolute bottom-3 right-3'>Contact Us</button>
         </div>
      </main>


      <section className='flex  pt-4 flex-col flex-wrap justify-center items-center gap-6 bg-pin200'>
         <div><h1 className= 'about-heading md:text-3xl p-2 '>We are providing the foods  </h1></div>
         
         <div className='flex flex-wrap gap-5 justify-center items-center'>
         {
            data.map((value, index)=>
                (
                  <div key={index} className="card md:w-[17rem] bg-base-100 shadow-xl">
                  <figure><img src={value.recipe.image} alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {value.recipe.label}
                      <div className="badge badge-secondary">Tasty</div>
                    </h2>
                    {/* <p>{value.recipe.mealType}</p> */}
                   
                  </div>
                </div>
                )
            )
         }
</div>
      </section>
    </div>
  )
}

export default About
