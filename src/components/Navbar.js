import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          FriendBay™
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-200">
            View
          </Link>
          <Link href="/add" className="hover:text-blue-200">
            Add
          </Link>
        </div>
      </div>
    </nav>
  )
} 