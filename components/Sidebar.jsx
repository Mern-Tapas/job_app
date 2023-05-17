'use client'
import React, { useState } from 'react'


function Sidebar() {

    const [isOpen, setOpen] = useState(true)

    return (
        <div className="h-full min-w-[230px] bg-[#171c2a] flex-col lg:flex hidden">

            <div className='p-3 flex'>

            </div>

            <div className='mt-auto flex p-2'>

            </div>

        </div>
    )
}

export default Sidebar