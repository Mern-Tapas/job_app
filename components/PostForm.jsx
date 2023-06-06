import React from 'react'

function PostForm() {
    return (
        <div className="p-4 bg-white border rounded-lg">

            <div className="flex">
                <h2 className="p-2 bg-green-100 ring-green-500 text-green-500 ring-1 rounded-md text-xs font-medium">Create Post</h2>
            </div>
            {/* form start */}
            <div className='form' >

                <div className="mt-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input type="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required />
                </div>

                <div className="mt-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Description</label>
                    <textarea id="discription" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                </div>

                <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-2'>

                    <div className="mt-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>
                        <input type="date" id="start_date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required />
                    </div>

                    <div className="mt-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Date</label>
                        <input type="date" id="Last_date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required />
                    </div>

                    <div className="mt-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>
                        <input type="date" id="start_date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required />
                    </div>

                </div>
                {/* add extra dates */}
                <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-2">

                    <div className="mt-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input type="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required />
                    </div>

                    <div className="mt-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>
                        <input type="date" id="start_date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required />
                    </div>

                </div>

                <div className="mt-3">
                    <button className='w-100 block bg-blue-600 text-white ms-auto px-4 p-2 hover:bg-blue-800 rounded-md'>Add Date</button>
                </div>
                {/* add extra dates */}

                {/* add extra dates */}
                <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-2">

                    <div className="mt-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link Name</label>
                        <input type="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required />
                    </div>

                    <div className="mt-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link</label>
                        <input type="text" id="start_date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required />
                    </div>

                </div>

                <div className="mt-3">
                    <button className='w-100 block bg-blue-600 text-white ms-auto px-4 p-2 hover:bg-blue-800 rounded-md'>Add Links</button>
                </div>
                {/* add extra dates */}

                <div className="mt-3 flex">
                    <button className='ms-auto px-4 p-2 bg-blue-50 text-blue-600 rounded-md ring-1 ring-blue-600 hover:bg-blue-600 hover:text-white'>Create Table</button>
                </div>


            </div>
            {/* form end */}

        </div>
    )
}

export default PostForm
