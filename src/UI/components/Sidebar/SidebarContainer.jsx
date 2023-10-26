import React from 'react'
import { connect } from 'react-redux'
import Sidebar from './Sidebar' 

class SideBarContainer extends React.Component {
	componentDidMount() {}

	render() {
		return <Sidebar />
	}
}

const mapStateToProps = state => {
	return {}
}

export default connect(mapStateToProps, {})(SideBarContainer)
