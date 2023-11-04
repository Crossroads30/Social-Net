import React from 'react'
import { connect } from 'react-redux'
import Friends from './Friends'
import { 
	getAllUsers, 
	setCurrentPage, 
	getFollowUser, 
	getUnfollowUser 
} from '../../../../BLL/reducers/users-reducer'

class FriendsContainer extends React.Component {
	componentDidMount() {
		const { currentPage, pageSize } = this.props
		this.props.getAllUsers(currentPage, pageSize)
	}

	onPageChangeHandler = (pageNumber) => {
		const { pageSize } = this.props
		this.props.getAllUsers(pageNumber, pageSize)
	}

	render() {
		return (
			<Friends
				getAllUsers={this.props.getAllUsers}
				allUsers={this.props.allUsers}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				totalUsersCount={this.props.totalUsersCount}
				onPageChangeHandler={this.onPageChangeHandler}
				getFollowUser={this.props.getFollowUser}
				getUnfollowUser={this.props.getUnfollowUser}
				followingInProgress={this.props.followingInProgress}
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
		followingInProgress: state.friendsPage.followingInProgress,
	}
}

export default connect(mapStateToProps, { 
	getAllUsers, 
	setCurrentPage, 
	getFollowUser, 
	getUnfollowUser 
})(FriendsContainer)
