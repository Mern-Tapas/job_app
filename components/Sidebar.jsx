'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Sidebar() {

    const [isOpen, setOpen] = useState(true)



    return (
        <div className={isOpen ? "h-full min-w-[200px] bg-[#171c2a] flex-col lg:flex hidden" : "h-full min-w-[50px] bg-[#171c2a] flex-col lg:flex hidden"}>

            <div className='p-3 flex justify-between px-5'>
                <div className='icon text-white text-xs w-[20px] h-[20px]'>
                    <Image alt='profile' src="/icons/search.svg" className='' width={15} height={15}>
                    </Image>
                </div>
                <div className='icon text-white text-xs w-[20px] h-[20px]'>
                    <Image alt='profile' src="/icons/menu.svg" width={15} height={15}>
                    </Image>
                </div>
            </div>

            <div className='p-3 flex flex-col relative' onClick={() => { setOpen(!isOpen) }}>
                {/* <hr className='border-1 border-[#54679c] absolute top-7 left-0 w-full' /> */}
                <div className={isOpen ? "profile-image z-10 w-[50px] h-[50px] overflow-hidden rounded-full border-box bg-white mx-auto" : "profile-image z-10 w-[30px] h-[30px] overflow-hidden rounded-full border-box bg-white mx-auto"}>
                    <Image alt='profile' src="/profile.avif" width={50} height={50}>
                    </Image>
                </div>
            </div>


            {/* menu */}

            <div className={isOpen ? "flex flex-col p-2 px-5" : "flex flex-col p-2 px-2"} >

                <div className='mb-3'>
                    <h2 className={isOpen ? "text-gray-500 mb-4" : "text-gray-500 mb-4 text-center text-xs"}>Analyze</h2>
                    <ul >
                        <Link href="admin" className=' text-white flex mb-4 p-2 rounded-md hover:bg-[#2b3550]'>
                            <div className={isOpen ? "w-[20px] h-[20px] icons" : "w-[20px] h-[20px] icons mx-auto"}>
                                <Image alt='grid icon' src='/icons/grid.svg' width={15} height={15} ></Image>
                            </div>
                            {isOpen ?
                                <span className='ms-2 text-sm'>Dashboard</span>
                                :
                                ""}
                        </Link>

                        <Link href="admin/product" className=' text-white flex mb-4 p-2 rounded-md hover:bg-[#2b3550]'>
                            <div className={isOpen ? "w-[20px] h-[20px] icons" : "w-[20px] h-[20px] icons mx-auto"}>
                                <Image alt='grid icon' src='/icons/grid.svg' width={15} height={15} ></Image>
                            </div>
                            {isOpen ?
                                <span className='ms-2 text-sm'>Product</span>
                                :
                                ""}
                        </Link>

                    </ul>
                </div>



            </div>

            <div className='mt-auto flex p-2'>


            </div>

        </div>
    )
}

export default Sidebar