import Paginator from '../../common/Paginator/Paginator'
import Preloader from '../../common/Preloader/Preloader'
import cl from './Friends.module.css'
import UserInfo from './UserInfo/UserInfo'

const Friends = ({
	allUsers,
	currentPage,
	pageSize,
	totalUsersCount,
	onPageChangeHandler,
	getUnfollowUser,
	getFollowUser,
	followingInProgress,
}) => {
	if (!allUsers) {
		return (
			<div>
				<Preloader />
			</div>
		)
	}
	return (
		<div className={cl.friendsWrapper}>
			{allUsers && (
				<Paginator
					totalUsersCount={totalUsersCount}
					allUsers={allUsers}
					pageSize={pageSize}
					onPageChangeHandler={onPageChangeHandler}
					currentPage={currentPage}
				/>
			)}

			<div className={cl.usersContainer}>
				{allUsers.map(user => (
					<UserInfo
						user={user}
						currentPage={currentPage}
						pageSize={pageSize}
						key={user.id}
						getUnfollowUser={getUnfollowUser}
						getFollowUser={getFollowUser}
						followingInProgress={followingInProgress}
					/>
				))}
			</div>
			<Paginator
				totalUsersCount={totalUsersCount}
				allUsers={allUsers}
				pageSize={pageSize}
				onPageChangeHandler={onPageChangeHandler}
				currentPage={currentPage}
			/>
		</div>
	)
}

export default Friends
