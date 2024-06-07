import React, { useState } from 'react'
import Quantity from './Quantity'
import getoneitem from '../hooks/getoneitem'
import usepostorder from '../hooks/usepostorder'
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";



const Orderpage = () => {
    const { id } = useParams()
    const item = getoneitem(id)
    const [disabled, changedisabled] = useState(false)
    const [quantity, setquantityf] = useState(1);
    const { usepost } = usepostorder()
    const navigate = useNavigate()

    const changedisabledbtn = () => {
        changedisabled((value) => { return (!value) });
        usepost(id, quantity)
        toast.success("Order Placed Successfully")
        navigate("/")
    }

    if (item.length > 0) {
        return (
            <div className='flex  items-center justify-center  h-screen mx-9'>

                <div className='shadowed w-2/6 flex flex-col justify-center items-center py-5 h-5/6'>
                    <h1 className='text-6xl text-center my-5'>
                        {item[0].itemName}
                    </h1>

                    <div className='flex items-center justify-center'>
                        <img src={`/${item[0].itemName.toLowerCase().trim().split(" ").join("")}.png`} className='w-4/6 rounded-md' alt="" />
                    </div>

                    <p className='text-center m-3'>{item[0].description}</p>
                </div>
                <div className='flex flex-col items-center justify-center w-2/6  shadowed h-5/6 mx-9'>
                    <h1 className='text-5xl w-5/6 text-center my-5 border border-transparent border-b-white py-5'>
                        Order Summary
                    </h1>
                    <h1 className='text-3xl mb-4'>Price per item : <span className='text-white'>{item[0].price}$</span></h1>
                    <Quantity price={item[0].price} setquantityf={setquantityf} />
                    <button className='btn w-2/3' disabled={disabled} onClick={changedisabledbtn}>{!disabled ? "Place Order" : "Order Placed"}</button>
                </div>

            </div>
        )
    }
    else {
        return (
            <div className='flex  items-center justify-center  h-screen mx-9'>

                <div className='shadowed w-2/6 flex flex-col justify-center items-center py-5 h-5/6'>
                    <h1 className='text-6xl text-center my-5'>
                        Loading
                    </h1>

                    <div className='flex items-center justify-center'>
                        <img className='w-4/6 rounded-md' alt="" />
                    </div>

                    <p className='text-center m-3'></p>
                </div>
                <div className='flex flex-col items-center justify-center w-2/6  shadowed h-5/6 mx-9'>
                    <h1 className='text-5xl w-5/6 text-center my-5 border border-transparent border-b-white py-5'>
                        Order Summary
                    </h1>
                    <h1 className='text-3xl mb-4'>Price per item : <span className='text-white'>$</span></h1>
                    <Quantity price={0} setquantityf={setquantityf} />
                    <button className='btn w-2/3' disabled={disabled} onClick={changedisabledbtn}>{!disabled ? "Place Order" : "Order Placed"}</button>
                </div>

            </div>
        )

    }


}

export default Orderpage        