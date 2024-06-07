import React from 'react'
import { useAuthContext } from '../context/AuthContext'

const Profilepage = () => {
    const { authUser } = useAuthContext()
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='text-7xl text-center my-10'>Your Profile</div>
            <div className='text-4xl flex flex-col items-center justify-center border border-amber-400 w-4/6 py-10'>
                <div>ID : <span className='text-white'>{authUser._id}</span></div>
                <div>Name : <span className='text-white'>{authUser.fullName.toUpperCase()}</span></div>
                <div>UserName : <span className='text-white'>{authUser.username}</span></div>
            </div>


        </div>
    )
}

export default Profilepage