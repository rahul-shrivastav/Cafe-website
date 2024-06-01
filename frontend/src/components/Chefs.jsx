import React from 'react'
import Chefdetail from './Chefdetail'

const Chefs = () => {
    return (
        <div className='w-full flex m-20 items-center justify-between'>
            <div className='w-1 h-52 bg-amber-400 '>

            </div>
            <div className='w-8/12 h-72 flex items-center justify-around  '>
                <Chefdetail image={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} name={"Jumanji Thakur"} />
                <Chefdetail image={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} name={"Daniel Dhoomketu"} />
                <Chefdetail image={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} name={"Roman Gandhi"} />
            </div>
            <div className='w-1 h-52 bg-amber-400 '>

            </div>
        </div>
    )
}

export default Chefs