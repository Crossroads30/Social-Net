import defaultUserImg from '../../../../../assets/icons/default-user-img.png'
import cl from './UserProfile.module.css'

const UserProfile = ({ user }) => {
	return (
		<div className={cl.userProfileWrapper}>
			<div className={cl.userAvatarWrapper}>
				<img className={cl.userAvatar} src={user.photos.small ? user.photos.small : defaultUserImg} alt='Avatar' />
			</div>
			<div className={cl.userAvatarWrapper}>
				<div className={cl.userName}>{user.name}</div>
				<div className={cl.userStatus}>{user.status === null ? 'No status' : user.status}</div>
			</div>
		</div>
	)
}

export default UserProfile
