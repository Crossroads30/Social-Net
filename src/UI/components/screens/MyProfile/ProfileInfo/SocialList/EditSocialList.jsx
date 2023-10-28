import { EditSocialReduxForm } from '../EditProfileInfoForms/EditSocialForm'
import { useState } from 'react'
import SocialList from './SocialList'


const EditSocialList = ({ userProfile }) => {

	const [editSocial, setEditSocial] = useState(false)

	const activateSocialEdit = () => {
		setEditSocial(true)
	}

	return (
		<>
			{editSocial ? (
				<EditSocialReduxForm
					userProfile={userProfile}
				/>
			) : (
				<SocialList
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
