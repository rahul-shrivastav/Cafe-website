import React from 'react'
import Chefdetail from './Chefdetail'

const Chefs = () => {
    return (
        <div className='w-full flex m-20 items-center justify-between'>
            <div className='w-1 h-52 bg-amber-400 '>

            </div>
            <div className='w-8/12 h-72 flex items-center justify-around  '>
                <Chefdetail image={"chef1.png"} name={"Jumanji Thakur"} />
                <Chefdetail image={"chef2.png"} name={"Daniel Dhoomketu"} />
                <Chefdetail image={"chef3.png"} name={"Roman Gandhi"} />
            </div>
            <div className='w-1 h-52 bg-amber-400 '>

            </div>
        </div>
    )
}

export default Chefs