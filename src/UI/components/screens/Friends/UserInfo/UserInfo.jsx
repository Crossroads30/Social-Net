import { NavLink } from 'react-router-dom'
import defaultUserImg from '../../../../../assets/icons/default-user-img.png'
import cl from '../Friends.module.css'
import classNames from 'classnames'

const UserInfo = ({ user, getFollowUser, getUnfollowUser, followingInProgress, setFriend }) => {
	return (
		<NavLink to={'/profile/' + user.id} className={cl.userProfileWrapper}>
			<div>
				<img className={cl.userAvatar} src={user.photos.small ? user.photos.small : defaultUserImg} alt='Avatar' />
				<div className={cl.userName}>{user.name.charAt(0).toUpperCase() + user.name.slice(1)}</div>
				<div className={cl.userStatus}>{user.status === null ? 'No status' : user.status}</div>
				{user.followed ? (
					<button
						className={classNames('follow-btn', 'unfollow-btn')}
						onClick={e => {
							e.preventDefault()
							e.stopPropagation()
							getUnfollowUser(user.id)
							setFriend()
						}}
						disabled={followingInProgress.some(id => id === user.id)}
					>
						- Unfollow
					</button>
				) : (
					<button
						className='follow-btn'
						onClick={e => {
							e.preventDefault()
							e.stopPropagation()
							getFollowUser(user.id)
							setFriend()
						}}
						disabled={followingInProgress.some(id => id === user.id)}
					>
						+ Follow
					</button>
				)}
			</div>
		</NavLink>
	)
}

export default UserInfo
