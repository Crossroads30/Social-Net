import React from 'react'
import { connect } from 'react-redux'
import Friends from './Friends'

class FriendsContainer extends React.Component {
	componentDidMount() {}

	render() {
		return <Friends />
	}
}

const setStateToProps = state => {
	return {}
}

export default connect(setStateToProps, {})(FriendsContainer)
