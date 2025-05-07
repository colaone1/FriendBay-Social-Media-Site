import Scard from './Scard'

export default function View({ posts, reactAction, deleteAction, onEdit }) {
  return (
    <div className="space-y-6 py-6">
      {posts.map((post) => (
        <Scard
          key={post.postid}
          postId={post.postid}
          id={post.id}
          text={post.text}
          img={post.img}
          reactions={post.reactions}
          profilePic={post.profilePic}
          reactAction={reactAction}
          deleteAction={deleteAction}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
} 