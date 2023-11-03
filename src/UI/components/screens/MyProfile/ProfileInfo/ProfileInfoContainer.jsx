import React from 'react'
import { connect } from 'react-redux'
import ProfileInfo from './ProfileInfo'
import {
	getUserProfile,
	getUserStatus,
	getUpdateUserStatus,
	getUpdateUserProfile,
	getUserPhotoUpdate,
} from '../../../../../BLL/reducers/profile-reducer'
import { compose } from 'redux'
import { withRouter } from '../../../../../HOOKS/withRouter'
import { withAuthRedirect } from '../../../../../HOC/withAuthRedirect'
import { getLogoutFromSystem } from '../../../../../BLL/reducers/auth-reducer'

class ProfileInfoContainer extends React.Component {
	refreshProfile() {
		let profileId = this.props.match.params.userId
		if (!profileId) {
			// profileId = 30064
			profileId = this.props.mainUserId
		}
		this.props.getUserProfile(profileId)
		this.props.getUserStatus(profileId)
	}

	componentDidMount() {
		this.refreshProfile()
	}

	render() {
		return (
			<ProfileInfo
				{...this.props}
				isOwner={!this.props.match.params.userId}
				userProfile={this.props.userProfile}
				userStatus={this.props.userStatus}
				updateStatus={this.props.getUpdateUserStatus}
				getUpdateUserProfile={this.props.getUpdateUserProfile}
				getUserPhotoUpdate={this.props.getUserPhotoUpdate}
				logout={this.props.getLogoutFromSystem}
			/>
		)
	}
}

const mapStateToProps = state => {
	return {
		userProfile: state.profilePage.userProfile,
		userStatus: state.profilePage.userStatus,
		mainUserId: state.auth.id,
		isAuth: state.auth.isAuth,
	}
}

export default compose(
	connect(mapStateToProps, {
		getUserProfile,
		getUserStatus,
		getUpdateUserStatus,
		getUpdateUserProfile,
		getUserPhotoUpdate,
		getLogoutFromSystem,
	}),
	withRouter,
	withAuthRedirect
)(ProfileInfoContainer)
