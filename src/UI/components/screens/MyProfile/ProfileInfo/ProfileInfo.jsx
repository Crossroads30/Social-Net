import cl from './ProfileInfo.module.css'
import defaultUserImage from '../../../../../assets/icons/default-user-img.png'
// import SocialList from './SocialList/SocialList'
import UserStatus from './UserStatus/UserStatus'
import About from './About/About'
import EditSocialList from './SocialList/EditSocialList'

const ProfileInfo = ({
	userProfile,
	userStatus,
	updateStatus,
	userLocation,
	workAt,
	getUpdateUserProfile,
}) => {
	if (!userProfile) {
		return <div> Loading...</div>
	}
	return (
		<>
			<div className={cl.myProfileInfo}>
				<div className={cl.profileImage}>
					<img
						src={
							userProfile.photos.small !== null
								? userProfile.photos.small
								: defaultUserImage
						}
						alt='default-user'
					/>
				</div>
				<div className={cl.infoWrapper}>
					<div className={cl.info1}>
						<h2>{userProfile.fullName}</h2>
						<UserStatus
							userStatus={userStatus}
							updateStatus={updateStatus}
						/>
					</div>
					<div className={cl.info2}>
						<EditSocialList
							getUpdateUserProfile={getUpdateUserProfile}
							userProfile={userProfile}
						/>
					</div>
				</div>
			</div>
			<About
				userProfile={userProfile}
				userLocation={userLocation}
				workAt={workAt}
			/>
		</>
	)
}

export default ProfileInfo
