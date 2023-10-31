import { getAuthUserData } from './auth-reducer'

const INITIALIZED_SUCCESS = 'auth/INITIALIZED_SUCCESS'

let initialState = {
initialized: false,
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true,
			}
		default:
			return state
	}
}

//actionCreators:
export const initializedSuccess = () => ({
	type: INITIALIZED_SUCCESS,
})

//ThunkCreators:
export const initializeApp = () => async dispatch => {
	 await dispatch(getAuthUserData())
	dispatch(initializedSuccess())
}

export default authReducer
