import Sidebar from '@/components/Sidebar'
import React from 'react'

function adminLayout({ children }) {
    return (
        <>
            <div className='h-screen bg-gray-50 flex overflow-hidden'>

                <Sidebar />

                <div className='overflow-y-scroll flex flex-col w-full'>
                    <div className='w-full bg-white p-2'>

                    </div>
                    <div className='w-full p-2'>
                        {children}
                    </div>
                </div>

            </div>
        </>
    )
}

export default adminLayout