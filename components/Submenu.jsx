import React from 'react'

function Submenu() {
    return (
        <ul className='ps-4 mt-2'>
            <li className='w-[20px] h-[20px] text-white flex'>
                <Image src='/icons/circle.svg' alt="images" width={15} height={15}  ></Image>
                <span className='ms-2 text-sm'>Dashboard</span>
            </li>
        </ul>
    )
}

export default Submenu