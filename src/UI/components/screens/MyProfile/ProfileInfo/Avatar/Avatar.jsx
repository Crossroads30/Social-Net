import cl from '../../ProfileInfo/ProfileInfo.module.css'
import defaultUserImage from '../../../../../../assets/icons/default-user-img.png'
import photoIcon from '../../../../../../assets/icons/icons8-camera-48.png'

const Avatar = ({ userProfile, savePhoto }) => {

  	const onAvatarSelected = event => {
			event.target.files.length && savePhoto(event.target.files[0]) //условие - если фото есть(event.target.files.length), то тогда передаем его в props
		}

	return (
		<>
			<div className={cl.profileImage}>
				<img src={userProfile.photos.small !== null ? userProfile.photos.small : defaultUserImage} alt='default-user' />
				<div className={cl.photoIcon}>
					<label htmlFor='file-input'>
						<img src={photoIcon} alt='photo-icon' />
					</label>
					<input id='file-input' type={'file'} onChange={onAvatarSelected}></input>
				</div>
			</div>
		</>
	)
}

export default Avatar