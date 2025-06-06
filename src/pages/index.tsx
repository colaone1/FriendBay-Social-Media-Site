import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import View from '../components/View'

export default function Home() {
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]')
    setPosts([...storedPosts])
  }, [])

  const reactAction = (postId: number, type: 'like' | 'love' | 'laugh') => {
    const updatedPosts = posts.map(post => {
      if (post.postid === postId) {
        return {
          ...post,
          reactions: {
            ...post.reactions,
            [type]: post.reactions[type] + 1
          }
        }
      }
      return post
    })
    setPosts(updatedPosts)
    localStorage.setItem('posts', JSON.stringify(updatedPosts))
  }

  const deleteAction = (postId: number) => {
    const updatedPosts = posts.filter(post => post.postid !== postId)
    setPosts(updatedPosts)
    localStorage.setItem('posts', JSON.stringify(updatedPosts))
  }

  const onEdit = (postId: number, updatedPost: any) => {
    const updatedPosts = posts.map(post => {
      if (post.postid === postId) {
        return {
          ...post,
          text: updatedPost.text,
          img: updatedPost.imageUrl
        }
      }
      return post
    })
    setPosts(updatedPosts)
    localStorage.setItem('posts', JSON.stringify(updatedPosts))
  }

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-4">
        <View
          posts={posts}
          reactAction={reactAction}
          deleteAction={deleteAction}
          onEdit={onEdit}
        />
      </main>
    </>
  )
} 