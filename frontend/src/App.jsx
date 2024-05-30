import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import MenuItem from './components/MenuItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='sticky top-0 h-0'>
        <Navbar />
      </div>
      <div className='landingimg w-screen h-screen flex'>
        <div className='flex flex-col w-1/2 h-full text-8xl  items-start justify-center text-white font-semibold pl-24'>
          <span className='text-2xl font-thin text-amber-400'>Welcome to our cafe</span>
          <span className=''>Discover the </span> <span className=' '>taste of Real </span> <span className='' > Coffee</span>

          <button className='text-xl px-10 mt-10 py-3 rounded-sm font-thin bg-transparent  border-white border  text-white  hover:bg-white hover:text-black hover:border-transparent'>Checkout Our Menu</button>
        </div>
      </div >

      <section className='w-screen flex flex-col items-center justify-center '>
        <div className='text-7xl m-10'>
          <h1 >Our Menu</h1>
        </div>
        <div className='flex flex-wrap items-center justify-around'>
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
      </section>


    </>
  )
}

export default App
