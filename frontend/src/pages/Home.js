import React,{useState,useEffect} from 'react'
import Header from '../Components/Header'
import Featured from '../Components/Featured'
import LatesetProduct from '../Components/LatesetProduct'
import {Link} from 'react-router-dom'
import {Getproducts} from '../Utils/apiroutes'
import axios from 'axios'
const Home = () => {
 
   


  return (
    <div className=' bg-custom-white'>
    <Header/>
    <Featured/>
    <LatesetProduct/>
    </div>
  )
}

export default Home