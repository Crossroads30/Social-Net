import { useEffect, useState } from 'react'
import cl from './UserStatus.module.css'

const UserStatus = ({ userStatus, updateStatus }) => {
	let [editStatus, setEditStatus] = useState(false)
	let [newStatus, setNewStatus] = useState(userStatus)

	useEffect(() => {
		setNewStatus(userStatus)
	}, [userStatus])

	const activateEditStatus = () => {
		setEditStatus(true)
	}
	const deactivateEditStatus = () => {
		setEditStatus(false)
		updateStatus(newStatus)
	}
	const statusOnChange = event => {
		setNewStatus(event.currentTarget.value)
	}

	return (
		<div className={cl.status}>
			{!editStatus && <p onDoubleClick={activateEditStatus}>{userStatus || 'No Status'}</p>}
			{editStatus && (
				<input
					value={newStatus}
					autoFocus={true}
					onBlur={deactivateEditStatus}
					onChange={statusOnChange}
					onKeyDown={event => {
						if (event.key === 'Enter') {
							deactivateEditStatus()
						}
					}}
				/>
			)}
		</div>
	)
}

export default UserStatus
