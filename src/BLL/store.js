import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { compose } from 'redux'
import profileReducer from './reducers/profile-reducer'
import authReducer from './reducers/auth-reducer'
import appReducer from './reducers/app-reducer'
import userReducer from './reducers/users-reducer'
import friendsReducer from './reducers/friends-reducer'

const reducers = combineReducers({
	profilePage: profileReducer,
	auth: authReducer,
	app: appReducer,
	friendsPage: userReducer,
	// friendsSidebar: friendsReducer,
	form: formReducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware))) //

window.__store__ = store // обращение к глобальному store

export default store
