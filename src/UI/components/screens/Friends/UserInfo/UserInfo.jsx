import { NavLink } from 'react-router-dom'
import defaultUserImg from '../../../../../assets/icons/default-user-img.png'
import FollowUnfollowButton from '../../../common/buttons/FollowButton'
import cl from '../Friends.module.css'
import classNames from 'classnames'

const UserInfo = ({ user, getFollowUser, getUnfollowUser, followingInProgress }) => {
	const onFollow = e => {
		e.preventDefault()
		e.stopPropagation()
		getUnfollowUser(user.id)
	}

	const onUnfollow = e => {
		e.preventDefault()
		e.stopPropagation()
		getFollowUser(user.id)
	}

	return (
		<NavLink to={'/profile/' + user.id} className={cl.userProfileWrapper}>
			<div>
				<img className={cl.userAvatar} src={user.photos.small ? user.photos.small : defaultUserImg} alt='Avatar' />
				<div className={cl.userName}>{user.name.charAt(0).toUpperCase() + user.name.slice(1)}</div>
				<div className={cl.userStatus}>{user.status === null ? 'No status' : user.status}</div>
				{user.followed ? (
					<div
						onClick={e => {
							e.preventDefault()
							e.stopPropagation()
							getUnfollowUser(user.id)
						}}
					>
						<FollowUnfollowButton name={'- Unfollow'} classN={classNames('follow-btn', 'unfollow-btn')} />
					</div>
				) : (
					<div
						onClick={e => {
							e.preventDefault()
							e.stopPropagation()
							getFollowUser(user.id)
						}}
					>
						<FollowUnfollowButton name={'+ Follow'} classN={'follow-btn'} />
					</div>
				)}
			</div>
		</NavLink>
	)
}

export default UserInfo
