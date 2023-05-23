import PostForm from '@/components/PostForm'
import PostPreview from '@/components/PostPreview'
import React from 'react'

function page() {
  return (
    <div className="mt-3 grid lg:grid-cols-2 gap-2">

      <PostForm />

      <PostPreview />
      
    </div>
  )
}

export default page