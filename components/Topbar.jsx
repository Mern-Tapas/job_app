'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Topbar() {
    return (
        <div className='w-full bg-white p-2 flex  justify-between sticky top-0 border-b'>

            <div className=''>


                <form class="flex items-center">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
                    </div>
                    <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span class="sr-only">Search</span>
                    </button>
                </form>


            </div>

            <div className=''>


                <div className='relative flex'>

                    <div className='w-[35px] h-[35px] rounded-full bg-gray-100 me-3 flex'>
                        <div className='m-auto h-[20px] w-[20px]'>
                            <Image alt='profile' src="/icons/bell.svg" width={20} height={20}  >
                            </Image>
                        </div>
                    </div>

                    <div className='w-[35px] h-[35px] rounded-full bg-gray-100 me-3 flex'>
                        <div className='m-auto h-[20px] w-[20px]'>
                            <Image alt='profile' src="/icons/bell.svg" width={20} height={20}  >
                            </Image>
                        </div>
                    </div>



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