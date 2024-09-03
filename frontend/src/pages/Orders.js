import React, { useEffect,useState } from 'react'
import Header from '../Components/Header'
import axios from 'axios'
import {getcarts} from '../Utils/apiroutes'
import Orderbox from '../Components/orderbox'
import Invoice_t from '../Components/Invoice_t'
const Orders = () => {
    const [userid,setuserid]=useState();
    const [orders,setorders]=useState([]);
    const [openinvoice,setopeninvoice]=useState(false);
    const [invoice,setinvoice]=useState();
    useEffect(()=>{
        const foo=async()=>{
          if(localStorage.getItem('hmmprime'))
            {
              const user = await JSON.parse(localStorage.getItem('hmmprime'));
              console.log(user);
              setuserid(user._id)
            }
        }
        foo();
     },[])
    useEffect(()=>{

      const foo=async()=>{


        const result =  await axios.post(getcarts,{
            id:userid
        });
        console.log(result.data.data);
        setorders(result.data.data)
      }
      if(userid)
      {
        foo()
      }
    },[userid])

  return (
    <div className='w-full bg-custom-white h-[100vh]'>

        <Header/>
        {
            !openinvoice?
                 <div className=' w-full h-[92.5vh] flex justify-center '>
                 <div className='w-[100vw] md:w-[60vw] h-[85.5vh] flex flex-col gap-9 mt-4 bg- overflow-auto'>
            
                    {
                        orders.map((ord,index)=>
                            
                            <Orderbox items={ord.line_items } cdate={ord.createdAt}
                            Status={ord.divstatus} Essdate={ord.Estimated_date} Oid={ord._id}
                            price={ord.tprice} Email={ord.email} Address={ord.street_address}
                            Phone={ord.phoneno} setopeninvoice={setopeninvoice} openinvoice={openinvoice}
                            setinvoice={setinvoice} index={index}
                            />
                        )
                    }
                  
                  </div>
                  
                  
                  
                </div>
                :
                <div className=' w-full h-[92.5vh] flex justify-center'>
                 <div className=' w-full md:w-[40vw] h-[90vh] md:h-[80vh] mt-2 md:mt-8 bg-white'>
                    <Invoice_t  order={orders[invoice]} openinvoice={openinvoice} setopeninvoice={setopeninvoice}/>
                 </div>
                </div>
        }
   


    </div>
  )
}

export default Orders