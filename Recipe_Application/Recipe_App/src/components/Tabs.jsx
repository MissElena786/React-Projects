import React, { useState } from 'react'
import { FaPizzaSlice } from 'react-icons/fa'
import { BiSearchAlt } from 'react-icons/bi'
import { MdOutlineFoodBank } from 'react-icons/md'
import { GiNoodles, GiHamburger } from 'react-icons/gi'
import {IoIceCream} from 'react-icons/io5'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../Pages/Pages.css'



function Tabs() {

  const [text, setText] = useState("")


  const [data, setDAta] = useState([])
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [dataArr, setDataArr] = useState([])


  const fetchData = async () => {
    const res = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${text}&app_id=${import.meta.env.REACT_APP_API_ID}&app_key=${import.meta.env.REACT_APP_API_KEY}`)
    setDAta(res.data.hits)
    console.log(res.data.hits)
    localStorage.setItem( "data" , JSON.stringify(res.data.hits))
   
    setDataArr(localStorage.getItem('data'))
    setDataArr(localStorage.getItem('data'))
    setLoading(true)
    console.log("arr..", dataArr);
    if (res.data.hits.length === 0) {
      setMessage("OOP'S NOT FOUND")
    } else {
      setMessage("")
    }


  }
  const inputHandleMethod = (e) =>{
     setText(e.target.value)
      // data.filter((ele, idx)=>{
      //         ele.includes(text)
      //         return ele.recipe.label
      // })

  }
  return (
    <>
    <section className='p-20 '>
      <h1 className=' text-yellow-500 text-center mb-10  search-heading'>You can search the Recipe</h1>
      <div className='tabs flex flex-col jutify-center items-center bg-slate-100'>


        <div className='flex w-[70%] inp justify-center items-center m-3'>
          <input type="text" className=' w-[100%] inp-inner  bg-slate-200 p-2 border border-collapse bottom-5'
          //  placeholder='Search here...' value={text} onChange={(e) => setText(e.target.value)} name="" id="" />
           placeholder='Search here...' value={text} onChange={inputHandleMethod} name="" id="" />
          <span className='text-3xl m-1'>
            <BiSearchAlt onClick={fetchData} />
          </span>

        </div>
        <p className='md:text-2xl text-yellow-500 ' >{message} </p>

        <div className='icons  text-yellow-500'>
          <span className="icon" >
            <Link to='/pizza'>
              <FaPizzaSlice /></Link>
          </span >
          <span className="icon">
            <Link to="/noodels" > <GiNoodles /></Link>

          </span>
          <span className="icon">  <Link to='/burger'> <GiHamburger /></Link> </span>
          <span className="icon">
            <Link to='/icecream'>     <IoIceCream/></Link>

          </span>

        </div>


        <div className='flex gap-5  flex-wrap justify-center items-center'>
          {

            data.length > 0 ?

              !loading ? "Loading" :

                data.map((value, index) => (
                  // <div key={index} >
                  // <img key={index}  className="w-[15rem] image rounded-lg    hover:cursor-pointer " src={value.recipe.image} alt="img" />
                  // <p className='w-[15rem] text-sm text-center p-1 text-gray-500'>{value.recipe.label}</p>
                  // </div>
                   <div className='TabImage' key={index}>
               <img className='hover:border-white hover:border-4 hover:cursor-pointer'   src={value.recipe.image} alt="image" />
               <p className='w-[15rem] text-sm  text-center p-1 text-gray-500'>{value.recipe.label}</p>
            </div>
                ))

              :
              <div className='images'>
                  {/* {setMessage(false)} */}
                {/* <div><img src="https://media.istockphoto.com/id/1154731746/photo/cheeseburger-with-cola-and-french-fries.jpg?s=612x612&w=0&k=20&c=DfuI7KyMDIF8_JH66oAhIZLOgL4RRXulfv24PQ5vTEo=" alt="" /></div> */}
                <div><img className='image' src="https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900" alt="" /></div>
                <div><img className='image' src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Pan_fried_chinese_noodles_with_pork_vegetable_gravy_%E8%B1%9A%E9%87%8E%E8%8F%9C%E3%81%82%E3%82%93%E3%81%8B%E3%81%91%E3%81%8B%E3%81%9F%E7%84%BC%E3%81%8D%E3%81%9D%E3%81%B0.jpg" alt="" /></div>
                <div><img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjrV2W2D7bPLIN8qMfytnqm9knuuP8THGR4A&usqp=CAU" alt="" /></div>
                <div><img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTm0vloTMR0-8FBSfTgmXrl0WaCwzoWvlbRfoWen764Fqc91YviEzjYMVTdigCnTOxkwM&usqp=CAU" alt="" /></div>
                <div><img className='image' src="https://assets.vccircle.com/uploads/2016/07/Wow-Momo-4.jpg" alt="" /></div>
                <div><img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6elWXbxy0RQ2GatKD6lBYC_Px3wDp07tIjw&usqp=CAU" alt="" /></div>
              </div>
          }
        </div>

              
      </div>
    </section>
    <section>
      
    </section>
    </>

    
  )
}

export default Tabs

