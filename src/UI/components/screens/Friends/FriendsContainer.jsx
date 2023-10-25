import React from 'react'
import { connect } from 'react-redux'
import Friends from './Friends'

class FriendsContainer extends React.Component {
	componentDidMount() {}

	render() {
		return <Friends />
	}
}

const mapStateToProps = state => {
	return {}
}

export default connect(mapStateToProps, {})(FriendsContainer)
