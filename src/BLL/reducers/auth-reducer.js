import { stopSubmit } from 'redux-form'
import { profileApi } from '../../DAL/api'

const SET_USER_AUTH_DATA = 'auth/SET_USER_AUTH_DATA'

let initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false,
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_AUTH_DATA:
			return {
				...state,
				data: action.data,
			}
		default:
			return state
	}
}

//actionCreators:
export const setUserAuthData = data => ({
	type: SET_USER_AUTH_DATA,
	data: { id, login, email, isAuth },
})

//ThunkCreators:
export const getIsAuth = () => async dispatch => {
	try {
		const response = await authApi.getAuth()
		const { id, login, email } = response.data.data
		response.data.resultCode === 0 && dispatch(setUserAuthData(id, login, email, true))
	} catch (error) {
		console.log(error)
	}
}

export default authReducer
