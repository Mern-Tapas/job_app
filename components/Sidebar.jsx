'use client'
import React, { useState } from 'react'


function Sidebar() {

    const [isOpen, setOpen] = useState(true)

    return (
        <div className="h-full min-w-[230px] bg-white flex-col lg:flex hidden">

            <div className='p-3 flex'>
                <div className='w-[50px] h-[50px] rounded-lg bg-gray-100'>

                </div>
                <div className="ms-2">
                    <h3 className='font-medium'>Full Name</h3>
                    <p className='text-gray-500 text-sm'>@fullname</p>
                </div>
            </div>

            <div className='mt-auto flex p-2'>
                <button className='ms-auto p-1 hover:text-gray-700 hover:bg-gray-300 text-gray-500 bg-gray-100 rounded-md' onClick={() => { setOpen(!isOpen) }} >
                    {isOpen ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>

                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    }
                </button>
            </div>

        </div>
    )
}

export default Sidebar