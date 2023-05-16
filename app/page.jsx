import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Links from '@/components/Links'
import Drawer from '@/components/Drawer'

function page() {
  return (
    <>

      <div className="header sticky top-0">
        <Header />
      </div>

      <div className='min-h-screen'>

        <Links />
        <Drawer />

      </div>

      <div className="foter mt-auto">
        <Footer />
      </div>

    </>
  )
}

export default page