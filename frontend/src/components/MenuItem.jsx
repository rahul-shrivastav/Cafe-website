import React from 'react'

const MenuItem = (details) => {
    // "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    return (
        <div>
            <div className="shadowed card w-64 bg-base-100 shadow-xl rounded-lg m-4">
                <figure><img src={details.image} alt="Shoes" /></figure>
                <div className="card-body rounded-xl">
                    <h2 className="card-title">{details.name}</h2>
                    <p>{details.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuItem