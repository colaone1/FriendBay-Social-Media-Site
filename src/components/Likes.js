import Image from 'next/image'

export default function Reactions({ reactions, reactAction, postId }) {
  return (
    <div className="flex space-x-6">
      <button 
        onClick={() => reactAction(postId, 'like')}
        className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-blue-50 active:bg-blue-100"
      >
        <span role="img" aria-label="like" className="text-xl">👍</span>
        <span className="font-medium">{reactions.like}</span>
      </button>
      <button 
        onClick={() => reactAction(postId, 'love')}
        className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors p-2 rounded-full hover:bg-pink-50 active:bg-pink-100"
      >
        <span role="img" aria-label="love" className="text-xl">❤️</span>
        <span className="font-medium">{reactions.love}</span>
      </button>
      <button 
        onClick={() => reactAction(postId, 'laugh')}
        className="flex items-center space-x-2 text-gray-600 hover:text-yellow-500 transition-colors p-2 rounded-full hover:bg-yellow-50 active:bg-yellow-100"
      >
        <span role="img" aria-label="laugh" className="text-xl">😂</span>
        <span className="font-medium">{reactions.laugh}</span>
      </button>
    </div>
  )
} 