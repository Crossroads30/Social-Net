import React from 'react'
import { connect } from 'react-redux'
import ProfileInfo from './ProfileInfo'

class ProfileInfoContainer extends React.Component {
	componentDidMount() {}

	render() {
		return <ProfileInfo />
	}
}

const mapStateToProps = state => {
	return {}
}

export default connect(mapStateToProps, {})(ProfileInfoContainer)
