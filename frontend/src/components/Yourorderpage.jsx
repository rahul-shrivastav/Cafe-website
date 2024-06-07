import React from 'react'
import usegetorder from '../hooks/getorders'

const Yourorderpage = () => {
    const orders = usegetorder()
    if (orders.length > 0) {

        return (
            <div className='flex flex-col items-center justify-between py-10'>
                <div className='text-6xl mb-5'>Your Orders </div>
                {
                    orders.map((order) => {
                        if (order.itemid === '666038b88a134fd7a1907511') {
                            return (
                                <div key={order._id} className="card card-side bg-base-100 shadowed w-3/6 my-10 ">
                                    <figure className='w-1/2'><img src="/latte.png" className='rounded-md h-full' alt="Movie" /></figure>
                                    <div className="card-body w-1/2">
                                        <h2 className="card-title text-2xl">Item Name: <span className='font-light'>Latte</span></h2>
                                        <p className='text-2xl'><span className='text-2xl font-semibold'>Quantity :</span> {order.quantity}</p>
                                        <p className='text-2xl'><span className='text-2xl font-semibold'>Total amount paid : $</span> {order.quantity * 10 + order.quantity * 10 * 0.18}</p>
                                        <p className='text-2xl'><span className='text-2xl font-semibold'>Date : </span> {order.updatedAt.slice(0, 10)}</p>
                                    </div>
                                </div>
                            )
                        }
                        if (order.itemid === '666038b88a134fd7a1907514') {
                            return (
                                <div key={order._id} className="card card-side bg-base-100 shadowed w-3/6 my-10 ">
                                    <figure className='w-1/2 '><img src="/blackcoffee.png" className='h-full rounded-md' alt="Movie" /></figure>
                                    <div className="card-body w-1/2">
                                        <h2 className="card-title text-2xl">Item Name: <span className='font-light'>Black Coffee</span></h2>
                                        <p className='text-2xl'><span className='text-2xl font-semibold'>Quantity :</span> {order.quantity}</p>
                                        <p className='text-2xl'><span className='text-2xl font-semibold'>Total amount paid : $</span> {order.quantity * 5 + order.quantity * 5 * 0.18}</p>
                                        <p className='text-2xl'><span className='text-2xl font-semibold'>Date : </span> {order.updatedAt.slice(0, 10)}</p>
                                    </div>
                                </div>
                            )
                        }
                        if (order.itemid === '666038b88a134fd7a1907516') {
                            return (
                                <div key={order._id} className="card card-side bg-base-100 shadowed w-3/6  my-10">
                                    <figure className='w-1/2'><img src="/mocha.png" className='h-full rounded-md ' alt="Movie" /></figure>
                                    <div className="card-body w-1/2">
                                        <h2 className="card-title text-2xl">Item Name: <span className='font-light'>Mocha</span></h2>
                                        <p className='text-2xl'><span className='text-2xl font-semibold'>Quantity :</span> {order.quantity}</p>
                                        <p className='text-2xl'><span className='text-2xl font-semibold'>Total amount paid : $</span> {order.quantity * 7 + order.quantity * 7 * 0.18}</p>
                                        <p className='text-2xl'><span className='text-2xl font-semibold'>Date : </span> {order.updatedAt.slice(0, 10)}</p>
                                    </div>
                                </div>
                            )
                        }
                        if (order.itemid === '666038b88a134fd7a1907518') {
                            return (
                                <div key={order._id} className="card card-side bg-base-100 shadowed w-3/6  my-10">
                                    <figure className='w-1/2'><img src="/cappuccino.png" className='rounded-md h-full' alt="Movie" /></figure>
                                    <div className="card-body w-1/2">
                                        <h2 className="card-title text-2xl">Item Name: <span className='font-light'>Cappuccino</span></h2>
                                        <p className='text-2xl'><span className='text-2xl font-semibold'>Quantity :</span> {order.quantity}</p>
                                        <p className='text-2xl'><span className='text-2xl font-semibold'>Total amount paid : $</span> {order.quantity * 10 + order.quantity * 10 * 0.18}</p>
                                        <p className='text-2xl'><span className='text-2xl font-semibold'>Date : </span> {order.updatedAt.slice(0, 10)}</p>
                                    </div>
                                </div>
                            )
                        }
                        if (order.itemid === '6661f5517fa23786120eac48') {
                            return (
                                <div key={order._id} className="card card-side bg-base-100 shadowed w-3/6 my-10 ">
                                    <figure className='w-1/2'><img src="/frappe.png" className='rounded-md h-full' alt="Movie" /></figure>
                                    <div className="card-body w-1/2">
                                        <h2 className="card-title text-2xl">Item Name: <span className='font-light'>Frappe</span></h2>
                                        <p className='text-2xl'><span className='text-2xl font-semibold'>Quantity :</span> {order.quantity}</p>
                                        <p className='text-2xl'><span className='text-2xl font-semibold'>Total amount paid : $</span> {order.quantity * 11 + order.quantity * 11 * 0.18}</p>
                                        <p className='text-2xl'><span className='text-2xl font-semibold'>Date : </span> {order.updatedAt.slice(0, 10)}</p>
                                    </div>
                                </div>
                            )
                        }
                        if (order.itemid === '6661f5517fa23786120eac4b') {
                            return (
                                <div key={order._id} className="card card-side bg-base-100 shadowed w-3/6  my-10">
                                    <figure className='w-1/2'><img src="/coldbrew.png" className='rounded-md h-full' alt="Movie" /></figure>
                                    <div className="card-body w-1/2">
                                        <h2 className="card-title text-2xl">Item Name: <span className='font-light'>Cold Brew</span></h2>
                                        <p className='text-2xl'><span className='text-2xl font-semibold'>Quantity :</span> {order.quantity}</p>
                                        <p className='text-2xl'><span className='text-2xl font-semibold'>Total amount paid : $</span> {order.quantity * 7 + order.quantity * 7 * 0.18}</p>
                                        <p className='text-2xl'><span className='text-2xl font-semibold'>Date : </span> {order.updatedAt.slice(0, 10)}</p>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        )
    } else {
        return (
            <div className='flex items-center justify-center my-10 text-8xl'> NO ORDERS !</div>
        )
    }


}

export default Yourorderpage