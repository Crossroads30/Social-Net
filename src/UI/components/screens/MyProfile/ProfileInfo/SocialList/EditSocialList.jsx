import { EditSocialReduxForm } from '../EditProfileInfoForms/EditSocialForm'
import { useState } from 'react'
import SocialList from './SocialList'

const EditSocialList = ({ userProfile, getUpdateUserProfile, isOwner }) => {
	const [editSocial, setEditSocial] = useState(false)

	const activateSocialEdit = () => {
		setEditSocial(true)
	}
	const deactivateSocialEdit = () => {
		setEditSocial(false)
	}

	const onSubmitEditForm = formData => {
		getUpdateUserProfile(formData).then(() => {
			setEditSocial(false)
		})
	}

	return (
		<>
			{editSocial ? (
				<EditSocialReduxForm initialValues={userProfile} closeWindow={deactivateSocialEdit} userProfile={userProfile} onSubmit={onSubmitEditForm} />
			) : (
				<SocialList
					isOwner={isOwner}
					userProfile={userProfile}
					goToEditMode={() => {
						activateSocialEdit(true)
					}}
				/>
			)}
		</>
	)
}

export default EditSocialList
