import { NavLink } from 'react-router-dom'
import defaultUserImg from '../../../../../assets/icons/default-user-img.png'
import FollowUnfollowButton from '../../../common/buttons/FollowButton'
import cl from '../Friends.module.css'

const UserInfo = ({ user, getFollowUser, getUnfollowUser, followingInProgress }) => {
	// const onFollow = () => {
	//   onclick(getUnfollowUser(user.id))
	// }

	// const onUnfollow = () => {
	// 	onclick(getFollowUser(user.id))
		
	// }

	return (
		<NavLink to={'/profile/' + user.id} className={cl.userProfileWrapper}>
			<div>
				{/* <NavLink to={'/profile/' + user.id} className={cl.userProfileWrapper}> */}
				<img className={cl.userAvatar} src={user.photos.small ? user.photos.small : defaultUserImg} alt='Avatar' />
				{/* </NavLink> */}
				<div className={cl.userName}>{user.name.charAt(0).toUpperCase() + user.name.slice(1)}</div>
				<div className={cl.userStatus}>{user.status === null ? 'No status' : user.status}</div>
				{user.followed ? (
					<FollowUnfollowButton name={'Unfollow'} handler={onUnfollow} />
				) : (
					<FollowUnfollowButton name={'Follow'} handler={onFollow} />
				)}
				{/* {user.followed ? (
					<button
						disabled={followingInProgress.some(
							// кнопка становится неактивной во время запроса на подписку/отписку(follow/unfollow) на пользователя
							id => id === user.id
						)}
						// className={cl.button}
						onClick={e => {
							e.preventDefault()
							e.stopPropagation()
							getUnfollowUser(user.id) // thunkCreator unfollow
							// props.setFriend() // ссылка на thunkCreator getFriendsTC из sidebar-reducer
						}}
					>
						Unfollow
					</button>
				) : (
					<button
						disabled={followingInProgress.some(
							// кнопка становится неактивной во время запроса на подписку/отписку(follow/unfollow) на пользователя
							id => id === user.id
						)}
						// className={cl.button}
						onClick={e => {
							e.preventDefault()
							e.stopPropagation()
							getFollowUser(user.id) // thunkCreator follow
							// props.setFriend() // ссылка на thunkCreator getFriendsTC из sidebar-reducer
						}}
					>
						Follow
					</button>
				)} */}
			</div>
		</NavLink>
	)
}

export default UserInfo
