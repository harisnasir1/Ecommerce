import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {cartcontext} from './CartContext'
const ProductBox = ({Product_name,product_price,Product_descripton ,Images,_id}) => {
  const {addproducts}= useContext(cartcontext);

  return (
    <div className=' text-center flex flex-col gap-1'> 
        
        <Link to={`/Detail/${_id}`} className='bg-white  bg-transparent  rounded-lg shadow-xl  h-[240px] w-full text-xl   flex items-center  align-middle justify-center bg-contain '>
        <img className='w-full h-full object-contain p-2 ' src={Images[0]}/>
          
        </Link>
        <Link to={`/Detail/${_id}`}>{Product_name}</Link>
        <div className=' flex gap-3 text-lg m-0 font-sans font-none   justify-center  text-center align-middle'>
          
       
        <div className=' flex  w-[80%] justify-around mt-2'>
          <div className=' '>
            <h2 className='text-2xl align-middle items-center font-bold p-2'> $ {product_price}</h2>
           </div>
        
          <button className=' bg-custom-gray w-fit p-2 text-center  rounded-lg text-lg text-white   cursor-pointer flex justify-center '
          onClick={(e)=>{
            e.preventDefault();
            addproducts(_id);
          }}
          >
                Add to cart

              </button>
        
        
        </div>
        
           




        </div>
        </div>
  )
}

export default ProductBox