import { useState } from 'react'
import { useRouter } from 'next/router'

// Default avatar used if no profile picture is provided
const DEFAULT_AVATAR = 'https://api.dicebear.com/7.x/bottts/svg?seed=default'

export default function Add({ onsubmit, lastid }) {
  // Form state for username, post text, image, and profile picture URL
  const [username, setUsername] = useState('')
  const [text, setText] = useState('')
  const [img, setImg] = useState('')
  const [profilePicUrl, setProfilePicUrl] = useState('')
  const router = useRouter()

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    const postid = lastid + 1
    // Use entered username or generate a random one
    const id = username.trim() || 'user' + Math.floor(Math.random() * 1000)
    // Use entered profile picture URL or fallback to default avatar
    const profilePic = profilePicUrl.trim() || DEFAULT_AVATAR
    
    // Call parent handler to add the post
    onsubmit(postid, id, text, img, 0, profilePic)
    // Reset form fields
    setUsername('')
    setText('')
    setImg('')
    setProfilePicUrl('')
    // Redirect to home page
    router.push('/')
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username input */}
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your username"
            required
          />
        </div>
        {/* Profile picture URL input */}
        <div>
          <label htmlFor="profilePic" className="block text-sm font-medium text-gray-700">
            Profile Picture URL (optional)
          </label>
          <input
            id="profilePic"
            type="url"
            value={profilePicUrl}
            onChange={e => setProfilePicUrl(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="https://example.com/avatar.jpg"
          />
        </div>
        {/* Post text input */}
        <div>
          <label htmlFor="text" className="block text-sm font-medium text-gray-700">
            What's on your mind?
          </label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows="4"
            required
          />
        </div>
        {/* Post image URL input */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image URL (optional)
          </label>
          <input
            type="url"
            id="image"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="https://example.com/image.jpg"
          />
        </div>
        {/* Submit button */}
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Post
        </button>
      </form>
    </div>
  )
} 