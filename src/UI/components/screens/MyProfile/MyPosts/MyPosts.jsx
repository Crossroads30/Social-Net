import AddPostContainer from './AddPost/AddPostContainer'
import cl from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = ({ posts, deletePost, photo, isOwner }) => {
	return (
		<div>
			{isOwner && <AddPostContainer />}
			{posts.map(post => (
				<Post postId={post.id} text={post.message} likes={post.likes} key={post.id} deletePost={deletePost} photo={photo} />
			))}
		</div>
	)
}

export default MyPosts
