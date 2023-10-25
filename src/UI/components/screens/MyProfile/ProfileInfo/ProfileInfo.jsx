import cl from './ProfileInfo.module.css'
import defaultUserImage from '../../../../../assets/icons/default-user-img.png'
import SocialListContainer from './SocialList/SocialListContainer'

const ProfileInfo = () => {
	return (
		<div className={cl.myProfileInfo}>
			<div className={cl.profileImage}>
				<img src={defaultUserImage} alt='default-user' />
			</div>
			<div className={cl.infoWrapper}>
				<div className={cl.info1}>
					<h2>user name</h2>
					<p>user status</p>
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
