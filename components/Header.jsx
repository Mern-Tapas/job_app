import React from 'react'
import Toggal from './Toggal'
import Link from 'next/link'

function Header() {
    return (
        <div className='Header bg-white p-2 px-3 '>
            <div className="max-w-screen-lg mx-auto flex items-center justify-between">
                <div className='flex items-center'>
                    <div className="logo bg-gray-950 rounded-full min-h-[30px] min-w-[30px]">
                        <img src="../public/logo.jpg" alt="" />
                    </div>
                    <div className='ms-2'>
                        <h3>Company Name</h3>
                    </div>
                </div>
                <div className='items-center flex'>
                    <div className="login-buttons flex items-center">
                        <Link href="signup">
                        <button className='ring-2 ring-gray-300 hover:ring-gray-400 p-2 px-4 text-sm rounded-md' >Sign Up</button>
                        </Link>
                        <Link href="login">
                            <button className='bg-gray-800 ring-2 ring-gray-900 text-white p-2 px-5 text-sm rounded-md hover:bg-gray-900 ms-2' >login</button>
                        </Link>
                    </div>
                    <Toggal />
                </div>
            </div>
        </div>
    )
}

export default Header