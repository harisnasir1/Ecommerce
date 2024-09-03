import React from 'react'

const Invoice_t = ({order,openinvoice,setopeninvoice}) => {
    const { _id, line_items, property, divstatus, createdAt, tprice,name,email,street_address,city,postalcode,country,phoneno } = order;

    // Function to format the date
    const formatDate = (date) => new Date(date).toLocaleDateString();
  
    // Function to calculate the total price for each item
    const calculateTotalPrice = (unitAmount, quantity) => unitAmount * quantity;
  
    return (
      <div className=' w-full bg-blck h-full'>
        <div className=' w-full bg-lack text-4xl font-bold justify-start flex p-0 cursor-pointer ' onClick={()=>setopeninvoice(!openinvoice)}>
          <div>
          <h1>x</h1>
          </div>
          </div>
        <div className=' w-full bg-lack text-xl md:text-2xl font-bold justify-center flex mb-4'>

            <div>
            <h1>Invoice</h1>
            </div>
        </div>
      
        <div className=' flex flex-row justify-between text-md md:text-lg font-semibold mr-4 p-1 ml-4'><strong className='text-md md:text-xl'>Order ID:</strong> {_id}</div>
        <div className=' flex flex-row justify-between text-md md:text-lg font-semibold mr-4 p-1 ml-4'><strong className='text-md md:text-xl'>Status:</strong> {divstatus}</div>
        <div className=' flex flex-row justify-between text-md md:text-lg font-semibold mr-4 p-1 ml-4'><strong className='text-md md:text-xl'>Invoice Date:</strong> {formatDate(createdAt)}</div>
  
        <div className=' w-full flex justify-center text-xl font-bold mt-2'>  <h2>Customer Details</h2></div>
      
        <div className=' flex flex-row justify-between text-md md:text-lg font-semibold mr-4 p-1 ml-4'><strong className=' text-md md:text-xl'>Name:</strong> {name}</div>
        <div className=' flex flex-row justify-between text-md md:text-lg font-semibold mr-4 p-1 ml-4'><strong className=' text-md md:text-xl'>Email:</strong> {email}</div>
        <div className=' flex flex-row justify-between text-md md:text-lg font-semibold mr-4 p-1 ml-4'><strong className=' text-md md:text-xl'>Address:</strong> {street_address}, {city}, {postalcode}, {country}</div>
        <div className=' flex flex-row justify-between text-md md:text-lg font-semibold mr-4 p-1 ml-4'><strong className=' text-md md:text-xl'>Phone:</strong> {phoneno}</div>
  
        <div  className=' w-full flex justify-center text-lg md:text-xl font-bold mt-2 mb-4'><h2>Order Details</h2></div>
        <div className=' w-full bgblack h-[40vh] overflow-auto '>
        <table className=' bgblack w-full text-center text-md md:text-lg'>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Unit Price (USD)</th>
              <th>Quantity</th>
              <th>Total Price (USD)</th>
            </tr>
          </thead>
          <tbody>
            {line_items.map((item, index) => (
              <tr key={index}>
                <td>{item.price_data.product_data.name}</td>
                <td>{item.price_data.unit_amount}</td>
                <td>{item.quantity}</td>
                <td>{calculateTotalPrice(item.price_data.unit_amount, item.quantity)}</td>
              </tr>
            ))}
            <tr className=' pt-5'>
              <td colSpan="3"><strong>Grand Total</strong></td>
              <td><strong>{tprice}</strong></td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    );
  };
  


export default Invoice_t