import React from 'react'
import { connect } from 'react-redux'
import AddPost from './AddPost'

class AddPostContainer extends React.Component {
	componentDidMount() {}

	render() {
		return <AddPost />
	}
}

const mapStateToProps = state => {
	return {}
}

export default connect(mapStateToProps, {})(AddPostContainer)
