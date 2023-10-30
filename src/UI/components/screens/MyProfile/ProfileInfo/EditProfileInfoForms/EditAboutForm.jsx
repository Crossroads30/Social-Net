import { reduxForm } from 'redux-form'
import cl from './EditProfileInfoForms.module.css'

const EditAboutForm = ({ handleSubmit }) => {
	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className={cl.userNameForm}
			>
				<div className={cl.submit}>
					<CloseButton
						closeWindow={deactivateEditUser}
					/>
				</div>
				{createField(
					null,
					'User Name',
					'aboutMe',
					[],
					'textarea',
					{}
				)}
				{createField(
					null,
					'User Name',
					'lookingForAJob',
					[],
					'checkbox',
					{}
				)}
				{createField(
					null,
					'User Name',
					'lookingForAJobDescription',
					[],
					'textarea',
					{}
				)}
				{createField(
					null,
					'User Name',
					'userLocation',
					[],
					'input',
					{}
				)}
				{createField(
					null,
					'User Name',
					'workAt',
					[],
					'input',
					{}
				)}
				<div className={cl.submit}>
					<SubmitButton name={'Submit'} />
				</div>
				{error && (
					<div className={cl.formSummaryError}>
						{error}
					</div>
				)}
			</form>
		</div>
	)
}

export const EditAboutReduxForm = reduxForm({
	form: 'edit-about',
})(EditAboutForm)

export default EditAboutForm
