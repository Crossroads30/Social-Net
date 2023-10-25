import React from 'react'
import { connect } from 'react-redux'
import AddPost from './AddPost'
import { addPost } from '../../../../../../BLL/reducers/profile-reducer'

class AddPostContainer extends React.Component {
	componentDidMount() {}

	render() {
		return <AddPost {...this.props} />
	}
}

const mapStateToProps = state => {
	return {
		posts: state.profilePage.posts,
		newPostMessageText: state.profilePage.newPostMessage,
	}
}

export default connect(mapStateToProps, { addPost })(AddPostContainer)
