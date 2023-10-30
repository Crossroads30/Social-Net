import cl from '../../ProfileInfo/ProfileInfo.module.css'
import defaultUserImage from '../../../../../../assets/icons/default-user-img.png'
import photoIcon from '../../../../../../assets/icons/icons8-camera-48.png'

const Avatar = ({ userProfile }) => {
	return (
		<>
			<div className={cl.profileImage}>
				<img src={userProfile.photos.small !== null ? userProfile.photos.small : defaultUserImage} alt='default-user' />
			</div>
			<div className={cl.photoIcon}>
				<img src={photoIcon} alt='photo-icon' />
			</div>
		</>
	)
}

export default Avatar
