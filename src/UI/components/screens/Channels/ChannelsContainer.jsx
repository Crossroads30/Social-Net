import React from 'react'
import { connect } from 'react-redux'
import Channels from './Channels'

class ChannelsContainer extends React.Component {
	componentDidMount() {}

	render() {
		return <Channels />
	}
}

const mapStateToProps = state => {
	return {}
}

export default connect(mapStateToProps, {})(ChannelsContainer)
