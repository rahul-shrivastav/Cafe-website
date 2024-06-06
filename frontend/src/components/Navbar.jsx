import React from 'react'
import { FaUserLarge } from "react-icons/fa6";
import uselogout from '../hooks/useLogout';
const Navbar = () => {
    const { loading, logout } = uselogout();
    return (
        <div className=' w-full flex items-center py-5 bg-black z-10'>
            <div className='grow-0 ml-14'>
                <img src="logo.png" alt="" width="50px" />
            </div>
            <div className='flex grow items-center justify-center '>
                <div className='mx-7 text-white font-thin hover:text-amber-400 '>
                    <button><a href="#home">Home</a></button>
                </div>
                <div className='mx-7 text-white font-thin hover:text-amber-400'>
                    <button><a href="#menu">Menu</a></button>
                </div>
                <div className='mx-7 text-white font-thin hover:text-amber-400'>
                    <button><a href="#achievement">Services</a></button>
                </div>
                <div className='mx-7 text-white font-thin hover:text-amber-400'>
                    <button><a href="#chefs">About Us</a></button>
                </div>


            </div>
            <div className='grow-0 mr-20'>
                {/* <button className='px-10 py-3 rounded-lg font-thin bg-transparent border border-amber-400  text-white hover:bg-gradient-to-r hover:from-amber-300 hover:to-amber-700 hover:text-black hover:font-semibold hover:border-none'><a ><FaUserLarge />
                </a></button> */}
                <details className="dropdown">
                    <summary className=" btn"><FaUserLarge />{"Rahul"}</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Your Profile</a></li>
                        <li><a>Your Orders</a></li>
                        <li><a><button onClick={logout}>Logout</button></a></li>
                    </ul>
                </details>
            </div>
        </div>
    )
}

export default Navbar