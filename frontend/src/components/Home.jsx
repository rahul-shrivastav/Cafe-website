import React from 'react'
import Navbar from './Navbar'
import Slideshower from './Slideshower'
import Achievement from './Achievement'
import Chefs from './Chefs'
import Footer from './Footer'

const Home = () => {
    return (
        <div className='scroll h-full'>

            <div className='sticky top-0 h-0 z-10 '>
                <Navbar />
            </div>
            <div className='landingimg w-screen h-screen flex z-0 ' id='home'>
                <div className='flex flex-col w-1/2 h-full text-8xl  items-start justify-center text-white font-semibold pl-24'>
                    <span className='text-2xl font-thin text-amber-400'>Welcome to our cafe</span>
                    <span className=''>Discover the </span><span className=''>taste of Real </span> <span className='' > Coffee</span>

                    <button className='text-xl px-10 mt-10 py-3 rounded-sm font-thin bg-transparent  border-white border  text-white  hover:bg-white hover:text-black hover:border-transparent'>Checkout Our Menu</button>
                </div>
            </div >

            <section id='menu' className='z-0 w-screen flex flex-col items-center justify-center my-32 '>
                <div className='text-7xl m-10'>
                    <h1 >Our Menu</h1>
                </div>
                <div className='z-0 flex flex-wrap w-4/5 items-center justify-around'>
                    <Slideshower />
                </div>
            </section>
            <section id='achievement' className='z-0 flex flex-col items-center justify-center my-32' >
                <h1 className='text-7xl'>Our Service</h1>
                <Achievement />
            </section>
            <section id='chefs' className='z-0 flex flex-col items-center justify-center my-32' >
                <h1 className='text-7xl'>Meet Our Best Chefs</h1>
                <Chefs />
            </section>

            <section>

                <Footer />
            </section>


        </div>
    )
}

export default Home