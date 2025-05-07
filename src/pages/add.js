import { useState, useEffect } from 'react'
import Add from '../components/Add'
import Navbar from '../components/Navbar'

export default function AddPost() {
  const [postId, setPostId] = useState(0)

  useEffect(() => {
    const listContents = localStorage.getItem("posts")
    let postValue = 0
    if(listContents) {
      postValue = (JSON.parse(listContents)[JSON.parse(listContents).length -1].postid) 
    }
    setPostId(postValue)
  }, [])

  const updateListItems = (postid, id, text, img, likes, profilePic) => {
    const postItem = { postid, id, text, img, profilePic, reactions: { like: 0, love: 0, laugh: 0 } }
    const currentPosts = JSON.parse(localStorage.getItem("posts") || "[]")
    const newPosts = [...currentPosts, postItem]
    localStorage.setItem("posts", JSON.stringify(newPosts))
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <Add onsubmit={updateListItems} lastid={postId} />
      </div>
    </div>
  )
} 