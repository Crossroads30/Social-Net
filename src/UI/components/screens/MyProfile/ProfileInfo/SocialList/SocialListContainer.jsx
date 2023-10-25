import React from 'react'
import { connect } from 'react-redux'
import SocialList from './SocialList'

class SocialListContainer extends React.Component {
	componentDidMount() {}

	render() {
		return <SocialList />
	}
}

const setStateToProps = state => {
	return {}
}

export default connect(setStateToProps, {})(SocialListContainer)
