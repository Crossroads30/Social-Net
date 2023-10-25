import React from 'react'
import { connect } from 'react-redux'
import MyPosts from './MyPosts'

class MyPostsContainer extends React.Component {
	componentDidMount() {}

	render() {
		return <MyPosts />
	}
}

const mapStateToProps = state => {
	return {
		posts: state.profilePage.posts,
		newPostMessageBody: state.profilePage.newPostMessageBody,
	}
}

export default connect(mapStateToProps, {})(MyPostsContainer)
