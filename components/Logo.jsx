import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


function Logo() {
    return (
        <>
            <Link href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <div className='w-[30px] h-[30px]'>

                    <Image
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                        alt="Description of the image"
                        width={30}
                        height={30}
                    />
                </div>
                Flowbite
            </Link>
        </>
    )
}

export default Logo