import React from 'react'
import MenuItem from './MenuItem'
import getallitems from '../hooks/getallitems'

const Slideshower = () => {
    const data = getallitems()

    return (
        <div className='flex items-center justify-center flex-wrap z-0'>
            {data.map(item => {
                if (item.itemName === "Latte") {
                    return <MenuItem key={item._id} image="latte.png" name={item.itemName} description={item.description} price={item.price} />
                }
                if (item.itemName === "Black Coffee") {
                    return <MenuItem key={item._id} image="blackcoffee.png" name={item.itemName} description={item.description} price={item.price} />
                }
                if (item.itemName === "Mocha") {
                    return <MenuItem key={item._id} image="mocha.png" name={item.itemName} description={item.description} price={item.price} />
                }
                if (item.itemName === "Cappuccino") {
                    return <MenuItem key={item._id} image="cappuchino.png" name={item.itemName} description={item.description} price={item.price} />
                }
            })
            }
        </div>
    )
}

export default Slideshower