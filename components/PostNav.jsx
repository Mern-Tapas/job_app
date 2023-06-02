'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

function PostNav() {


    const route = usePathname()

    return (
        <div className="bg-white pt-3 flex rounded-lg border px-4">
            <div className={route === '/dashboard/post' ? 'p-2 border-b-4 border-blue-600 text-blue-600' : 'p-2'}>
                <Link href="/dashboard/post">Create</Link>
            </div>
            <div className={route === '/dashboard/post/posts' ? 'p-2 border-b-4 border-blue-600 text-blue-600' : 'p-2'}>
                <Link href="/dashboard/post/posts">Product</Link>
            </div>
        </div>
    )
}

export default PostNav