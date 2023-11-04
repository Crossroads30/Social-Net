import { NavLink } from 'react-router-dom'
import defaultUserImg from '../../../../../assets/icons/default-user-img.png'
import FollowUnfollowButton from '../../../common/buttons/FollowButton'
import cl from '../Friends.module.css'

const UserInfo = ({ user }) => {

	const onTest = (e) => {
		e.preventDefault()
		e.stopPropagation()
		console.log('test')
	}

	return (
		<NavLink to={'/profile/' + user.id} className={cl.userProfileWrapper}>
			<div>
				<img className={cl.userAvatar} src={user.photos.small ? user.photos.small : defaultUserImg} alt='Avatar' />
				<div className={cl.userName}>{user.name.charAt(0).toUpperCase() + user.name.slice(1)}</div>
				<div className={cl.userStatus}>{user.status === null ? 'No status' : user.status}</div>
					<FollowUnfollowButton name={'Follow'} handler={onTest} />
			</div>
		</NavLink>
	)
}

export default UserInfo
