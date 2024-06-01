import React from 'react'
import { IoPeopleCircle } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { LuChefHat } from "react-icons/lu";
import { MdOutlineShareLocation } from "react-icons/md";



const Achievement = () => {
    return (
        <div className='w-full flex m-20 items-center justify-between  '>
            <div className='w-10 h-52 bg-amber-400'>

            </div>
            <div className='w-8/12 h-72 flex items-center justify-around  '>
                <div className='w-3/12 h-full bg-black flex flex-col items-center justify-center shadowed '>
                    <div className='text-9xl text-white'>
                        <IoPeopleCircle />
                    </div>
                    <div className='font-bold'>
                        15,00,000
                    </div>
                    <div className='font-bold'>
                        Happy Customers
                    </div>
                </div>
                <div className='w-3/12 h-full bg-black flex flex-col items-center justify-center shadowed '>
                    <div className='text-8xl text-white'>
                        <MdOutlineShareLocation />

                    </div>
                    <div className='font-bold mt-5'>
                        10+
                    </div>
                    <div className='font-bold'>
                        Locations
                    </div>
                </div>
                <div className='w-3/12 h-full bg-black flex flex-col items-center justify-center shadowed '>
                    <div className='text-8xl text-white'>
                        <BsCart4 />

                    </div>
                    <div className='font-bold mt-5'>
                        10,000
                    </div>
                    <div className='font-bold'>
                        Order Completed
                    </div>
                </div>
                <div className='w-3/12 h-full bg-black flex flex-col items-center justify-center shadowed '>
                    <div className='text-8xl text-white'>
                        <LuChefHat />
                    </div>
                    <div className='font-bold mt-5'>
                        20+
                    </div>
                    <div className='font-bold'>
                        Professional Chefs
                    </div>
                </div>
            </div>
            <div className='w-10 h-52 bg-amber-400 '>

            </div>
        </div>
    )
}

export default Achievement