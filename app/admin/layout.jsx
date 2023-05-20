import Sidebar from '@/components/Sidebar'
import React from 'react'
import Topbar from '@/components/Topbar'

function adminLayout({ children }) {
    return (
        <>
            <div className='h-screen bg-gray-50 flex overflow-hidden'>

                <Sidebar />

                <div className='overflow-y-scroll flex flex-col w-full'>
                    <Topbar/>
                    <div className='w-full p-2 h-full flex'>
                        {children}
                    </div>
                </div>

            </div>
        </>
    )
}

export default adminLayout