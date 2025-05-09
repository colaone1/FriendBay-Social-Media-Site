import React from 'react'
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
      <Add onsubmit={handleSubmit} />
    </>
  )
} 