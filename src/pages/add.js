import Add from '../components/Add'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'

export default function AddPage() {
  const [postId, setPostId] = useState(0)

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]')
    if (posts.length > 0) {
      setPostId(posts[posts.length - 1].postid)
    }
  }, [])

  const handleSubmit = (postid, id, text, img, likes, profilePic) => {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]')
    posts.push({ postid, id, text, img, likes, profilePic, reactions: { like: 0, love: 0, laugh: 0 } })
    localStorage.setItem('posts', JSON.stringify(posts))
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <Add onsubmit={handleSubmit} lastid={postId} />
      </div>
    </div>
  )
} 