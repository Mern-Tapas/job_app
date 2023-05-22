import React from 'react'

function Count({ childComponent }) {
    return (
        <div className='flex justify-between '>
            <div>
                <h2 className='md:text-xs text-xl text-gray-500' >Today's Orders</h2>
                <p className=' mt-3 text-4xl md:text-xl '>246</p>
            </div>
            <div className=''>
                <div className="icon h-[100px] w-[100px] bg-gradient-to-r from-[#171c2a] to-[#404f76] rounded-md">
                </div>
            </div>
        </div>
    )
}

export default Count