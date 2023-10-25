import React from 'react'
import { connect } from 'react-redux'
import SocialList from './SocialList'

class SocialListContainer extends React.Component {
	componentDidMount() {}

	render() {
		return <SocialList />
	}
}

const mapStateToProps = state => {
	return {}
}

export default connect(mapStateToProps, {})(SocialListContainer)
