import React from 'react'
import { connect } from 'react-redux'
import Channels from './Channels'

class ChannelsContainer extends React.Component {
	componentDidMount() {}

	render() {
		return <Channels />
	}
}

const setStateToProps = state => {
	return {}
}

export default connect(setStateToProps, {})(ChannelsContainer)
