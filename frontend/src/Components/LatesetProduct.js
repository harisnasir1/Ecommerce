import React,{useEffect,useState} from 'react'
import {get_sorted_product} from '../Utils/apiroutes'
import ProductBox from '../Components/ProductBox'
import axios from 'axios'
const LatesetProduct = () => {
    const [products,setproducts]=useState([]);
    useEffect(()=>{
        axios.get(get_sorted_product)
        .then((res)=>{
           setproducts(res.data.allproducts);
        })
        
    },[])

    useEffect(()=>{
        console.log(products)

    },[products])

  return (
    <>
    <h2 className=' text-4xl font-bold mt-5  flex justify-start ml-44 '>New Arrival </h2>
    <div className=' flex justify-center'>
    <div className='  grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2    w-[80%]   text-base   gap-12 mt-5 pb-3 h-[83vh] overflow-auto no-scrollbar'>
     { 
        products.map((data,index)=>{
            return(        <ProductBox key={index} {...data}/>
        )
        })
     }
    </div>
    </div>
    </>
  )
}

export default LatesetProduct