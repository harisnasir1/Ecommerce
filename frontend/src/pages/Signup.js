import React,{useState,useEffect} from 'react';

import {Link,useNavigate,navigate} from 'react-router-dom';

import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios'
import {SignupRoute} from '../Utils/apiroutes';
import iphone from '../Utils/img/runner.jpg'
const Signup = ({openlogin,setopenlogin,Setopensingup,openSignup }) => {
  const navigate=useNavigate();
  const [username,setusername]=useState();
  const [Email,setEmail]=useState();
  const [Password,setPassword]=useState();
  const [ConfirmPassword,setConfirmPassword]=useState();
 
 

  const handleSubmit=async(event)=>{
     event.preventDefault();
    
    if (handleValidation()){
      
      const {data}= await axios.post(SignupRoute,{
        UserName:username,
        Email:Email,
        Password:Password,
      });
      console.log(data);
      if(data.status===false)
      {
        toast(data.msg);
      }
      if(data.status===true)
      {
      localStorage.setItem("hmmprime",JSON.stringify(data.user));
      Setopensingup(!openSignup)
     
      }
    }

  }
  
    
   const handleValidation=()=>{
    
    console.log(Password);
    console.log(ConfirmPassword)
    if(Password!==ConfirmPassword)
    {
      toast.error("password and confirm password should be same!")
      return false;
    }else if(username.length<3)
    {
      toast.error("UserName Length Should be greater then 3 Characters!")
      return false;
    }
    else if(Password.length<8)
    {
      toast.error("password should be equal or greater then 8 Characters!")
      return false;
    }
    else{
      return true;
    }
   }
  
  return (
    <>
    <div className=' w-[20vw] h-[100vh] flex justify-center items-center'>
      <div className='w-[34vw] h-[63vh] bg-custom-black  flex flex-col justify-center items-center'>
      
        <form className=' flex flex-col md:flex-row ' onSubmit={(event)=>handleSubmit(event)}>
      
      <div className=' w-[90vw] md:w-[40vw] h-[30vh] md:h-[63vh] bg-black relative'>
         <img src={iphone} className=' w-full h-full bg-cover' />
         <div className=' z-20 text-black left-4 text-5xl top-0 absolute cursor-pointer ' onClick={(e)=>{
                              Setopensingup(!openSignup)
          }}>x</div>
         <div className='absolute w-full h-full top-0 right-0'>
          <div className='flex w-full h-full justify-center items-center'>
            <h1 className='bg-black bg-opacity-60 rounded-lg text-white  text-xl md:text-8xl p-4'>Sign up</h1>
          </div>
          </div>
      </div>
       <div className="   w-[90vw] md:w-[34vw] h-[63vh] bg-black   flex flex-col justify-center text-center align-middle items-center">
                         
                               <div className=" w-80 text-custom-lighblue text-nowrap capitalize tracking-wider text-3xl text-center flex flex-col gap-5  ">
                               <h1>Login</h1>
                               <h1>Admin Panel</h1>
                               </div>
                               <div className='flex flex-col gap-7 justify-evenly w-[80vw] md:w-[25vw] h-[46vh] '>
                                 <input type="text"  placeholder='UserName' name='UserName' value={username} onChange={(e)=>setusername(e.target.value)} required={true}
                               className='leading-5  text-center text-white text-xl bg-transparent border-b-2 border-b-custom-lighblue border-solid
                                border-custom-lighblue focus:border-transparent p-2 rounded-lg' />
                         
                         
                               <input type="Email" placeholder='Email' name='Email' value={Email} onChange={(e)=>setEmail(e.target.value)}required={true}
                                  className='leading-5  text-center text-white text-xl bg-transparent border-b-2 border-b-custom-lighblue
                                  focus:border-transparent p-2 rounded-lg' />
                         
                         
                                   <input type="password" placeholder='Password' name='Password' value={Password}  onChange={(e)=>setPassword(e.target.value)}required={true}
                                  className='leading-5  text-center text-white text-xl bg-transparent border-b-2 border-b-custom-lighblue
                                  focus:border-transparent p-2 rounded-lg' />
                         
                         
                                   <input type="password" placeholder='Confirm Password' name='Confirm Password' value={ConfirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}required={true}
                                  className='leading-5  text-center text-white text-xl bg-transparent border-b-2 border-b-custom-lighblue
                                  focus:border-transparent p-2 rounded-lg' />
                                  
                               <button type='submit' className='text-white text-xl '>Sign up</button>
     </div>
     
     <span className='text-white text-lg  flex justify-center text-center'>Already  have an account  ?      <button onClick={()=>{  setopenlogin(!openlogin);
                    Setopensingup(!openSignup);}}>Login</button></span>
   
       </div>
       </form>
      </div>
    </div>
    <ToastContainer draggable={true} position={'bottom-right'} autoClose={8000} theme='dark' pauseOnHover={false}/>
    </>
  )
}

export default Signup