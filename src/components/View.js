import { useState, useEffect } from 'react'
import Scard from './Scard'
import LoadingSpinner from './LoadingSpinner'
import PostSkeleton from './PostSkeleton'

export default function View({ posts, reactAction, deleteAction, onEdit }) {
  const [loading, setLoading] = useState(true)
  const [skeletons] = useState([1, 2, 3])

  useEffect(() => {
    if (posts) {
      setLoading(false)
    }
  }, [posts])

  if (loading) {
    return (
      <div className="space-y-6 py-6">
        {skeletons.map((_, index) => (
          <PostSkeleton key={index} />
        ))}
      </div>
    )
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No posts yet. Be the first to post!</p>
      </div>
    )
  }

  return (
    <div className="space-y-6 py-6">
      {posts.map((post) => (
        <Scard
          key={post.postid}
          postId={post.postid}
          id={post.id}
          text={post.text}
          img={post.img}
          reactions={post.reactions}
          profilePic={post.profilePic}
          reactAction={reactAction}
          deleteAction={deleteAction}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
} 