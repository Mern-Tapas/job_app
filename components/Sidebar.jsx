'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Sidebar() {

    const [isOpen, setOpen] = useState(true)



    return (
        <div className={isOpen ? "h-full min-w-[200px] bg-[#171c2a] flex-col lg:flex hidden" : "h-full min-w-[50px] bg-[#171c2a] flex-col lg:flex hidden"}>


            <div className='p-2 flex relative' onClick={() => { setOpen(!isOpen) }}>
                {/* <hr className='border-1 border-[#54679c] absolute top-7 left-0 w-full' /> */}
                <div className={isOpen ? "profile-image z-10 w-[40px] h-[40px] overflow-hidden rounded-full border-box bg-white" : "mx-auto profile-image z-10 w-[40px] h-[40px] overflow-hidden rounded-full border-box bg-white"}>
                    <Image alt='profile' src="/profile.avif" width={50} height={50}>
                    </Image>
                </div>
                {isOpen ?
                    <div className='ms-3 text-gray-300'>
                        <h1 className='text-gray-400'>User Name</h1>
                        <p className='text-xs text-gray-500'>usermail@Gmail.com</p>
                    </div>
                    :
                    ""}
            </div>

            <hr className='border-gray-600' />

            {/* menu */}

            <div className={isOpen ? "flex flex-col p-2 px-5" : "flex flex-col p-2 px-2"} >

                <div className='mb-3'>
                    <h2 className={isOpen ? "text-gray-500 mb-4" : "text-gray-500 mb-4 text-center text-xs"}>Analyze</h2>
                    <ul >
                        <Link href="dashboard" className=' text-white flex mb-2 p-2 rounded-md hover:bg-[#2b3550]'>
                            <div className={isOpen ? "w-[20px] h-[20px] icons" : "w-[20px] h-[20px] icons mx-auto"}>
                                <Image alt='grid icon' src='/icons/grid.svg' width={15} height={15} ></Image>
                            </div>
                            {isOpen ?
                                <span className='ms-2 text-sm'>Dashboard</span>
                                :
                                ""}
                        </Link>

                        <Link href="dashboard/product" className=' text-white flex mb-2 p-2 rounded-md hover:bg-[#2b3550]'>
                            <div className={isOpen ? "w-[20px] h-[20px] icons" : "w-[20px] h-[20px] icons mx-auto"}>
                                <Image alt='grid icon' src='/icons/product.svg' width={15} height={15} ></Image>
                            </div>
                            {isOpen ?
                                <span className='ms-2 text-sm'>Product</span>
                                :
                                ""}
                        </Link>

                        <Link href="dashboard/product" className=' text-white flex mb-2 p-2 rounded-md hover:bg-[#2b3550]'>
                            <div className={isOpen ? "w-[20px] h-[20px] icons" : "w-[20px] h-[20px] icons mx-auto"}>
                                <Image alt='grid icon' src='/icons/blog.svg' width={15} height={15} ></Image>
                            </div>
                            {isOpen ?
                                <span className='ms-2 text-sm'>Post</span>
                                :
                                ""}
                        </Link>

                        <Link href="dashboard/product" className=' text-white flex mb-2 p-2 rounded-md hover:bg-[#2b3550]'>
                            <div className={isOpen ? "w-[20px] h-[20px] icons" : "w-[20px] h-[20px] icons mx-auto"}>
                                <Image alt='grid icon' src='/icons/user.svg' width={15} height={15} ></Image>
                            </div>
                            {isOpen ?
                                <span className='ms-2 text-sm'>User</span>
                                :
                                ""}
                        </Link>

                        <Link href="dashboard/setting" className=' text-white flex mb-2 p-2 rounded-md hover:bg-[#2b3550]'>
                            <div className={isOpen ? "w-[20px] h-[20px] icons" : "w-[20px] h-[20px] icons mx-auto"}>
                                <Image alt='grid icon' src='/icons/setting.svg' width={15} height={15} ></Image>
                            </div>
                            {isOpen ?
                                <span className='ms-2 text-sm'>Setting</span>
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