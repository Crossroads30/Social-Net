import React from 'react'
import { connect } from 'react-redux'
import OnlineIndicator from './OnlineIndicator'

class OnlineIndicatorContainer extends React.Component {
	componentDidMount() {}

	render() {
		return <OnlineIndicator userName={this.props.userName} />
	}
}

const mapStateToProps = state => {
	if (state.profilePage.userProfile !== null) {
		return {
			userName: state.profilePage.userProfile.fullName,
		}
	} return {
		userName: 'User Name'
	}
}

export default connect(mapStateToProps, {})(OnlineIndicatorContainer)
