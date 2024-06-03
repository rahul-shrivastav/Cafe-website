import React, { useState } from 'react'
import Quantity from './Quantity'

const Orderpage = () => {
    const [disabled, changedisabled] = useState(false)
    const changedisabledbtn = () => {
        changedisabled((value) => {
            return (!value)
        })

    }
    return (
        <div className='flex  items-center justify-center  h-screen mx-9'>

            <div className='shadowed w-2/6 flex flex-col justify-center items-center py-5 h-2/3'>
                <h1 className='text-6xl text-center my-5'>
                    Black Coffee
                </h1>
                <img width="500px" src="blackcoffee.png" alt="" />
                <p className='text-center my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, molestias.</p>
            </div>
            <div className='flex flex-col items-center justify-center w-2/6  shadowed h-2/3 mx-9'>
                <h1 className='text-7xl text-center my-5'>
                    Order Summary
                </h1>
                <h1 className='text-3xl mb-4'>Price per item : <span className='text-white'>20$</span></h1>
                <Quantity price={20} />
                <button className='btn w-2/3' disabled={disabled} onClick={changedisabledbtn}>{!disabled ? "Place Order" : "Order Placed"}</button>
            </div>

        </div>
    )
}

export default Orderpage        