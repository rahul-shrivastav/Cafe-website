import React from 'react'
import { FaUserLarge } from "react-icons/fa6";
import uselogout from '../hooks/useLogout';
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext'


const Navbar = () => {
    const { loading, logout } = uselogout();
    const navigate = useNavigate()
    const toOrderspage = () => {
        navigate('/myorders')
    }
    const toProfilepage = () => {
        navigate('/profile')
    }
    const { authUser } = useAuthContext()
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
                <details className="dropdown">
                    <summary className=" btn"><FaUserLarge />{authUser.fullName.toUpperCase()}</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a><button onClick={toProfilepage}>Your Profile</button></a></li>
                        <li><a><button onClick={toOrderspage}>Your Orders</button></a></li>
                        <li><a><button onClick={logout}>Logout</button></a></li>
                    </ul>
                </details>
            </div>
        </div>
    )
}

export default Navbar