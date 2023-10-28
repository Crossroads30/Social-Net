import { reduxForm } from 'redux-form'
import cl from './EditProfileInfoForms.module.css'

const EditAboutForm = ({ handleSubmit }) => {
	return (
		<div>
			<form onSubmit={handleSubmit}>
        
      </form>
		</div>
	)
}

export const EditAboutReduxForm = reduxForm({
	form: 'edit-about',
})(EditAboutForm)

export default EditAboutForm
