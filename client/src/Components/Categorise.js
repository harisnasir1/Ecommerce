import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Table from '../Components/Categories_table'
import {Add_Categories,Getall_Categories,get_category,edit_categories} from '../Utils/ApiRoutes'
import { Tab } from '@mui/material';
const Categorise = () => {
    const [Catname,Setcatname]=useState("");
    const [ParentCat,SetparentCat]=useState("");
    const [Allcat,Setallcat]=useState([]);
    const [editing,setediting]=useState(false);
    const [updateid,setupdateid]=useState();
    async function getcats()
    {
        console.log("i am here");
        axios.get(Getall_Categories)
        .then((res) => {
          console.log("data from server",res);
          Setallcat(res.data.result);
        })
        .catch((e) => console.log("error is ", { e }));
    }
    
    const getcategory=async(id)=>
    {
      console.log("it is working ",id);

      setediting(true);
      setupdateid(id);
      const r=await axios.post(get_category,{
        id
      });
      console.log(r);
      Setcatname(r.data.allproducts.Catergoy_name);

      r.data.allproducts.parent&&SetparentCat(r.data.allproducts.parent.Catergoy_name)

    }
    
    const update=async(event)=>{
      event.preventDefault();
      console.log("k",ParentCat);
      await  axios.post(edit_categories,{
        Catergoy_name:Catname,
        P:ParentCat,
        id:updateid,
       })
       Setcatname("");
       SetparentCat("");

    }


    useEffect(() => {
        getcats();
      },[]);

    const handelSubmit=async(event)=>{
       
        event.preventDefault();
        
      await  axios.post(Add_Categories,{
        Catergoy_name:Catname,
        P:ParentCat,
       })
       Setcatname("");
      SetparentCat("");
      getcats();
      
    }


  return (
    <div className='flex flex-col  align-baseline items-center w-full h-full'>

     {   
     !!editing?
      <div className='text-white w-full flex-grow pt-8 p-12' style={{flexBasis: '30%'}}>
          <div>
            <h1 className=' text-custom-gray text-3xl font-bold mb-4'>Edit Categories </h1>
          </div>

       <form className='flex justify-around  ' onSubmit={update}>
            <div className=' flex flex-col gap-4'>
        <label className=' text-2xl text-custom-gray font-bold capitalize'>Category name</label>
         <input className=' text-black  font-bold rounded p-2 w-[20vw]
       border-2 border-gray  outline-none' value={Catname} onChange={(e)=>Setcatname(e.target.value)} />
            </div>



         <div className='  flex flex-col gap-4'>
     <label className=' text-2xl text-custom-gray font-bold capitalize'> Parent Category </label>

     <select
        className="w-[15vw] text-white bg-custom-gray outline-none focus:ring-0 border-gray-300 h-12 text-center text-bold text-lg"
        required
        value={ParentCat}
        onChange={(e)=>{
            e.preventDefault();
            SetparentCat(e.target.value);
        }}
      >
        <option className=' cursor-pointer' value={undefined}>no parent Category </option>
        {  
       
        Allcat.map((cat, index) => { return !cat.parent&& cat.Catergoy_name!==Catname&& (
          
    <option key={index} className="cursor-pointer" value={cat.Catergoy_name} >
        { cat.Catergoy_name}
    </option>
)
}
)

}
       
         </select>

         </div>



    <button type='submit' className='bg-custom-gray h-12 items-center w-fit text-xl  text-white rounded-xl cursor-pointer p-2   mt-12 capitalize'>Update</button>
    </form>
         

      </div>
: 
 <div className='text-white w-full flex-grow pt-8 p-12' style={{flexBasis: '30%'}}>
         <div>
            <h1 className=' text-custom-gray text-3xl font-bold mb-4'>Categories </h1>
          </div>

<form className='flex justify-around  ' onSubmit={handelSubmit}>
     <div className=' flex flex-col gap-4'>
 <label className=' text-2xl text-custom-gray font-bold capitalize'>Category name</label>
  <input className=' text-black  font-bold rounded p-2 w-[20vw]
border-2 border-gray  outline-none' value={Catname} onChange={(e)=>Setcatname(e.target.value)} />
     </div>



  <div className='  flex flex-col gap-4'>
<label className=' text-2xl text-custom-gray font-bold capitalize'> Parent Category </label>

<select
 className="w-[15vw] text-white bg-custom-gray outline-none focus:ring-0 border-gray-300 h-12 text-center text-bold text-lg"
 required
 value={ParentCat}
 onChange={(e)=>{
     e.preventDefault();
     SetparentCat(e.target.value);
 }}
>
 <option className=' cursor-pointer' value={undefined}>no parent Category </option>
 {  

 Allcat.map((cat, index) => (
<option key={index} className="cursor-pointer" value={cat.Catergoy_name} >
 { cat.Catergoy_name}
</option>
))

}

  </select>

  </div>



<button type='submit' className='bg-custom-gray h-12 items-center w-fit text-xl  text-white rounded-xl cursor-pointer p-2   mt-12 capitalize'>submit</button>
</form>
  

   </div>
}











        <div className='text-white  w-full flex-grow' style={{flexBasis: '70%'}}>
        <Table Allcat={Allcat} Catname={Catname} getcategory={getcategory}/>
        </div>
        
    </div>
  )
}

export default Categorise