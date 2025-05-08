import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Add from '../components/Add'

interface Post {
  postid: number
  id: string
  text: string
  img: string
  likes: number
  profilePic: string
  reactions: {
    like: number
    love: number
    laugh: number
  }
}

export default function AddPage() {
  const [postId, setPostId] = useState<number>(0)

  useEffect(() => {
    const posts: Post[] = JSON.parse(localStorage.getItem('posts') || '[]')
    if (posts.length > 0) {
      setPostId(posts[posts.length - 1].postid)
    }
  }, [])

  const handleSubmit = (postid: number, id: string, text: string, img: string, likes: number, profilePic: string) => {
    const posts: Post[] = JSON.parse(localStorage.getItem('posts') || '[]')
    posts.unshift({ 
      postid, 
      id, 
      text, 
      img, 
      likes, 
      profilePic, 
      reactions: { like: 0, love: 0, laugh: 0 } 
    })
    localStorage.setItem('posts', JSON.stringify(posts))
  }

  return (
    <>
      <Navbar />
      <Add onsubmit={handleSubmit} lastid={postId} />
    </>
  )
} 