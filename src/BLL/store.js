import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { compose } from 'redux'

const reducers = combineReducers({
	// profilePage: profileReducer,
	// messagesPage: messageReducer,
	// sidebar: sidebarReducer,
	// usersPage: usersReducer,
	// auth: authReducer,
	// app: appReducer,
	form: formReducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware))) //

window.__store__ = store // обращение к глобальному store

export default store
