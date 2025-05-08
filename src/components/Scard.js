import Image from 'next/image'
import Reactions from './Likes'
import Link from 'next/link'
import { useState } from 'react'

export default function Scard({ profilePic, id, img, text, reactions, reactAction, postId, deleteAction, onEdit }) {
  const [imageLoading, setImageLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
    setImageLoading(false)
  }

  return (
    <div className="max-w-2xl mx-auto my-4 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-gray-50 border-b flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 mr-3">
            {profilePic ? (
              <Image 
                src={profilePic} 
                alt="profile" 
                fill
                className="rounded-full object-cover"
                sizes="(max-width: 640px) 40px, 48px"
                loading="lazy"
                onLoadingComplete={() => setImageLoading(false)}
                onError={handleImageError}
              />
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-gray-300 rounded-full">
                <circle cx="12" cy="8" r="4" />
                <path d="M12 14c-4 0-6 2-6 4v2h12v-2c0-2-2-4-6-4z" />
              </svg>
            )}
          </div>
          <Link href={`/profile/${id}`} className="font-semibold text-blue-600 hover:underline">
            @{id}
          </Link>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(postId)}
            className="text-yellow-500 hover:text-yellow-700 font-bold px-3 py-1 rounded transition-colors"
          >
            Edit
          </button>
          <button
            onClick={() => deleteAction(postId)}
            className="text-red-500 hover:text-red-700 font-bold px-3 py-1 rounded transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
      {img && !imageError && (
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9]">
          {imageLoading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
          <Image 
            src={img} 
            alt={text} 
            fill
            className="object-cover transition-opacity duration-300"
            style={{ opacity: imageLoading ? 0 : 1 }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            onLoadingComplete={() => setImageLoading(false)}
            onError={handleImageError}
          />
        </div>
      )}
      <div className="p-4">
        <p className="text-gray-800 text-base sm:text-lg mb-4 whitespace-pre-wrap break-words">
          {text}
        </p>
        <Reactions reactions={reactions} reactAction={reactAction} postId={postId} />
      </div>
    </div>
  )
} 