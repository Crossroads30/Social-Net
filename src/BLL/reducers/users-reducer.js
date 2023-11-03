import { usersApi } from '../../DAL/api'

const SET_USERS = 'users-reducer/SET_USERS'

let initialState = {
	users: [],
	currentPage: 1,
	pageSize: 5,
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS:
			return {
				...state,
				users: action.users,
			}
		default:
			return state
	}
}

//actionCreators:
export const setUsers = users => ({
	type: SET_USERS,
	users,
})

//ThunkCreators:
export const getAllUsers = (currentPage, PageSize) => async dispatch => {
	try {
		const response = await usersApi.getUsers(currentPage, PageSize)
		dispatch(setUsers(response))
		console.log(response)
	} catch (error) {
		console.log(error)
	}
}
export default userReducer
