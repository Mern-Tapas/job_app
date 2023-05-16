import React from 'react'
import Link from 'next/link'

async function Posts() {

    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    const postsData = await posts.json()

    return (
        <>
            <div className="max-w-screen-lg mx-auto px-3">
                <div className="posts mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {postsData.slice(0, 10).map((post) => {
                        return <>
                            <div className="post bg-white border rounded-lg p-3">


                                <div className='flex'>
                                    {/* <div>
                                        <div className="logo w-[25px] h-[25px] rounded-full overflow-hidden bg-gray-300">

                                        </div>
                                    </div> */}
                                    <div className=' my-auto'>
                                        <h1 className='capitalize' >{post.title.slice(0, 10)}</h1>
                                    </div>
                                </div>

                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500 normal-case'>{`${post.body.slice(0, 100)}`}</p>
                                </div>

                                <div className='mt-2 flex'>
                                    <Link href='' className='text-xs ms-auto ring-2 ring-gray-400 hover:bg-gray-950 hover:text-white hover:ring-gray-950 transition p-1 rounded-full px-3'>Read More</Link>
                                </div>

                            </div>
                        </>
                    })}
                </div>
            </div>
        </>
    )
}

export default Posts