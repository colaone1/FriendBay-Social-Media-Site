import { useState, useEffect } from 'react'
import toastr from 'toastr'

export default function Add({ onsubmit, lastid, initialData, buttonText }) {
  const [formData, setFormData] = useState({
    postId: 0,
    id: "",
    text: "",
    img: "",
    profilePic: "",
  })

  useEffect(() => {
    if (initialData) {
      setFormData({
        postId: initialData.postid,
        id: initialData.id,
        text: initialData.text,
        img: initialData.img,
        profilePic: initialData.profilePic,
      })
    } else {
      setFormData(prev => ({ ...prev, postId: lastid }))
    }
    toastr.options = {
      closeButton: true,
      debug: false,
      extendedTimeOut: "1000",
      hideDuration: "1000",
      hideEasing: "linear",
      hideMethod: "fadeOut",
      newestOnTop: false,
      onclick: null,
      positionClass: "toast-top-full-width",
      preventDuplicates: true,
      progressBar: true,
      showDuration: "300",
      showEasing: "swing",
      showMethod: "fadeIn",
      timeOut: "5000",
    }
    toastr.clear()
  }, [lastid, initialData])

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const newId = initialData ? formData.postId : Date.now()
    onsubmit(newId, formData.id, formData.text, formData.img, 0, formData.profilePic)
    toastr.success(initialData ? "Post updated" : "Post added")
    setFormData({
      postId: newId,
      id: "",
      text: "",
      img: "",
      profilePic: "",
    })
  }

  return (
    <form onSubmit={submitHandler} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">User ID</label>
          <input
            name="id"
            type="text"
            value={formData.id}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Text</label>
          <input
            name="text"
            type="text"
            value={formData.text}
            placeholder="Enter your post text"
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
          <input
            name="img"
            type="text"
            value={formData.img}
            placeholder="Enter image URL"
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture URL</label>
          <input
            name="profilePic"
            type="text"
            value={formData.profilePic}
            placeholder="Enter profile picture URL"
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {buttonText || (initialData ? "Save Changes" : "Add Post")}
        </button>
      </div>
    </form>
  )
} 