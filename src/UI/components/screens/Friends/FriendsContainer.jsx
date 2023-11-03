import React from 'react'
import { connect } from 'react-redux'
import Friends from './Friends'
import { getAllUsers } from '../../../../BLL/reducers/users-reducer'

class FriendsContainer extends React.Component {
	componentDidMount() {
		this.props.getAllUsers()
	}

	render() {
		return <Friends 
			allUsers={this.props.allUsers} 
			pageSize={this.props.pageSize} 
			currentPage={this.props.currentPage} />
	}
}

const mapStateToProps = state => {
	return {
		allUsers: state.friendsPage.users,
		pageSize: state.friendsPage.pageSize,
		currentPage: state.friendsPage.currentPage,
	}
}

export default connect(mapStateToProps, { getAllUsers })(FriendsContainer)
