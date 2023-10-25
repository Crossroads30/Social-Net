import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/reset.css'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppContainer from './AppContainer.jsx'
import store from './BLL/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
		<HashRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</HashRouter>
)
