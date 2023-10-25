import React from 'react'
import { connect } from 'react-redux'
import MyProfile from './MyProfile'

class MyProfileContainer extends React.Component {
	componentDidMount() {}

	render() {
		return <MyProfile />
	}
}

const setStateToProps = state => {
	return {}
}

export default connect(setStateToProps, {})(MyProfileContainer)
