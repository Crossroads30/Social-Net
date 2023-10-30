import cl from './ProfileInfo.module.css'
import defaultUserImage from '../../../../../assets/icons/default-user-img.png'
// import SocialList from './SocialList/SocialList'
import UserStatus from './UserStatus/UserStatus'
import About from './About/About'
import EditSocialList from './SocialList/EditSocialList'
import EditButton from '../../../common/buttons/EditButton'
import UserName from './UserName/UserName'

const ProfileInfo = ({
	userProfile,
	userStatus,
	updateStatus,
	getUpdateUserProfile,
}) => {



	if (!userProfile) {
		return <div> Loading...</div>
	}
	return (
		<>
			<div className={cl.myProfileInfo}>
				<div className={cl.profileImage}>
					<img src={userProfile.photos.small !== null ? userProfile.photos.small : defaultUserImage} alt='default-user' />
				</div>
				<div className={cl.infoWrapper}>
					<div className={cl.info1}>
						<UserName userProfile={userProfile} getUpdateUserProfile={getUpdateUserProfile} />
						<UserStatus userStatus={userStatus} updateStatus={updateStatus} />
					</div>
					<div className={cl.info2}>
						<EditSocialList getUpdateUserProfile={getUpdateUserProfile} userProfile={userProfile} />
					</div>
				</div>
			</div>
			<About userProfile={userProfile} getUpdateUserProfile={getUpdateUserProfile} />
		</>
	)
}

export default ProfileInfo
