import React from 'react'
import { connect } from 'react-redux'
import Friends from './Friends'
import { getAllUsers, setCurrentPage } from '../../../../BLL/reducers/users-reducer'

class FriendsContainer extends React.Component {
	componentDidMount() {
		this.props.getAllUsers()
	}

	onPageChangeHandler = (pageNumber) => {
		const { pageSize } = this.props
		this.props.getAllUsers(pageNumber, pageSize)
	}

	render() {
		return (
			<Friends
				allUsers={this.props.allUsers}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				totalUsersCount={this.props.totalUsersCount}
				onPageChangeHandler={this.onPageChangeHandler}
			/>
		)
	}
}

const mapStateToProps = state => {
	return {
		allUsers: state.friendsPage.users,
		pageSize: state.friendsPage.pageSize,
		currentPage: state.friendsPage.currentPage,
		totalUsersCount: state.friendsPage.totalUsersCount,
	}
}

export default connect(mapStateToProps, { getAllUsers, setCurrentPage })(FriendsContainer)
