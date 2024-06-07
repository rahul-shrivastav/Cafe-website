import React from 'react'
import MenuItem from './MenuItem'
import getallitems from '../hooks/getallitems'

const Slideshower = () => {
    const data = getallitems()

    return (
        <div className='flex items-center justify-center flex-wrap z-0'>
            {data.map(item => {
                if (item.itemName === "Latte") {
                    return <MenuItem key={item._id} id={item._id} image="latte.png" name={item.itemName} description={item.description} price={item.price} />
                }
                if (item.itemName === "Black Coffee") {
                    return <MenuItem key={item._id} id={item._id} image="blackcoffee.png" name={item.itemName} description={item.description} price={item.price} />
                }
                if (item.itemName === "Mocha") {
                    return <MenuItem key={item._id} id={item._id} image="mocha.png" name={item.itemName} description={item.description} price={item.price} />
                }
                if (item.itemName === "Cappuccino") {
                    return <MenuItem key={item._id} id={item._id} image="cappuccino.png" name={item.itemName} description={item.description} price={item.price} />
                }
                if (item.itemName === "Cold Brew") {
                    return <MenuItem key={item._id} id={item._id} image="coldbrew.png" name={item.itemName} description={item.description} price={item.price} />
                }
                if (item.itemName === "Frappe") {
                    return <MenuItem key={item._id} id={item._id} image="frappe.png" name={item.itemName} description={item.description} price={item.price} />
                }
            })
            }
        </div>
    )
}

export default Slideshower