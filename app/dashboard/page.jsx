import React from 'react'
import Count from '@/components/Count'

function page() {
  return (
    <div className="flex flex-col">
      <div>
        <div className='max-w-screen-2xl mx-auto'>
          <div className='grid  sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 gap-2 grid-rows-5 grid-rows-[120px_120px_120px_120px_120px_120px_400px_400px_300px] sm:grid-rows-[120px_120px_120px_400px_400px_300px_300px] md:grid-rows-[120px_120px_400px_300px]  2xl:grid-rows-[120px_400px_300px]'>
            <div className='rounded-md p-2 bg-white border'><Count /></div>
            <div className='rounded-md p-2 bg-white border'><Count /></div>
            <div className='rounded-md p-2 bg-white border'><Count /></div>
            <div className='rounded-md p-2 bg-white border'><Count /></div>
            <div className='rounded-md p-2 bg-white border'><Count /></div>
            <div className='rounded-md p-2 bg-white border'><Count /></div>

            <div className='rounded-md p-2 bg-white border sm:col-span-2 2xl:col-span-4'>
              d
            </div>
            <div className='rounded-md p-2 bg-white border sm:col-span-2 md:col-span-1 2xl:col-span-2 '></div>
            <div className='rounded-md p-2 bg-white border sm:col-span-2 md:col-span-1 2xl:col-span-2'></div>
            <div className='rounded-md p-2 bg-white border sm:col-span-2 2xl:col-span-4'></div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default page