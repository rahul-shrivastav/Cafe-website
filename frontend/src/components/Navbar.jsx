import React from 'react'

const Navbar = () => {
    return (
        <div className=' w-full flex items-center py-5 bg-transparent'>
            <div className='grow-0 ml-14'>
                <img src="logo.png" alt="" width="50px" />
            </div>
            <div className='flex grow items-center justify-center '>
                <div className='mx-7 text-white font-thin hover:text-amber-400 '>
                    <button>Home</button>
                </div>
                <div className='mx-7 text-white font-thin hover:text-amber-400'>
                    <button>Menu</button>
                </div>
                <div className='mx-7 text-white font-thin hover:text-amber-400'>
                    <button>Services</button>
                </div>
                <div className='mx-7 text-white font-thin hover:text-amber-400'>
                    <button>About US</button>
                </div>


            </div>
            <div className='grow-0 mr-14'>
                <button className='px-10 py-3 rounded-lg font-thin bg-transparent border border-amber-400  text-white hover:bg-gradient-to-r hover:from-amber-300 hover:to-amber-700 hover:text-black hover:border-none'>ORDER NOW</button>
            </div>
        </div>
    )
}

export default Navbar