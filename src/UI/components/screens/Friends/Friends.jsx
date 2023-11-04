import cl from './Friends.module.css'
import UserInfo from './UserInfo/UserInfo'

const Friends = ({ allUsers, currentPage, pageSize }) => {
	return (
		<div className={cl.usersContainer}>
			{allUsers.map(user => (
				<UserInfo user={user} currentPage={currentPage} pageSize={pageSize} key={user.id} />
			))}
		</div>
	)
}

export default Friends
