import Paginator from '../../common/Paginator/Paginator'
import cl from './Friends.module.css'
import UserInfo from './UserInfo/UserInfo'

const Friends = ({ allUsers, currentPage, pageSize, totalUsersCount }) => {
	return (
		<div className={cl.friendsWrapper}>
			<Paginator totalUsersCount={totalUsersCount} allUsers={allUsers} pageSize={pageSize} />
			<div className={cl.usersContainer}>
				{allUsers.map(user => (
					<UserInfo user={user} currentPage={currentPage} pageSize={pageSize} key={user.id} />
				))}
			</div>
		</div>
	)
}

export default Friends
