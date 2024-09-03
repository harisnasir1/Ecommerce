import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {getImg} from '../Utils/apiroutes'
const Orderbox = ({ items,cdate,Status,Essdate,Oid,price,setopeninvoice,openinvoice,setinvoice,index}) => {
  const [products, setProducts] = useState([]);
  const [date,setdate]=useState()
  const [Esdate,setEsdate]=useState()
 const changedate=(xdate)=>{
  const date = new Date(xdate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');
  return  `${year}-${month}-${day}`
 }

  useEffect(() => {
    const fetchProducts = async () => {
      if (items && items.length) {
        try {
          // Use Promise.all to wait for all axios requests to complete
          const results = await Promise.all(
            items.map(async (item,i) => {
              const response = await axios.post(getImg, { name: item.price_data.product_data.name });
           
              return {
                img: response.data, // Assuming the response contains the image URL
                name: item.price_data.product_data.name,
                qty: item.quantity,
                property: item.property.property_id,
                parameter: item.property.parameter,
              };
            })
          );
          setProducts(results); // Set the products state with the fetched data
        } catch (error) {
          console.error('An error occurred while fetching products:', error);
        }
      }
    };

    fetchProducts();
     // Example MongoDB ISODate string
    
// Convert to a normal date string
     setdate(changedate(cdate))
     setEsdate(changedate(Essdate))
     // Call the async function
  }, [items]);



  return (
    <div className={`w-[99vw]md:w-[58vw] h-[45.5vh]  md:h-[35.5vh] ${Status==="Delivered" ? "bg-slate-200":" bg-slate-50 "} text-black flex`}>
      <div className=' w-[40vw] md:w-[24vw] h-full bg-blac overflow-auto no-scrollbar text-black'>
        {products.map((pro, i) => (
          <div key={i} className=' w-[100px] md:w-[170px] ml-4 md:ml-12 h-[100px] md:h-[170px] mb-2  p-3 relative' >

           
            <img src={pro.img} className=' w-full h-full  '/>
            
           {pro.qty>1&& <div className='absolute inset-0 bg-black opacity-40 text-white font-bold text-2xl md:text-5xl text-center flex flex-col justify-center align-middle '>
            
         <div>+ {pro.qty-1}</div>   
            </div>}
            
        </div>
        ))}
      </div>
      <div className=' w-[50vw] md:w-[34vw] h-full  text-lh font-bold flex flex-col justify-start mt-2 md:mt-4 align-middle gap-3  text-center'>
      <div className=' flex flex-col gap-2 mb-2 text-sm md:text-md  justify-around items-center'>
        <h1 className=' text-sm md:text-xl justify-around'>Order id:</h1>
        <div>  {Oid}</div>
      
      </div>
      <div className=' flex flex-row text-nowrap text-md md:text-lg  justify-between mr-1 md:mr-7 items-center'>
        <h1 className=' w-[60%] text-nowrap  text-md bgblack md:text-xl justify-around'>Order date :</h1>
        <div>  {date}</div>
      
      </div>
      <div className=' flex flex-row justify-between  mr-1 md:mr-7 items-center'>
        <h1 className=' text-md md:text-xl justify-around'>Status:</h1>
        <div>  {Status}</div>
      
      </div>
     <div className=' flex flex-row justify-between  mr-1 md:mr-7 items-center'>
        <h1 className=' text-md md:text-xl '> arrival date:</h1>
        <div>  {Esdate?Esdate:"pending "}</div>
      
      </div>
      

      <div className=' flex flex-row  justify-between mr-1 md:mr-7 items-center'>
        <h1 className=' text-md md:text-xl justify-around'>Totall price:</h1>
        <div>  {price} $</div>
      
      </div>

      <button className=' w-[100px] h-[40px] bg-black rounded-xl mt-4 cursor-pointer text-white text-md font-bold'
      onClick={()=>{
        setinvoice(index)
        setopeninvoice(!openinvoice)

      }}
      >
         get Invoice
        
        </button>
      </div>
     
    </div>
  );
};

export default Orderbox;
