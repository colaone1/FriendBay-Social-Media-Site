import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FaHeart, FaThumbsUp, FaLaugh, FaSadTear, FaAngry, FaEdit } from 'react-icons/fa';

interface Post {
  id: string;
  username: string;
  text: string;
  profilePicture: string;
  imageUrl: string;
  likes: number;
  reactions: {
    like: number;
    love: number;
    laugh: number;
    sad: number;
    angry: number;
  };
}

interface ScardProps {
  post: Post;
  onUpdatePost: (updatedPost: Post) => void;
}

const Scard: React.FC<ScardProps> = ({ post, onUpdatePost }) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(post.text);
  const [editedImageUrl, setEditedImageUrl] = useState(post.imageUrl);

  // Fallback for missing reactions
  const safeReactions = post.reactions || { like: 0, love: 0, laugh: 0, sad: 0, angry: 0 };

  const handleReaction = (type: keyof Post['reactions']) => {
    const updatedPost = {
      ...post,
      reactions: {
        ...safeReactions,
        [type]: safeReactions[type] + 1
      }
    };
    onUpdatePost(updatedPost);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedPost = {
      ...post,
      text: editedText,
      imageUrl: editedImageUrl
    };
    onUpdatePost(updatedPost);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedText(post.text);
    setEditedImageUrl(post.imageUrl);
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center mb-4">
        <img
          src={post.profilePicture || '/default-avatar.png'}
          alt={`${post.username}'s profile`}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-semibold">{post.username}</h2>
          <p className="text-gray-500 text-sm">Posted just now</p>
        </div>
        <button
          onClick={handleEdit}
          className="ml-auto text-gray-500 hover:text-blue-500"
          aria-label="Edit post"
        >
          <FaEdit size={20} />
        </button>
      </div>

      {isEditing ? (
        <div className="mb-4">
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
          <p className="text-gray-800 mb-4">{post.text}</p>
          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt="Post image"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          )}
        </>
      )}

      <div className="flex items-center space-x-4">
        <button
          onClick={() => handleReaction('like')}
          className="flex items-center space-x-1 text-gray-500 hover:text-blue-500"
        >
          <FaThumbsUp />
          <span>{safeReactions.like}</span>
        </button>
        <button
          onClick={() => handleReaction('love')}
          className="flex items-center space-x-1 text-gray-500 hover:text-red-500"
        >
          <FaHeart />
          <span>{safeReactions.love}</span>
        </button>
        <button
          onClick={() => handleReaction('laugh')}
          className="flex items-center space-x-1 text-gray-500 hover:text-yellow-500"
        >
          <FaLaugh />
          <span>{safeReactions.laugh}</span>
        </button>
        <button
          onClick={() => handleReaction('sad')}
          className="flex items-center space-x-1 text-gray-500 hover:text-blue-500"
        >
          <FaSadTear />
          <span>{safeReactions.sad}</span>
        </button>
        <button
          onClick={() => handleReaction('angry')}
          className="flex items-center space-x-1 text-gray-500 hover:text-red-500"
        >
          <FaAngry />
          <span>{safeReactions.angry}</span>
        </button>
      </div>
    </div>
  );
};

export default Scard; 