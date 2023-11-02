import { stopSubmit } from 'redux-form'
import { authApi } from '../../DAL/api'

const SET_USER_AUTH_DATA = 'auth/SET_USER_AUTH_DATA'
const SET_CAPTCHA_URL_SUCCESS = 'auth/SET_CAPTCHA_URL_SUCCESS'

let initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false,
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_AUTH_DATA:
		case SET_CAPTCHA_URL_SUCCESS:
			return {
				...state,
				...action.data,
			}
		default:
			return state
	}
}


//actionCreators:
export const setUserAuthData = (id, login, email, isAuth) => ({
	type: SET_USER_AUTH_DATA,
	data: { id, login, email, isAuth },
})

export const setCaptchaUrlSuccess = captchaUrl => ({
	type: SET_USER_AUTH_DATA,
	data:{ captchaUrl },
})


//ThunkCreators:
export const getAuthUserData = () => async dispatch => {
	try {
		const response = await authApi.getAuth()
		const { id, login, email } = response.data.data
		response.data.resultCode === 0 && dispatch(setUserAuthData(id, login, email, true))
	} catch (error) {
		console.log(error)
	}
}

export const getLoginToSystem = (email, password, rememberMe, captcha) => async dispatch => {
	try {
		const response = await authApi.loginToServer(email, password, rememberMe, captcha)
		if(response.data.resultCode === 0) {
			dispatch(getAuthUserData())
		} else {
			if (response.data.resultCode === 10) {
				dispatch(getCaptchaUrl())
			}
		}
	} catch (error) {
		console.log(error)
	}
}

export const getLogoutFromSystem = () => async dispatch => {
	try {
		const response = await authApi.logOutFromServer()
		response.data.resultCode === 0 && dispatch(setUserAuthData(null, null, null, false))
	} catch (error) {
		console.log(error)
	}
}

export const getCaptchaUrl = url => async dispatch => {
	try {
		const response = await securityApi.getCaptchaUrl()
		const captchaUrl = response.data.url
		response.data.resultCode === 0 && dispatch(setCaptchaUrlSuccess(captchaUrl))
	} catch (error) {
		console.log(error)
	}
}

export default authReducer
