import cl from './Friends.module.css'
import UserProfile from './UserProfile/UserProfile'

const Friends = ({ allUsers, currentPage, pageSize }) => {
	return (
		<div>
			{allUsers.map(user => (
				<UserProfile user={user} currentPage={currentPage} pageSize={pageSize} key={user.id} />
			))}
		</div>
	)
}

export default Friends
