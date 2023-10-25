import cl from './MyProfile.module.css'
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer'

const MyProfile = () => {
	return (
		<div className={cl.myProfileWrapper}>
			<ProfileInfoContainer />
		</div>
	)
}

export default MyProfile
