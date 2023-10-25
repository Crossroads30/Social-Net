import MyPostsContainer from './MyPosts/MyPostsContainer'
import cl from './MyProfile.module.css'
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer'

const MyProfile = () => {
	return (
		<div className={cl.myProfileWrapper}>
			<ProfileInfoContainer />
			<MyPostsContainer />
		</div>
	)
}

export default MyProfile
