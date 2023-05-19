import Sidebar from '@/components/Sidebar'
import React from 'react'
import Image from 'next/image'

function adminLayout({ children }) {
    return (
        <>
            <div className='h-screen bg-gray-50 flex overflow-hidden'>

                <Sidebar />

                <div className='overflow-y-scroll flex flex-col w-full'>
                    <div className='w-full bg-white p-2 flex  justify-between'>

                        <div className=''>

                        </div>

                        <div className=''>
                            <div className='relative'>
                                <button className='user-button'>
                                    <div className='w-[35px] h-[35px] overflow-hidden rounded-full'>
                                        <Image src="/profile.avif" width={40} height={40}  >
                                        </Image>
                                    </div>

                                    <div id="dropdownAvatar" className="top-[60px] dropdownAvatar z-10 opacity-0 absolute right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                            <div>Bonnie Green</div>
                                            <div className="font-medium truncate">name@flowbite.com</div>
                                        </div>
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                            </li>
                                        </ul>
                                        <div className="py-2">
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                        </div>
                                    </div>

                                </button>



                            </div>
                        </div>

                    </div>
                    <div className='w-full p-2 h-full flex'>
                        {children}
                    </div>
                </div>

            </div>
        </>
    )
}

export default adminLayout