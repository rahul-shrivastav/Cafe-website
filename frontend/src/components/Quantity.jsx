import React, { useState } from 'react'

import { HiOutlineMinusCircle } from "react-icons/hi2";
import { HiOutlinePlusCircle } from "react-icons/hi2";

const Quantity = (props) => {
    const [quantity, setquantity] = useState(1)
    const increase = () => {
        setquantity((qquantity) => { return qquantity + 1 })
    }
    const decrease = () => {
        setquantity((qquantity) => { if (qquantity > 1) return qquantity - 1; else return 1 })
    }

    return (
        <div className='text-center'>

            <span className='text-3xl'>Quantity : </span>
            <div className='flex items-center justify-center mb-4'>

                <button onClick={decrease} className='text-3xl'>
                    <HiOutlineMinusCircle />
                </button>

                <div className='text-3xl text-white font-semibold mx-3'>{quantity}</div>

                <button onClick={increase} className='text-3xl'>
                    {/* <AiOutlinePlusCircle /> */}
                    <HiOutlinePlusCircle />
                </button>
            </div>

            <span className='text-3xl'>Tax : <span className='text-white'>${(props.price * quantity * 0.18).toFixed(2)}</span> </span>
            <h1 className='text-3xl my-7'>Total Price :  <span className='text-white font-semibold'>${props.price * quantity + props.price * quantity * 0.18}</span></h1>


        </div>
    )
}

export default Quantity