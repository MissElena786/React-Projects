import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import SearchInput from './components/SearchInput'
import SearchResult from './components/SearchResult'
import { AppContext } from './utills/ContextAPi'
// import dotenv from "dotenv"
// const dotenv = require('dotenv').config({ path: __dirname + '/.env' })
// dotenv.config()

function App() {

  return (
  
    <AppContext>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:query/:startIndex' element={<SearchResult/>}/>
      </Routes>
      </BrowserRouter>
   </AppContext>
    
  )
}

export default App
