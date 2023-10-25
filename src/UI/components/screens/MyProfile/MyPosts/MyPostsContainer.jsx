import React from 'react'
import { connect } from 'react-redux'
import MyPosts from './MyPosts'
// import { addPost } from '../../../../../BLL/reducers/profile-reducer'

class MyPostsContainer extends React.Component {
	componentDidMount() {}

	render() {
		return <MyPosts posts={this.props.posts}  />
	}
}

const mapStateToProps = state => {
	return {
		posts: state.profilePage.posts,
	}
}

export default connect(mapStateToProps, {})(MyPostsContainer)
