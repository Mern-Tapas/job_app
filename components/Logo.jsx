import React from 'react'
import Link from 'next/link'


function Logo() {
    return (
        <>
            <Link href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                Flowbite
            </Link>
        </>
    )
}

export default Logo