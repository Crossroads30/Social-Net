import React from 'react'
import { connect } from 'react-redux'
import FriendsSidebar from './FriendsSidebar'
// import { getFriends } from '../../../BLL/reducers/friends-reducer'

class FriendsSidebarContainer extends React.Component {
	componentDidMount() {
		// this.props.getFriends(this.props.totalFriendsCount)
	}

	render() {
		return <FriendsSidebar />
		// return <FriendsSidebar followedFriends={this.props.followedFriends} />
	}
}

const mapStateToProps = state => {
	return {
		// followedFriends: state.friendsSidebar.followedFriends,
		// totalFriendsCount: state.friendsSidebar.totalFriendsCount,
	}
}

export default connect(mapStateToProps, {})(FriendsSidebarContainer)
// export default connect(mapStateToProps, { getFriends })(FriendsSidebarContainer)
