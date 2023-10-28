import { reduxForm } from 'redux-form'
import cl from './EditProfileInfoForms.module.css'
import { createField } from '../../../../common/form-tools/FormControls/CreateField'  

const EditSocialForm = ({ handleSubmit }) => {
	return (
		<div>
			<form onSubmit={handleSubmit}>
				{}
			</form>
		</div>
	)
}

export const EditSocialReduxForm = reduxForm({
	form: 'edit-social',
})(EditSocialForm)

export default EditSocialForm
