import React from 'react'
import { connect } from 'react-redux'
import Friends from './Friends'
import { getAllUsers, setCurrentPage, getFollowUser, getUnfollowUser } from '../../../../BLL/reducers/users-reducer'
import { getFriends } from '../../../../BLL/reducers/friends-reducer'

class FriendsContainer extends React.Component {
	componentDidMount() {
		const { currentPage, pageSize } = this.props
		this.props.getAllUsers(currentPage, pageSize)
		this.props.getFriends(this.props.totalFriendsCount)
	}

	onPageChangeHandler = pageNumber => {
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
				setFriend={this.props.getFriends}
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
		totalFriendsCount: state.friendsSidebar.totalUsersCount,
		followingInProgress: state.friendsPage.followingInProgress,
	}
}

export default connect(mapStateToProps, {
	getAllUsers,
	setCurrentPage,
	getFollowUser,
	getUnfollowUser,
	getFriends,
})(FriendsContainer)
