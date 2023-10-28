import { reduxForm } from 'redux-form'
import cl from './EditProfileInfoForms.module.css'
import { createField } from '../../../../common/form-tools/FormControls/CreateField'
import {
	maxLengthCreator,
	required,
} from '../../../../common/form-tools/validators/validators'
import CloseButton from '../../../../common/buttons/CloseButton'

const maxLength20 = maxLengthCreator(20)

const EditSocialForm = ({
	handleSubmit,
	userProfile,
	error,
	closeWindow,
}) => {
	return (
		<div className={cl.socialForm}>
			<CloseButton closeWindow={closeWindow} />
			<form onSubmit={handleSubmit}>
				<ul className={cl.socials}>
					{Object.keys(userProfile.contacts).map(key => {
						return (
							<li key={key}>
								<b>{key}:</b>
								{createField(
									null,
									key,
									'contacts.' + key,
									[maxLength20],
									'input',
									{}
								)}
							</li>
						)
					})}
				</ul>
				{error && <div className={cl.formSummaryError}>{error}</div>}
			</form>
		</div>
	)
}

export const EditSocialReduxForm = reduxForm({
	form: 'edit-social',
})(EditSocialForm)

export default EditSocialForm
