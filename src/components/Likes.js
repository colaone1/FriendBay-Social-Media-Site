import Image from 'next/image'

export default function Reactions({ reactions, reactAction, postId }) {
  return (
    <div className="flex space-x-4">
      <button 
        onClick={() => reactAction(postId, 'like')}
        className="flex items-center space-x-1 text-gray-600 hover:text-blue-500 transition-colors"
      >
        <span role="img" aria-label="like">👍</span>
        <span>{reactions.like}</span>
      </button>
      <button 
        onClick={() => reactAction(postId, 'love')}
        className="flex items-center space-x-1 text-gray-600 hover:text-pink-500 transition-colors"
      >
        <span role="img" aria-label="love">❤️</span>
        <span>{reactions.love}</span>
      </button>
      <button 
        onClick={() => reactAction(postId, 'laugh')}
        className="flex items-center space-x-1 text-gray-600 hover:text-yellow-500 transition-colors"
      >
        <span role="img" aria-label="laugh">😂</span>
        <span>{reactions.laugh}</span>
      </button>
    </div>
  )
} 