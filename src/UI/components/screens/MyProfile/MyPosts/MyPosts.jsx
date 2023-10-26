import AddPostContainer from './AddPost/AddPostContainer'
import cl from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = ({ posts, deletePost }) => {
	return (
		<div>
			<AddPostContainer />
			{posts.map(post => (
				<Post postId={post.id} text={post.message} likes={post.likes} key={post.id} deletePost={deletePost} />
			))}
		</div>
	)
}

export default MyPosts
