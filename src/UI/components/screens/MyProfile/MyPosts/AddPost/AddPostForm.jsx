import { Field, reduxForm, reset } from 'redux-form'
import { FormElement } from '../../../../common/form-tools/FormControls/FormElement'
import cl from './AddPost.module.css'
import SubmitButton from '../../../../common/buttons/SubmitButton'

const AddPostForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div className={cl.newPostTextWrapper}>
				<Field
					component={FormElement}
					element_type='textarea'
					className={cl.newPostText}
					name='newPostMessageText'
					placeholder='Your post...'
					validate={[]}
				/>
				<SubmitButton name={'Add Post'} />
			</div>
		</form>
	)
}

const afterSubmit = (result, dispatch) => dispatch(reset('posts'))

export const AddPostReduxForm = reduxForm({
	// a unique name for the form
	form: 'posts',
	// clear input after submit
	onSubmitSuccess: afterSubmit,
})(AddPostForm)

export default AddPostForm
