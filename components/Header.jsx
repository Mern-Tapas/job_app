import React from 'react'
import Toggal from './Toggal'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
    return (
        <>
            <div className='Header bg-white py-3 px-3 '>
                <div className="max-w-screen-lg mx-auto flex items-center justify-between">
                    <div className='flex items-center'>
                        <div className="logo rounded-full overflow-hidden max-h-[30px] max-w-[30px]">
                            <Image
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                                alt="Description of the image"
                                width={30}
                                height={30}
                            />
                        </div>
                        <Link href='/'>
                            <div className='ms-2'>
                                <h3>Company Name</h3>
                            </div>
                        </Link>
                    </div>
                    <div className='items-center flex'>



                        <div className="login-buttons flex items-center">
                            <Link href="signup" className='ring-1 ring-gray-300 hover:ring-gray-400 p-2 px-4 text-sm rounded-md'>
                                Sign Up
                            </Link>
                            <Link href="login" className='bg-gray-800 ring-2 ring-gray-900 text-white p-2 px-5 text-sm rounded-md hover:bg-gray-900 ms-2' >
                                Login
                            </Link>
                        </div>
                        <Toggal />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Header