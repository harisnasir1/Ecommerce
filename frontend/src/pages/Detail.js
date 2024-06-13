import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import Header from '../Components/Header'
import {get_product} from '../Utils/apiroutes'
import { useParams } from 'react-router-dom';
import {cartcontext} from '../Components/CartContext'
const Detail = () => {
  const {addproducts}= useContext(cartcontext);
  const [product,setproduct]=useState("");
  const [selectedimg,setselectedimg]=useState("0")
  const { id } = useParams();
  useEffect(()=>{
    axios.post(get_product,{
      id:id,
    })
    .then((res)=>{
      console.log(res.data.allproducts);
      setproduct(res.data.allproducts)
    })
  },[])
  return (
    <div className=' bg-custom-white w-full h-[100vh]'>
      <Header/>
      
     <div className='w-[90%] ml-20 mt-12 h-fit flex justify-around gap- items-center align-middle text-center '>

      <div className=' w-[100%]  flex flex-col gap-2'>
      <div className=' w-[500px] h-[500px] overflow-hidden  ml-6 rounded-xl flex justify-center bg-white'> 
     <img className='w-full h-full object-contain' src={!!product&&product.Images[selectedimg]} />
      </div>
      <div className=' w-[100%] ml-6 min-h-[5vh] max-h-[15]   flex-wrap flex justify-start'>
       
       <div className=' w-[80px] h-[80px] flex justify-start gap-5'>
        {
        !!product.Images &&  product.Images.map((img,key)=>(
            <img className={selectedimg==key?" border-2 border-black h-full w-full object-contain":"h-full w-full object-contain"} key={key} src={img} onClick={()=>setselectedimg(key)}/>
          ))
        }
       </div>


      </div>
      </div>
       <div className=' h-[80%]'>
       <div className=' flex flex-col justify-start  text-center align-start items-center w-full h-full gap-12 '>
        <div className=' text-5xl font-sans font-bold'>{product.Product_name}</div>
        <div className=' b w-[80%] text-xl font-sans'>{product.product_descripton }</div>


        <div className=' flex justify-start -black w-[80%] ml-16 gap-10'>
        <div className=' font-sans font-bold text-4xl text-center flex justify-center align-middle items-center'>
          <h1 className=''>$ {product.product_price} </h1>
         </div>
        <div> 
          <button className=' bg-custom-gray w-fit p-4 text-center  rounded-lg text-2xl text-white   cursor-pointer flex justify-center '
          onClick={(e)=>{
            e.preventDefault();
            addproducts(product._id);
          }}
          >
                Add to cart

              </button>  </div>
     
        

        

        </div>
       </div>
       </div>
     
     </div>
      </div>
  )
}

export default Detail