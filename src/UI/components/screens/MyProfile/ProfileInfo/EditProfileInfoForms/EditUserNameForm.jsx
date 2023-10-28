import { reduxForm } from 'redux-form'
import cl from './EditProfileInfoForms.module.css'

const EditUserNameForm = ({ handleSubmit }) => {
	return (
		<div>
			<form onSubmit={handleSubmit}></form>
		</div>
	)
}

export const EditUserNameReduxForm = reduxForm({
	form: 'edit-name',
})(EditUserNameForm)

export default EditUserNameForm
