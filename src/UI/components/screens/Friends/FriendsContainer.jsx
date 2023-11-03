import React from 'react'
import { connect } from 'react-redux'
import Friends from './Friends'
import { getAllUsers } from '../../../../BLL/reducers/users-reducer'

class FriendsContainer extends React.Component {
	componentDidMount() {
		this.props.getAllUsers()
	}

	render() {
		return <Friends allUsers={this.props.allUsers} />
	}
}

const mapStateToProps = state => {
	return {
		allUsers: state.friendsPage.users
	}
}

export default connect(mapStateToProps, { getAllUsers })(FriendsContainer)
