import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { cartcontext } from './CartContext';

const Header = () => {
  const { cartpoducts } = useContext(cartcontext);
  const [show, setShow] = useState(false);

  return (
    <div className='w-full z-20 text-slate-300 bg-black h-[5vh] pb-5 md:pb-0  md:h-[8vh] flex justify-between  mr-3 relative'>
      <div className='h-full text-white font-sans font-bold text-center mt-2  ml-3 md:ml-6 lg:ml-10  text-2xl md:text-3xl flex items-center gap-4 lg:text-5xl'><Link to='/'>HmmPrime</Link></div>
      <div className='w-[40vw] h-full hidden md:flex items-center justify-end gap-9 font-sans font-bold text-xl pr-20'>
        <Link className=' hover:text-white hover:border-b ease-in-out duration-200' to='/'>Home</Link>
        <Link className=' hover:text-white hover:border-b ease-in-out duration-200' to='/'>About</Link>
        <Link className=' hover:text-white hover:border-b ease-in-out duration-200' to='/Allproducts'>Allproducts</Link>
        <Link className=' hover:text-white hover:border-b ease-in-out duration-200' to='/'>Account</Link>
        <Link className=' hover:text-white hover:border-b ease-in-out duration-200' to='/Cart'>Cart ({cartpoducts.length})</Link>
      </div>
      <div className='md:hidden mr-3 flex align-bottom items-center  h-full mt-3'>
        <button onClick={() => setShow(!show)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 md:w-9 md:h-9 text-white  ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      {show && (
        <div className='fixed top-0 right-0 w-full h-[100vh] overflow-hidden  bg-black text-white flex flex-col items-start justify-start p-6 z-10 transform transition-transform duration-300 ease-in-out'>
          <button className='self-end mb-6' onClick={() => setShow(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
         <div className=' flex flex-col  w-full h-full text-3xl  text-right align-middle justify-start pt-[50%]  gap-16'>
          <Link className='  w-full' to='/' onClick={() => setShow(false)}>Home</Link>
          <Link className='  w-full' to='/' onClick={() => setShow(false)}>About</Link>
          <Link className='  w-full' to='/Allproducts' onClick={() => setShow(false)}>Allproducts</Link>
          <Link className='  w-full' to='/' onClick={() => setShow(false)}>Account</Link>
          <Link className='  w-full' to='/Cart' onClick={() => setShow(false)}>Cart ({cartpoducts.length})</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
