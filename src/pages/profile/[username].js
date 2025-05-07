import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Scard from '../../components/Scard'

export default function ProfilePage() {
  const router = useRouter()
  const { username } = router.query
  const [userPosts, setUserPosts] = useState([])

  useEffect(() => {
    if (!username) return
    const posts = JSON.parse(localStorage.getItem('posts') || '[]')
    setUserPosts(posts.filter(post => post.id === username))
  }, [username])

  // Get the latest post for profile info
  const latestPost = userPosts.length > 0 ? userPosts[userPosts.length - 1] : null

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">@{username}'s Profile</h1>
        {latestPost && latestPost.profilePic && (
          <img src={latestPost.profilePic} alt="Profile" className="w-24 h-24 rounded-full mb-4" />
        )}
        <h2 className="text-xl font-semibold mb-2">Posts by @{username}:</h2>
        {userPosts.length === 0 ? (
          <p className="text-gray-500">No posts yet.</p>
        ) : (
          <div className="space-y-6">
            {userPosts.map(post => (
              <Scard key={post.postid} {...post} likeaction={() => {}} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 