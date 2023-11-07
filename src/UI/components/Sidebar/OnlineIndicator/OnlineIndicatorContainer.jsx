import React from 'react'
import { connect } from 'react-redux'
import OnlineIndicator from './OnlineIndicator'

class OnlineIndicatorContainer extends React.Component {
	componentDidMount() {}

	render() {
		return <OnlineIndicator loginName={this.props.loginName} />
	}
}

const mapStateToProps = state => {
	if (state.profilePage.userProfile !== null) {
		return {
			loginName: state.auth.login,
		}
	} return {
		loginName: null,
	}
}

export default connect(mapStateToProps, {})(OnlineIndicatorContainer)
