import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {cartcontext} from './CartContext'

const Header = () => {
  const {cartpoducts}=useContext(cartcontext);
  return (
    <div className=' w-full text-slate-300 bg-black  h-[8vh] flex justify-end mr-3'>
        <div className=' w-[40vw] h-full flex items-center justify-end gap-9 font-sans font-bold text-xl pr-20'>
            <Link to='/'>Home</Link>
            <Link to='/'>About</Link>
            <Link to='/Allproducts'>Allproducts</Link>
            <Link to='/'>Account</Link>
            <Link to='/Cart'>Cart ({cartpoducts.length})</Link>
           
        </div>
    </div>
  )
}

export default Header