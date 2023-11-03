import React from 'react'
import { connect } from 'react-redux'
import MyProfile from './MyProfile'
import { compose } from 'redux'
import { withRouter } from '../../../../HOOKS/withRouter'

class MyProfileContainer extends React.Component {
	componentDidMount() {}

	render() {
		return <MyProfile isOwner={!this.props.match.params.userId} />
	}
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
	}
}

export default compose(connect(mapStateToProps, {}),withRouter)(MyProfileContainer)