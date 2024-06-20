import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { cartcontext } from './CartContext';

const Header = () => {
  const { cartpoducts } = useContext(cartcontext);
  const [show, setShow] = useState(false);

  return (
    <div className='w-full z-20 text-slate-300 bg-black h-[5vh]  md:h-[8vh] flex justify-end mr-3 relative'>
      <div className='w-[40vw] h-full hidden md:flex items-center justify-end gap-9 font-sans font-bold text-xl pr-20'>
        <Link to='/'>Home</Link>
        <Link to='/'>About</Link>
        <Link to='/Allproducts'>Allproducts</Link>
        <Link to='/'>Account</Link>
        <Link to='/Cart'>Cart ({cartpoducts.length})</Link>
      </div>
      <div className='md:hidden mr-3 flex align-bottom'>
        <button onClick={() => setShow(!show)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      {show && (
        <div className='fixed top-0 right-0 w-full h-[100vh] overflow-hidden  bg-black text-slate-300 flex flex-col items-start justify-start p-6 z-10 transform transition-transform duration-300 ease-in-out'>
          <button className='self-end mb-6' onClick={() => setShow(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
         <div className=' flex flex-col  w-full h-full text-3xl pr-[30%] text-right align-middle justify-start pt-[50%]  gap-16'>
         <Link to='/' onClick={() => setShow(false)}>Home</Link>
          <Link to='/' onClick={() => setShow(false)}>About</Link>
          <Link to='/Allproducts' onClick={() => setShow(false)}>Allproducts</Link>
          <Link to='/' onClick={() => setShow(false)}>Account</Link>
          <Link to='/Cart' onClick={() => setShow(false)}>Cart ({cartpoducts.length})</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
