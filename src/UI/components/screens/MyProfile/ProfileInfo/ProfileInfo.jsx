import cl from './ProfileInfo.module.css'
import defaultUserImage from '../../../../../assets/icons/default-user-img.png'
import SocialListContainer from './SocialList/SocialListContainer'

const ProfileInfo = ({ userProfile }) => {
	if (!userProfile) {
		return <div> Loading...</div>
	}
	return (
		<div className={cl.myProfileInfo}>
			<div className={cl.profileImage}>
				<img src={userProfile.photos.small !== null ? userProfile.photos.small : defaultUserImage} alt='default-user' />
			</div>
			<div className={cl.infoWrapper}>
				<div className={cl.info1}>
					<h2>{userProfile.fullName}</h2>
					{/* <p>{userProfile.status}</p> */}
				</div>
				<div className={cl.info2}>
					<SocialListContainer />
					<p>logout</p>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo
