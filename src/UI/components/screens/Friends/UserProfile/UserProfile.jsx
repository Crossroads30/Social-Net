import defaultUserImg from '../../../../../assets/icons/default-user-img.png'
import cl from './UserProfile.module.css'

const UserProfile = ({ user }) => {
	return (
		<div>
			<div>
				<img className={cl.userAvatar} src={user.photos.small ? user.photos.small : defaultUserImg} alt='Avatar' />
			</div>
			<div>{user.name}</div>
			<div>{user.status === null ? 'No status' : user.status}</div>
		</div>
	)
}

export default UserProfile
