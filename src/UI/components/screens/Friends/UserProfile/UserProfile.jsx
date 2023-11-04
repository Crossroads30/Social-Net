import defaultUserImg from '../../../../../assets/icons/default-user-img.png'
import FollowUnfollowButton from '../../../common/buttons/FollowButton'
import cl from '../Friends.module.css'

const UserProfile = ({ user }) => {
	return (	
			<div className={cl.userProfileWrapper}>
					<img className={cl.userAvatar} src={user.photos.small ? user.photos.small : defaultUserImg} alt='Avatar' />
					<div className={cl.userName}>{user.name.charAt(0).toUpperCase() + user.name.slice(1)}</div>
					<div className={cl.userStatus}>{user.status === null ? 'No status' : user.status}</div>
					<FollowUnfollowButton name={'Follow'} />
		</div>
	)
}

export default UserProfile
