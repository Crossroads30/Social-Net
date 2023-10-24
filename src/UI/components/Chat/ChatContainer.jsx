import React from 'react'
import { connect } from 'react-redux'
import Chat from './Chat'

class ChatContainer extends React.Component {
	componentDidMount() {}

	render() {
		return <Chat />
	}
}

const mapStateToProps = state => {
	return {}
}

export default connect(mapStateToProps, {})(ChatContainer)
