import { reduxForm } from 'redux-form'
import cl from './EditProfileInfoForms.module.css'
import CloseButton from '../../../../common/buttons/CloseButton'
import { createField } from '../../../../common/form-tools/FormControls/CreateField'
import SubmitButton from '../../../../common/buttons/SubmitButton'

const EditAboutForm = ({ handleSubmit, closeEditWindow }) => {
	return (
		<div>
			<form onSubmit={handleSubmit} className={cl.aboutForm}>
				<div className={cl.submit}>
					<CloseButton closeWindow={closeEditWindow} />
				</div>
				{createField(null, 'About me', 'aboutMe', [], 'textarea', {})}
				<div>
					{createField(cl.check, null, 'lookingForAJob', [], 'input', { type: 'checkbox' }, 'Looking For A Job ?')}
					<p>Looking For A Job ?</p>
				</div>
				{createField(null, 'looking For A Job Description', 'lookingForAJobDescription', [], 'textarea', {})}
				<div className={cl.submit}>
					<SubmitButton name={'Submit'} />
				</div>
				{/* {error && <div className={cl.formSummaryError}>{error}</div>} */}
			</form>
		</div>
	)
}

export const EditAboutReduxForm = reduxForm({
	form: 'edit-about',
})(EditAboutForm)

export default EditAboutForm
