import React, { useEffect,useState } from 'react'
import Header from '../Components/Header'
import {All_products,Getall_Categories} from '../Utils/apiroutes'
import ProductBox from '../Components/ProductBox'
import axios from 'axios'
const Allproducts = () => {
    const [products,setproducts]=useState([]);
    const [categories,setcategories]=useState([]);
    const [parentcat,setparentcat]=useState(" ");
    const [childcat,setchildcat]=useState(" ");
    useEffect(()=>{
       axios.get(All_products)
       .then((res)=>{
        console.log(res.data.allproducts);
        setproducts(res.data.allproducts)
       })
       .catch((error)=>{
        console.log(error)
       })
    },[])
    useEffect(()=>{
       axios.get(Getall_Categories)
       .then((res)=>{
        console.log(res.data.result)
        setcategories(res.data.result)
       })
       .catch((error)=>{
        console.log(error);
       })

    },[products])

    

    const handelparentchange=(e)=>{
    
     setparentcat(e.target.value);
    
    }
    const handelchildcat=(e)=>{
    
      setchildcat(e.target.value);
     }
    
    


  return (
    <div className=' w-full bg-custom-white h-[100vh]'>
        <Header/>
      <div className=' ml-3 mt-9 font-bold text-3xl'>
        
      
    <div className=' grid grid-cols-allproduct p-0 m-0 gap-10'>

     <div className=' bg-white w-[14vw] h-[86vh] rounded-xl   text-xl'>
     <h2 className=' mt-2 text-xl'>Categories</h2>
         <div className=' w-full h-[30%]  overflow-auto  pr-9'>

         
      <div className=' h-full flex flex-col justify-start mt-6 gap-6 text-center'>
        {
          categories.map((cat)=>
            cat.parent?"":
          <div className=' grid  grid-cols-category gap-3 p-0 m-0 '>
            <div className='  flex justify-end'>
              <input
              id={`category-${cat.Catergoy_name}`}
               value={cat?.Catergoy_name} 
                type='radio' 
                checked={parentcat===cat.Catergoy_name}
                 onChange={handelparentchange}/>
              </div>
            <div className=' text-left font-light'>
              <label className=' cursor-pointer' 
              htmlFor={`category-${cat.Catergoy_name}`} 
               >{cat.Catergoy_name}</label></div>
          </div>
          )
        }
      </div>
         </div>

         <h2 className=' mt-2 text-xl'>Sub Categories</h2>

         <div className=' w-full h-[30%]  overflow-auto  pr-9'>

         
<div className=' h-full flex flex-col justify-start mt-6 gap-6 text-center'>
  {
    categories.map((cat)=>
      cat.parent?
    <div className=' grid  grid-cols-category gap-3 p-0 m-0 '>
      <div className='  flex justify-end'>
        <input  type='radio'
         id={`subcategory-${cat.Catergoy_name}`}
        value={cat.Catergoy_name}
        checked={childcat===cat.Catergoy_name}
        onChange={handelchildcat}
        />
        </div>
      <div className=' text-left font-light font-sans'>
        <label htmlFor={`subcategory-${cat.Catergoy_name}`}>{cat.Catergoy_name}</label></div>
    </div>:""
    )
  }
</div>
   </div>
     

     </div>


    <div className='  grid grid-cols-4 mr-20 items-center justify-center align-middle  gap-12 mt-5 pb-3 h-[83vh] overflow-auto'>
     { 
        products.map((data,index)=>
        

                  (  <ProductBox key={index} {...data}/>)
        
        )
     }
    </div>

    </div>
      </div>
    </div>
  )
}

export default Allproducts