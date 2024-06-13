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
    <h2 className=' text-4xl font-bold mt-5 flex justify-start ml-44 '>New Arrival </h2>
    <div className=' grid grid-cols-4 mr-44 ml-44 items-center justify-center align-middle  gap-12 mt-5 pb-3 h-full overflow-auto'>
     { 
        products.map((data,index)=>{
            return(        <ProductBox key={index} {...data}/>
        )
        })
     }
    </div>
    </>
  )
}

export default LatesetProduct