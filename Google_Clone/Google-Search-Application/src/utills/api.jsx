import axios from 'axios' 
import dotenv from 'dotenv'
// require('dotenv').config()

// import path from 'path'
// const dotenv = require('dotenv').config({ path: __dirname + '/.env' })

// dotenv.config()
 

const BASEURL = 'https://www.googleapis.com/customsearch/v1'


const projectID ='my-project-1693672744776'
const params = {
   

   key : `${import.meta.env.API_KEY}`,
   cx : `${import.meta.env.CX}`
}

export const fetchDataFromAPi = async (payload) =>{
   const { data} =  await axios.get(BASEURL, {
      params : {...params, ...payload}
   }) 
   return data
}