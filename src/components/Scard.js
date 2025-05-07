import Image from 'next/image'
import Reactions from './Likes'
import Link from 'next/link'

export default function Scard({ profilePic, id, img, text, reactions, reactAction, postId, deleteAction, onEdit }) {
  return (
    <div className="max-w-2xl mx-auto my-4 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative w-8 h-8 mr-3">
            {profilePic ? (
              <Image 
                src={profilePic} 
                alt="profile" 
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-300 rounded-full">
                <circle cx="12" cy="8" r="4" />
                <path d="M12 14c-4 0-6 2-6 4v2h12v-2c0-2-2-4-6-4z" />
              </svg>
            )}
          </div>
          <Link href={`/profile/${id}`} className="font-semibold text-blue-600 hover:underline">@{id}</Link>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(postId)}
            className="text-yellow-500 hover:text-yellow-700 font-bold px-2 py-1 rounded"
          >
            Edit
          </button>
          <button
            onClick={() => deleteAction(postId)}
            className="text-red-500 hover:text-red-700 font-bold px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>
      {img && (
        <div className="relative w-full max-h-96" style={{height: '384px'}}>
          <Image 
            src={img} 
            alt={text} 
            fill
            className="object-cover rounded"
            style={{maxHeight: '384px'}}
          />
        </div>
      )}
      <div className="p-4">
        <p className="text-gray-800 mb-4">{text}</p>
        <Reactions reactions={reactions} reactAction={reactAction} postId={postId} />
      </div>
    </div>
  )
} 