import React from 'react'
import { Link } from "react-router-dom";


const MenuItem = (details) => {
    return (
        <div>
            <div className="shadowed card w-64 h-96 bg-base-100 shadow-xl rounded-lg m-4">
                <figure><img src={details.image} alt="Shoes" /></figure>
                <div className="card-body rounded-xl">
                    <h2 className="card-title">{details.name}</h2>
                    <p>{details.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">
                            <Link to={`/item/${details.id}`} className="text-amber-400"> Order Now <span className="text-amber-700">${details.price}</span> </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuItem