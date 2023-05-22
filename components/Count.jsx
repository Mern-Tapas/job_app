import React from 'react'

function Count() {
    return (
        <div className='flex justify-between '>
            <div>
                <h2 className='text-xs text-gray-500' >Today's Orders</h2>
                <p className=' mt-3 text-2xl md:text-xl'>$ 246</p>
            </div>
            <div className=''>
                <div className="icon h-[100px] w-[100px] bg-gray-100 rounded-md">

                </div>
            </div>
        </div>
    )
}

export default Count