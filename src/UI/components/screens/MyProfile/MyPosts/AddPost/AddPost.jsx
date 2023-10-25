import { AddPostReduxForm } from './AddPostForm'

const AddPost = (props) => {

	const addNewPost = formData => {
		const newPostMessage = formData.newPostMessageText
		props.addPost(newPostMessage)
	}


	return (
		<div>
			<AddPostReduxForm onSubmit={addNewPost} />
		</div>
	)
}

export default AddPost
