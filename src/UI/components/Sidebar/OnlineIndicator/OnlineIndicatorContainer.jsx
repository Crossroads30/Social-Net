import React from 'react'
import { connect } from 'react-redux' 
import OnlineIndicator from './OnlineIndicator'

class OnlineIndicatorContainer extends React.Component {
	componentDidMount() {
	}

	render() {
		return <OnlineIndicator userName={this.props.userName} />
	}
}

const mapStateToProps = state => {
	return {
		userName: state.profilePage.userProfile.fullName,
	}
}

export default
	connect(mapStateToProps, {})(OnlineIndicatorContainer)
