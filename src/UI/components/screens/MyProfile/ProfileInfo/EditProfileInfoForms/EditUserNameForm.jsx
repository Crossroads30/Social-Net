import { reduxForm } from 'redux-form'
import cl from './EditProfileInfoForms.module.css'
import { createField } from '../../../../common/form-tools/FormControls/CreateField'
import SubmitButton from '../../../../common/buttons/SubmitButton'
import { maxLengthCreator } from '../../../../common/form-tools/validators/validators'
import CloseButton from '../../../../common/buttons/CloseButton'

const maxLength20 = maxLengthCreator(20)

const EditUserNameForm = ({
	handleSubmit,
	error,
	userProfile,
	deactivateEditUser,
}) => {
	return (
		<div>
			<form onSubmit={handleSubmit} className={cl.userNameForm}>
				<div className={cl.submit}>
					<CloseButton closeWindow={deactivateEditUser} />
				</div>
				{createField(
					null,
					'User Name',
					'fullName',
					[maxLength20],
					'input',
					{}
				)}
				<div className={cl.submit}>
					<SubmitButton name={'Submit'} />
				</div>
				{error && <div className={cl.formSummaryError}>{error}</div>}
			</form>
		</div>
	)
}

export const EditUserNameReduxForm = reduxForm({
	form: 'edit-name',
})(EditUserNameForm)

export default EditUserNameForm
