import Reactions from './Likes'
import Link from 'next/link'
import { useState } from 'react'
import { FaHeart, FaLaugh, FaSadTear, FaAngry, FaEdit } from 'react-icons/fa'
import { HiHeart } from 'react-icons/hi'

// Default avatar used if no profile picture is provided or image fails to load
const DEFAULT_AVATAR = 'https://api.dicebear.com/7.x/bottts/svg?seed=default'

export default function Scard({ profilePic, id, img, text, reactions, reactAction, postId, deleteAction, onEdit }) {
  // Track if the profile image failed to load
  const [imageError, setImageError] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(text)
  const [editedImageUrl, setEditedImageUrl] = useState(img)

  // If the image fails to load, set error state to show default avatar
  const handleImageError = () => {
    setImageError(true)
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    onEdit(postId, {
      text: editedText,
      imageUrl: editedImageUrl
    })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditedText(text)
    setEditedImageUrl(img)
    setIsEditing(false)
  }

  return (
    <div className="max-w-2xl mx-auto my-4 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-gray-50 border-b flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 mr-3">
            <img
              src={profilePic && !imageError ? profilePic : DEFAULT_AVATAR}
              alt="profile"
              className="rounded-full object-cover w-full h-full"
              onError={handleImageError}
            />
          </div>
          <Link href={`/profile/${id}`} className="font-semibold text-blue-600 hover:underline">
            @{id}
          </Link>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleEdit}
            className="text-yellow-500 hover:text-yellow-700 font-bold px-3 py-1 rounded transition-colors"
          >
            <FaEdit size={20} />
          </button>
          <button
            onClick={() => deleteAction(postId)}
            className="text-red-500 hover:text-red-700 font-bold px-3 py-1 rounded transition-colors"
          >
            Delete
          </button>
        </div>
      </div>

      {isEditing ? (
        <div className="p-4">
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="w-full p-2 border rounded-lg mb-2"
            rows={3}
          />
          <input
            type="text"
            value={editedImageUrl}
            onChange={(e) => setEditedImageUrl(e.target.value)}
            placeholder="Image URL (optional)"
            className="w-full p-2 border rounded-lg mb-2"
          />
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          {img && (
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9]">
              <img
                src={img}
                alt={text}
                className="object-cover w-full h-full rounded"
              />
            </div>
          )}
          <div className="p-4">
            <p className="text-gray-800 text-base sm:text-lg mb-4 whitespace-pre-wrap break-words">
              {text}
            </p>
            <Reactions reactions={reactions} reactAction={reactAction} postId={postId} />
          </div>
        </>
      )}
    </div>
  )
} 