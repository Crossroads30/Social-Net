import cl from './ProfileInfo.module.css'
import UserStatus from './UserStatus/UserStatus'
import About from './About/About'
import EditSocialList from './SocialList/EditSocialList'
import UserName from './UserName/UserName'
import Avatar from './Avatar/Avatar'
import { Logout } from '../../../common/buttons/Logout'

const ProfileInfo = ({ userProfile, userStatus, updateStatus, getUpdateUserProfile, getUserPhotoUpdate, logout, isOwner }) => {
	if (!userProfile) {
		return <div> Loading...</div>
	}
	return (
		<>
			<div className={cl.myProfileInfo}>
				<Avatar userProfile={userProfile} savePhoto={getUserPhotoUpdate} isOwner={isOwner} />
				<div className={cl.infoWrapper}>
					<div className={cl.info1}>
						<UserName userProfile={userProfile} getUpdateUserProfile={getUpdateUserProfile} isOwner={isOwner} />
						<UserStatus userStatus={userStatus} updateStatus={updateStatus} isOwner={isOwner} />
					</div>
					<div className={cl.info2}>
						<EditSocialList getUpdateUserProfile={getUpdateUserProfile} userProfile={userProfile} isOwner={isOwner} />
						{isOwner && <Logout logout={logout} />}
					</div>
				</div>
			</div>
			<About userProfile={userProfile} getUpdateUserProfile={getUpdateUserProfile} isOwner={isOwner} />
		</>
	)
}

export default ProfileInfo
