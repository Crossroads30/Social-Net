import MyPostsContainer from './MyPosts/MyPostsContainer'
import cl from './MyProfile.module.css'
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer'

const MyProfile = ({ isOwner }) => {
	return (
		<div className={cl.myProfileWrapper}>
			<ProfileInfoContainer />
			<MyPostsContainer isOwner={isOwner} />
		</div>
	)
}

export default MyProfile
