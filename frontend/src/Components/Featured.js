import React,{useEffect,useState,useContext} from 'react'
import Iphone from '../Utils/img/iphone.jpg'
import {Link} from 'react-router-dom'
import {Getproducts, get_product} from '../Utils/apiroutes'
import {cartcontext} from './CartContext'
import axios from 'axios'

const Featured = () => {
  const {addproducts}= useContext(cartcontext);

  const [product_name,setproduct_name]=useState("");
  const [images,setimages]=useState([])
  const [des,setdes]=useState("");
  const [fpid,setfpid]=useState("665e32d94a515b80633dba03");
  useEffect(() => {
    const fetchData = async () => {
      try {
       
               //change here to change the featured product
        const result = await axios.post(get_product,{
            id:fpid
        });
        const re= JSON.parse( JSON.stringify(result));
        setproduct_name(result.data.allproducts.Product_name); // Assuming result.data contains the product data
        setimages(result.data.allproducts.Images);
        setdes(result.data.allproducts.product_descripton)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const Add_featured_product_to_cart=()=>{
    addproducts(fpid);
  }


  return (
    <div className=' w-full bg-black h-[50vh] justify-center flex text-white'>
        
        <div className=' flex-1 justify-center items-center text-end pl-12 flex flex-col  gap-12'>
           <div className=' text-4xl font-bold font-sans capitalize'>
             {product_name}
           </div>
           <div className=' text-left  w-[30vw] text-lg font-sans flex items-left leading-7'>
           {des}

           </div>
           <div className=' flex text-white gap-6  '>
            <div className=' flex '>   
                
                   <Link to={`Detail/${fpid}`} className=' p-2'>    
                   <button className=' bg-transparent p-2 rounded-lg text-md font-sans font-bold cursor-pointer border-2 border-white'>View more</button></Link> 
               </div>

               <div>
               <button className=' bg-custom-white text-black p-3 rounded-lg text-2xl font-sans font-bold cursor-pointer flex gap-3'
               onClick={Add_featured_product_to_cart}
               >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
               </svg>

                Add to cart</button>
               </div>

          
           </div>
        </div>
        <div  className=' flex-1 flex justify-center align-bottom  p-12'>
            <img className=' h-[85%] w-fit bg-contain' src={images[2]}/>
        </div>

    </div>
  )
}

export default Featured