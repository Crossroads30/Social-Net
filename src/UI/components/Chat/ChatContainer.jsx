import React from 'react'
import { connect } from 'react-redux'
import Chat from './Chat'
import { getFriends } from '../../../BLL/reducers/friends-reducer'

class ChatContainer extends React.Component {
	componentDidMount() {
		this.props.getFriends(this.props.totalFriendsCount)
	}

	render() {
		return <Chat followedFriends={this.props.followedFriends} />
	}
}

const mapStateToProps = state => {
	return {
		followedFriends: state.friendsSidebar.followedFriends,
		totalFriendsCount: state.friendsSidebar.totalFriendsCount,
	}
}

export default connect(mapStateToProps, { getFriends })(ChatContainer)
