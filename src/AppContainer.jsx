import React from 'react'
import { connect } from 'react-redux'
import App from './App'
import { initializeApp } from './BLL/reducers/app-reducer'

class AppContainer extends React.Component {
	componentDidMount() {
		this.props.initializeApp()
	}

	render() {
		return <App initialized={this.props.initialized} />
	}
}

const mapStateToProps = state => {
	return {
		initialized: state.app.initialized
	}
}

export default connect(mapStateToProps, { initializeApp })(AppContainer)