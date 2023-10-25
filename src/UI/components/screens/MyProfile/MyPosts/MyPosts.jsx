import cl from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = ({posts, newPostMessageBody}) => {
	return (
		<div>
			{posts.map(post => (
				<Post text={post.message} likes={post.likes} key={post.id} />
			))}
		</div>
	)
}

export default MyPosts
