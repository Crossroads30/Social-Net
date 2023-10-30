import { useState } from 'react'
import EditButton from '../../../../common/buttons/EditButton'
import cl from './UserName.module.css'
import { EditUserNameReduxForm } from '../EditProfileInfoForms/EditUserNameForm'

const UserName = ({ userProfile, getUpdateUserProfile }) => {
	const [editUserName, setEditUserName] = useState(false)

	const activateEditUser = () => {
		setEditUserName(true)
	}
	const deactivateEditUser = () => {
		setEditUserName(false)
	}

	const onSubmitEditForm = formData => {
		getUpdateUserProfile(formData).then(() => {
			setEditUserName(false)
		})
	}

	return (
		<div className={cl.fullName}>
			{!editUserName && <h2>{userProfile.fullName}</h2>}
			{!editUserName && <EditButton goToEditMode={activateEditUser} />}
			{editUserName && (
				<EditUserNameReduxForm
					initialValues={userProfile}
					onSubmit={onSubmitEditForm}
					userProfile={userProfile}
					deactivateEditUser={deactivateEditUser}
				/>
			)}
		</div>
	)
}

export default UserName
