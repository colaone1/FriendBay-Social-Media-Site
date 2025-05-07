import { useState, useEffect } from 'react'
import View from '../components/View'
import Navbar from '../components/Navbar'
import Add from '../components/Add'

export default function Home() {
  const [posts, setPosts] = useState([])
  const [postId, setPostId] = useState(undefined)
  const [editingPost, setEditingPost] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const listContents = localStorage.getItem("posts")
    let postValue = 0
    let loadedPosts = JSON.parse(listContents) || []
    // Ensure all posts have a reactions object
    loadedPosts = loadedPosts.map(post => ({
      ...post,
      reactions: post.reactions || { like: post.likes || 0, love: 0, laugh: 0 }
    }))
    if(loadedPosts.length > 0) {
      postValue = loadedPosts[loadedPosts.length - 1].postid
    }
    setPosts(loadedPosts)
    setPostId(postValue)
  }, [])

  const handleReaction = (id, type) => {
    setPosts(prevPosts => {
      const newPosts = prevPosts.map(post => {
        if (post.postid === id) {
          return {
            ...post,
            reactions: {
              ...post.reactions,
              [type]: (post.reactions[type] || 0) + 1
            }
          }
        }
        return post
      })
      localStorage.setItem("posts", JSON.stringify(newPosts))
      return newPosts
    })
  }

  const handleDelete = (id) => {
    setPosts(prevPosts => {
      const newPosts = prevPosts.filter(post => post.postid !== id)
      localStorage.setItem("posts", JSON.stringify(newPosts))
      return [...newPosts] // force a new array reference
    })
  }

  const handleEdit = (id) => {
    const post = posts.find(p => p.postid === id)
    setEditingPost(post)
  }

  const handleSaveEdit = (postid, id, text, img, _unused, profilePic) => {
    setPosts(prevPosts => {
      const newPosts = prevPosts.map(post =>
        post.postid === postid
          ? { ...post, id, text, img, profilePic }
          : post
      )
      localStorage.setItem("posts", JSON.stringify(newPosts))
      return newPosts
    })
    setEditingPost(null)
  }

  // Filter posts by search term (username or text)
  const filteredPosts = posts.filter(post =>
    post.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.text.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        {editingPost ? (
          <Add
            onsubmit={handleSaveEdit}
            lastid={editingPost.postid}
            initialData={editingPost}
            buttonText="Save Changes"
          />
        ) : (
          <>
            <div className="mb-6">
              <form onSubmit={e => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Search by username or text..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </form>
            </div>
            <View posts={filteredPosts} reactAction={handleReaction} deleteAction={handleDelete} onEdit={handleEdit} />
          </>
        )}
      </div>
    </div>
  )
} 