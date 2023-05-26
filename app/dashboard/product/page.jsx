'use client'

import PostForm from '@/components/PostForm'
import PostPreview from '@/components/PostPreview'
import React, { useState } from 'react'

function Page() {

  const [isOpen, setOpen] = useState(false)

  return (
    <div className="mt-3 grid lg:grid-cols-2 gap-2">

      <PostForm tableButton={() => (setOpen(!isOpen))} />

      <PostPreview />

    </div>
  )
}

export default page