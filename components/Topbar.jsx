'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Topbar() {
    return (
        <div className='w-full bg-white p-2 flex  justify-between sticky top-0'>

            <div className=''>

            </div>

            <div className=''>

                <div className='relative'>
                    <button className='user-button'>
                        <div className='w-[35px] h-[35px] overflow-hidden rounded-full'>
                            <Image alt='profile' src="/profile.avif" width={40} height={40}  >
                            </Image>
                        </div>

                        {/* dropdown */}

                        <div id="dropdownAvatar" className="top-[60px] dropdownAvatar z-10 opacity-0 absolute right-0 bg-white divide-y divide-gray-100 rounded-lg shadow-md w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                <div>Bonnie Green</div>
                                <div className="font-medium truncate">name@flowbite.com</div>
                            </div>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                                <li>
                                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
                                </li>
                            </ul>
                            <div className="py-2">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-red-600 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                            </div>
                        </div>

                        {/* dropdown */}
                    </button>



                </div>
            </div>

        </div>
    )
}

export default Topbar