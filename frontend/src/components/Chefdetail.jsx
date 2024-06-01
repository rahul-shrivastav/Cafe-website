import React from 'react'

const Chefdetail = (details) => {
    return (

        <div className='w-4/12 h-full bg-black flex flex-col items-center justify-center shadowed m-4'>
            <div className="avatar my-2">
                <div className="w-36 mask mask-hexagon">
                    <img src={details.image} />
                </div>
            </div>

            <div className='font-bold'>
                {details.name}
            </div>
            <div className="rating">
                <input name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
        </div>

    )
}

export default Chefdetail