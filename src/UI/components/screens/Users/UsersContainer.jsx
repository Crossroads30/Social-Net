import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'

class UsersContainer extends React.Component {
	componentDidMount() {}

	render() {
		return <Users />
	}
}

const mapStateToProps = state => {
	return {}
}

export default connect(mapStateToProps, {})(UsersContainer)
