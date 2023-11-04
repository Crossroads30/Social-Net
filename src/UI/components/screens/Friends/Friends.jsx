import cl from './Friends.module.css'
import UserProfile from './UserProfile/UserProfile'

const Friends = ({ allUsers, currentPage, pageSize }) => {
	return (
		<div className={cl.usersContainer}>
			{allUsers.map(user => (
				<UserProfile user={user} currentPage={currentPage} pageSize={pageSize} key={user.id} />
			))}
		</div>
	)
}

export default Friends
