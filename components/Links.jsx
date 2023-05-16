'use client'
import React, { useState } from 'react'
import Link from 'next/link'


function Links() {

    const [links, setlinks] = useState([
        { link: "admit card" },
        { link: "Result" },
        { link: "police job" },
        { link: "Railway job" },
        { link: "State Govt job" },
        { link: "army job" },
        { link: "post office job" },
        { link: "Teaching job" },
        { link: "Engineering job" },
        { link: "Medical job" },
    ])

    return (
        <div className="max-w-screen-lg mx-auto px-3">
            <div className="links mt-4 flex flex-wrap ">
                {links.map((link) => {
                    return <Link href='' className='me-2 transition mb-2 hover:bg-blue-600 hover:text-white text-xs bg-blue-50 text-blue-500 p-1.5 px-3 rounded-full ring-2 ring-blue-600 capitalize'>{link.link}</Link>
                })}
            </div>
        </div>
    )
}

export default Links