import React from 'react'
import { connect } from 'react-redux'
import Messages from './Messages'

class MessagesContainer extends React.Component {
	componentDidMount() {}

	render() {
		return <Messages />
	}
}

const mapStateToProps = state => {
	return {}
}

export default connect(mapStateToProps, {})(MessagesContainer)
