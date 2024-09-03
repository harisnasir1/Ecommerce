import React,{useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';

import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';
import {LoginRoute} from '../Utils/apiroutes';
import iphone from '../Utils/img/runner.jpg'

const Login = ({setopenlogin,openlogin,setopensingup,openSignup}) => {
  const navigate=useNavigate();

 
  const handleValidation=()=>{
    const{UserName,Password}=values;
    if(Password==="")
    {
      toast.error("Email and Password are Required!")
      return false;
    }
    else if(UserName.length==="")
    {
      toast.error("Email and Password are Required!")
      return false;
    }    
    else{
      return true;
    }
   }

  const [values,setValue]=useState({
    UserName:"",
    Password:"",
  })
  const handleSubmit=async(event)=>{
    event.preventDefault();
   
   if (handleValidation()){
     const{UserName,Password}=values;
     const {data}= await axios.post(LoginRoute,{
       UserName,
       Password,
     });
     console.log(data);
     if(data.status===false)
     {
       toast(data.msg);
     }
     if(data.status===true)
     {
     localStorage.setItem("hmmprime",JSON.stringify(data.user));
     setopenlogin(false);
     navigate('/Cart')
     }
   }

 }
  const handleChange=(event)=>{
    setValue({...values,[event.target.name]:event.target.value})
       }
  const [responseData, setResponseData] = useState(null);
  
  
  
  return (
 <>
 <div className='  w-[40vw] h-[100vh] flex justify-center items-center'>
   <div className='w-[90vw] md:w-[54vw] h-[63vh] bg-custom-black rounded-lg flex flex-col justify-center items-center '>
   
          <form className=' flex flex-col md:flex-row' onSubmit={(event)=>handleSubmit(event)}>
                   <div>
                   <div className='w-[90vw] md:w-[40vw] h-[30vh] md:h-[63vh] bg-black relative'>
                       <img src={iphone} className=' w-full h-full bg-cover' />
                       <div className=' z-20 text-black left-4 text-5xl top-0 absolute cursor-pointer ' onClick={(e)=>{
                          setopenlogin(!openlogin)
                        }}>x
                        </div>
                       <div className='absolute w-full h-full top-0 right-0'>
                        <div className='flex w-full h-full justify-center items-center'>
                          <h1 className='bg-black bg-opacity-60 rounded-lg text-white text-xl md:text-8xl p-4'>Log In</h1>
                        </div>
                        </div>
                    </div>
                   </div>


                   <div className=' w-[90vw] md:w-[34vw] h-[63vh] bg-black rounded-xl flex flex-col justify-center text-center align-middle items-center'>
                   <div className=" w-50 text-custom-lighblue text-nowrap capitalize tracking-wider text-3xl text-center flex flex-col gap-5  ">
                    <h1 className=' text-white'>Login</h1>
                    <h1>Admin Panel</h1>
                    </div>
                    <div className='flex flex-col gap-3 justify-evenly w-[80vw] md:w-[20vw] h-[40vh]'>
                      <input type="text"  placeholder='UserName' name='UserName' onChange={(e)=>handleChange(e)} required={true}
                    className='leading-5  text-center text-white text-xl bg-transparent border-b-2 border-b-custom-lighblue border-solid
                     border-custom-lighblue focus:border-transparent p-2 rounded-lg' />
                    <input type="password" placeholder='Password' name='Password' onChange={(e)=>handleChange(e)}required={true}
                       className='leading-5  text-center text-white text-xl bg-transparent border-b-2 border-b-custom-lighblue
                       focus:border-transparent p-2 rounded-lg' />
                    <button type='submit' className='text-white text-xl '>Login</button>
                  </div>
                  
                  <span className='text-white text-lg  flex justify-center text-center'>Don't have an account  ?   <button onClick={()=>{
                    setopenlogin(!openlogin);
                    setopensingup(!openSignup);
                  }}>RIGESTER</button></span>
                   </div>

    </form>
   </div>
 </div>
 <ToastContainer draggable={true} position={'bottom-right'} autoClose={8000} theme='dark' pauseOnHover={false}/>
 </>
  );
};

export default Login;
