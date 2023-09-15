import React from 'react'

function Services() {
  return (
    <div>
      <main className='min-h-screen pt-20 bg-gray-200' >
        <div className='service-heading-wrapper'>
          <h1 className='service-heading  md:text-4xl  text-2xl text-gray-800 mb-[1rem]'>We are providing the services</h1>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
             doloremque numquam cum quisquam ratione cupiditate perspiciatis necessitatibus nostrum,
              voluptas explicabo blanditiis quia odio ea vero tempore facilis architecto, voluptates sequi!</p>

        </div>

        <section className=' z-10 flex justify-center items-center flex-wrap gap-4'>

        <div className="card z-10  w-[25rem] shadow-xl image-full">
  <figure>
    <img className='' src="https://images.unsplash.com/photo-1682151844402-1ac645c84299?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"/>
  </figure> 
  <div className="justify-end card-body">
    <h2 className="card-title text-gray-300 text-">Provide Fast Foods</h2> 
    <p className='text-gray-400'>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
    <div className=" ">
      <button className="btn mt-2 hover:bg-gray-600  text-white hover:shadow  bg-transparent ">Order Now</button>

    </div>
  </div>
</div> 

<div className="card z-10  w-[25rem] shadow-xl image-full">
  <figure>
    <img src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"/>
  </figure> 
  <div className="justify-end card-body">
    <h2 className="card-title text-gray-300 text-">Provide Icecreames</h2> 
    <p className='text-gray-400'>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
    <div className=" ">
      <button className="btn mt-2   text-white bg-transparent  hover:bg-slate-500">Order Now</button>
    </div>
  </div>
</div> 

<div className="card z-10  w-[25rem] shadow-xl image-full">
  <figure>
    <img src="https://images.unsplash.com/photo-1676037150357-fe74db83443d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"/>
  </figure> 
  <div className="justify-end card-body">
    <h2 className="card-title text-gray-300 text-">Provide Cokies</h2> 
    <p className='text-gray-400'>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
    <div className=" ">
      <button className="btn mt-2 hover:bg-gray-600  text-white  bg-transparent ">Order Now</button>
    </div>
  </div>
</div> 



        </section>
      </main>
    </div>
  )
}

export default Services
