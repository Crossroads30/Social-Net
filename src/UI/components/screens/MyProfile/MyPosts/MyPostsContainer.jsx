import React from 'react'
import { connect } from 'react-redux'
import MyPosts from './MyPosts'
import { deletePost } from '../../../../../BLL/reducers/profile-reducer'

class MyPostsContainer extends React.Component {
	componentDidMount() {}

	render() {
		return (
			<MyPosts
				posts={this.props.posts}
				deletePost={this.props.deletePost}
				photo={this.props.photo}
			/>
		)
	}
}

const mapStateToProps = state => {
	return {
		posts: state.profilePage.posts,
		photo: state.profilePage.userProfile.photos.small
	}
}

export default connect(mapStateToProps, { deletePost })(MyPostsContainer)
