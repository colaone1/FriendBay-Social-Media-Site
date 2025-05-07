import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            FriendBay™
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-blue-200">
              View
            </Link>
            <Link href="/add" className="hover:text-blue-200">
              Add
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 space-y-2`}>
          <Link 
            href="/" 
            className="block py-2 hover:text-blue-200"
            onClick={() => setIsMenuOpen(false)}
          >
            View
          </Link>
          <Link 
            href="/add" 
            className="block py-2 hover:text-blue-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Add
          </Link>
        </div>
      </div>
    </nav>
  )
} 