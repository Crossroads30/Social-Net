import React from 'react'
import { connect } from 'react-redux'
import ProfileInfo from './ProfileInfo'
import {
	getUserProfile,
	getUserStatus,
	getUpdateUserStatus,
	getUpdateUserProfile,
} from '../../../../../BLL/reducers/profile-reducer'
import { compose } from 'redux'
import { withRouter } from '../../../../../HOOKS/withRouter'

class ProfileInfoContainer extends React.Component {
	componentDidMount() {
		let profileId = this.props.match.params.userId
		if (!profileId) {
			profileId = 30064
		}
		this.props.getUserProfile(profileId)
		this.props.getUserStatus(profileId)
	}

	render() {
		return (
			<ProfileInfo
				userProfile={this.props.userProfile}
				userStatus={this.props.userStatus}
				updateStatus={this.props.getUpdateUserStatus}
				userLocation={this.props.userLocation}
				workAt={this.props.workAt}
				getUpdateUserProfile={this.props.getUpdateUserProfile}
			/>
		)
	}
}

const mapStateToProps = state => {
	return {
		userProfile: state.profilePage.userProfile,
		userStatus: state.profilePage.userStatus,
		userLocation: state.profilePage.userLocation,
		workAt: state.profilePage.workAt,
	}
}

export default compose(
	connect(mapStateToProps, {
		getUserProfile,
		getUserStatus,
		getUpdateUserStatus,
		getUpdateUserProfile,
	}),
	withRouter
)(ProfileInfoContainer)
