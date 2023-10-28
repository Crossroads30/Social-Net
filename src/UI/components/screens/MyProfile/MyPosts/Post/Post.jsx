import cl from './Post.module.css'
import defaultUserPhoto from '../../../../../../assets/icons/default-user-img.png'
import heart from '../../../../../../assets/icons/icons8-heart-48.png'

const Post = ({ postId, text, likes, deletePost, photo }) => {
	return (
		<div className={cl.postWrapper}>
			<div className={cl.post}>
				<img
					src={!photo || photo === null || photo === undefined ? defaultUserPhoto : photo}
					alt='photo'
				/>
				<p>{text}</p>
			</div>
			<div className={cl.likes}>
				<span
					onClick={() => {
						deletePost(postId)
					}}
					className={cl.deletePost}
				>
					Delete post
				</span>
				<img src={heart} alt='heart' />
				<span>{likes}</span>
			</div>
		</div>
	)
}

export default Post
