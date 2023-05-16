'use client'
import React, { useState } from 'react'
import Link from 'next/link'


function Links() {

    const [links, setlinks] = useState([
        { link: "admit card", id: "1" },
        { link: "Result", id: "2" },
        { link: "police job", id: "3" },
        { link: "Railway job", id: "4" },
        { link: "State Govt job", id: "5" },
        { link: "army job", id: "6" },
        { link: "post office job", id: "7" },
        { link: "Teaching job", id: "8" },
        { link: "Engineering job", id: "9" },
        { link: "Medical job", id: "10" },
    ])

    return (
        <div className="max-w-screen-lg mx-auto px-3">
            <div className="links mt-4 flex flex-wrap ">
                {links.map((link) => {
                    return <Link href='' key={link.id} className='me-2 transition mb-2 hover:bg-blue-600 hover:text-white text-xs bg-blue-50 text-blue-500 p-1.5 px-3 rounded-full capitalize'>{link.link}</Link>
                })}
            </div>
        </div>
    )
}

export default Links