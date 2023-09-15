import React from 'react'

import './App.css'
import Main from './components/Main'
import Pizza from './Pages/Pizza'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BUrger from './Pages/BUrger'
import Noodels from './Pages/Noodels'
import Icecreame from './Pages/Icecreame'
import Footer from './components/Footer'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Header from './components/Header'

function App() {

  return (
    <div>
        <BrowserRouter>
       <Header/>
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/pizza' element={<Pizza/>} />
            <Route path='/noodels' element={<Noodels/>} />
            <Route path='/burger' element={<BUrger/>} />
            <Route path='/icecream' element={<Icecreame/>} />

            <Route path='/about' element={<About/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        <Footer/> 
        </BrowserRouter> 
        </div>
     
    
  )
}

export default App
