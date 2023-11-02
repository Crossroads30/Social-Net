import cl from './ProfileInfo.module.css'
import UserStatus from './UserStatus/UserStatus'
import About from './About/About'
import EditSocialList from './SocialList/EditSocialList'
import UserName from './UserName/UserName'
import Avatar from './Avatar/Avatar'
import { Logout } from '../../../common/buttons/Logout'

const ProfileInfo = ({ userProfile, userStatus, updateStatus, getUpdateUserProfile, getUserPhotoUpdate }) => {
	if (!userProfile) {
		return <div> Loading...</div>
	}
	return (
		<>
			<div className={cl.myProfileInfo}>
				<Avatar userProfile={userProfile} savePhoto={getUserPhotoUpdate} />
				<div className={cl.infoWrapper}>
					<div className={cl.info1}>
						<UserName userProfile={userProfile} getUpdateUserProfile={getUpdateUserProfile} />
						<UserStatus userStatus={userStatus} updateStatus={updateStatus} />
					</div>
					<div className={cl.info2}>
						<EditSocialList getUpdateUserProfile={getUpdateUserProfile} userProfile={userProfile} />
						<Logout />
					</div>
				</div>
			</div>
			<About userProfile={userProfile} getUpdateUserProfile={getUpdateUserProfile} />
		</>
	)
}

export default ProfileInfo
