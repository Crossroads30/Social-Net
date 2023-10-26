// import React from 'react'
// import { connect } from 'react-redux'
// import { getUserProfile } from '../../../../BLL/reducers/profile-reducer' 
// import { compose } from 'redux'
// import { withRouter } from '../../../../HOOKS/withRouter' 
// import OnlineIndicator from './OnlineIndicator'

// class OnlineIndicatorContainer extends React.Component {
// 	componentDidMount() {
// 		// let profileId = this.props.match.params.userId
// 		// if (!profileId) {
// 		// 	profileId = 30064
// 		// }
// 		// this.props.getUserProfile(profileId)
// 		// console.log(profileId)
// 	}

// 	render() {
// 		return <OnlineIndicator userProfile={this.props.userProfile} />
// 	}
// }

// const mapStateToProps = state => {
// 	return {
// 		userProfile: state.profilePage.userProfile,
// 	}
// }

// export default compose(
// 	connect(mapStateToProps, { getUserProfile }),
// 	withRouter
// )(OnlineIndicatorContainer)
