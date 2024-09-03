import React, { useEffect, useState } from 'react';
import { getallcarts, update_satus } from '../Utils/ApiRoutes';
import axios from 'axios';

const Allorders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get(getallcarts)
            .then((res) => {
                const ordersWithStatus = res.data.data.map(order => ({
                    ...order,
                    status: order.divstatus || 'pending',
                    ddate: order.Estimated_date ? new Date(order.Estimated_date).toISOString().slice(0, 10) : ''
                }));
                setOrders(ordersWithStatus);
            });
    }, []);

    const paidradio = "accent-green-500 outline-none border-transparent p-0";
    const unpaidradio = "accent-red-500 outline-none border-transparent p-0";

    const handleStatusChange = (index, value) => {
        const updatedOrders = [...orders];
        updatedOrders[index].status = value;
        setOrders(updatedOrders);
    };

    const handleDateChange = (index, value) => {
        const updatedOrders = [...orders];
        updatedOrders[index].ddate = value;
        setOrders(updatedOrders);
    };

    const handleUpdate = async (order) => {
        if (order.status && order._id && order.ddate) {
            await axios.post(update_satus, {
                id: order._id,
                status: order.status,
                date: order.ddate
            });
        }
    };

    return (
        <div className='flex justify-center w-full h-full overflow-auto'>
            <div className='w-[99%]'>
                <table className='w-full text-center mt-6 border-collapse p-0 m-0'>
                    <thead className='border-t border-b'>
                        <tr>
                            <td className='w-[10vw]'>id</td>
                            <td className='w-[25vw]'>Recipient</td>
                            <td className='w-[38vw]'>Product</td>
                            <td className='w-[8vw]'>Paid</td>
                            <td className='w-[8vw]'>Delivery</td>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((data, index) => (
                            <tr key={data._id} className='border-b shadow-lg h-[26vh]'>
                                <td className='text-sm text-wrap bg-blck'>{data._id}</td>
                                <td>
                                    <div className='flex flex-col justify-center gap-3 overflow-auto'>
                                        <div className='grid grid-cols-2 justify-center gap-0'>
                                            <div className='font-bold text-base text-right w-[80%]'>Name:</div>
                                            <div className='grid grid-cols-1 justify-start text-left'>{data.name}</div>
                                        </div>
                                        <div className='grid grid-cols-2 justify-center gap-0'>
                                            <div className='font-bold text-base text-right w-[80%]'>Email:</div>
                                            <div className='grid grid-cols-1 justify-start text-left'>{data.email}</div>
                                        </div>
                                        <div className='grid grid-cols-2 justify-center gap-0'>
                                            <div className='font-bold text-base text-right w-[80%]'>Country:</div>
                                            <div className='grid grid-cols-1 justify-start text-left'>{data.country}</div>
                                        </div>
                                        <div className='grid grid-cols-2 justify-center gap-0'>
                                            <div className='font-bold text-base text-right w-[80%]'>Postal code:</div>
                                            <div className='grid grid-cols-1 justify-start text-left'>{data.postalcode}</div>
                                        </div>
                                        <div className='grid grid-cols-2 justify-center gap-0'>
                                            <div className='font-bold text-base text-right w-[80%]'>Address:</div>
                                            <div className='grid grid-cols-1 justify-start text-left'>{data.address}</div>
                                        </div>
                                        <div className='grid grid-cols-2 justify-center gap-0'>
                                            <div className='font-bold text-base text-right w-[80%]'>City:</div>
                                            <div className='grid grid-cols-1 justify-start text-left'>{data.city}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='overflow-auto b-black'>
                                    {!!data.line_items && data.line_items.map((product, index) => (
                                        <div key={index} className='flex flex-col justify-between pr-10 pl-10 pt-3'>
                                            <div className='grid grid-cols-ordertableproduct justify-center gap-0 m-0 p-0 text-center'>
                                                <div>{product.price_data.product_data.name}</div>
                                                <div>{product.quantity}</div>
                                                <div>{product.price_data.unit_amount * product.quantity}</div>
                                                <div>{product.property?.parameter || "no property"}</div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className='w-full pt-10 flex justify-center font-bold'><h2>Total amount:</h2> {data.tprice}</div>
                                </td>
                                <td>
                                    <input type='radio' value={true} className={data.paid ? paidradio : unpaidradio} checked readOnly />
                                </td>
                                <td>
                                    <div className='w-full h-[26vh] flex flex-col justify-center items-center align-middle'>
                                        <div className='w-[95%] bgwhite h-[40%] flex flex-col justify-center align-middle items-center gap-2'>
                                            <h1>Status</h1>
                                            <select value={data.status} onChange={(e) => handleStatusChange(index, e.target.value)} className='bg-black text-white w-[90%]'>
                                                <option value="pending">pending</option>
                                                <option value="shipped">shipped</option>
                                                <option value="Delivered">Delivered</option>
                                            </select>
                                        </div>
                                        <div className='w-[95%] bgwhite h-[40%] flex flex-col justify-center align-middle items-center gap-2'>
                                            <input value={data.ddate} onChange={(e) => handleDateChange(index, e.target.value)} className='w-[87%] bg-black text-white' type='date' />
                                        </div>
                                        <div className='w-[95%] bgwhite h-[40%] flex flex-col justify-center align-middle items-center gap-2'>
                                            <button className='w-[80%] text-white p-1 bg-black rounded-xl font-bold' onClick={() => handleUpdate(data)}>
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allorders;
