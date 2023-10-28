import { useEffect, useState } from 'react'
import cl from './UserStatus.module.css'
import EditButton from '../../../../common/buttons/EditButton'

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
			{!editStatus && <span>{userStatus || 'No Status'}</span>}
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
			{!editStatus && (
					<EditButton goToEditMode={activateEditStatus} />
			)}
		</div>
	)
}

export default UserStatus

				{
					/* <span className='edit-btn' onClick={activateEditStatus}>
					Edit
				</span> */
				}
				{/* <EditButton  />} */}