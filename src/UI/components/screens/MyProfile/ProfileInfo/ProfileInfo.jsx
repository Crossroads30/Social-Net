import cl from './ProfileInfo.module.css'
import defaultUserImage from '../../../../../assets/icons/default-user-img.png'
import SocialListContainer from './SocialList/SocialListContainer'
import UserStatus from './UserStatus/UserStatus'
import About from './About/About'

const ProfileInfo = ({ userProfile, userStatus, updateStatus }) => {
	if (!userProfile) {
		return <div> Loading...</div>
	}
	return (
		<>
			<div className={cl.myProfileInfo}>
				<div className={cl.profileImage}>
					<img
						src={userProfile.photos.small !== null ? userProfile.photos.small : defaultUserImage}
						alt='default-user'
					/>
				</div>
				<div className={cl.infoWrapper}>
					<div className={cl.info1}>
						<h2>{userProfile.fullName}</h2>
						<UserStatus userStatus={userStatus} updateStatus={updateStatus} />
					</div>
					<div className={cl.info2}>
						<SocialListContainer userProfile={userProfile} />
						<p>logout</p>
					</div>
				</div>
			</div>
			<About userProfile={userProfile} />
		</>
	)
}

export default ProfileInfo
