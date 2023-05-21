"use client"
import React, { useState } from 'react'

function Toggal() {

    const [isOpen, setOpen] = useState(false)

    return (
        <div className='items-center ms-2 sm:hidden'>
            <button className='p-1 bg-gray-100 rounded-md' onClick={() => { setOpen(!isOpen) }} >
                {isOpen ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                }
            </button>
        </div>
    )
}

export default Toggal