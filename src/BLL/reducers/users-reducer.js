import { usersApi } from '../../DAL/api'

const SET_USERS = 'users-reducer/SET_USERS'
const SET_TOTAL_USERS_COUNT = 'users-reducer/SET_TOTAL_USERS_COUNT'

let initialState = {
	users: [],
	currentPage: 1,
	pageSize: 5,
	totalUsersCount: 1000,
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS:
			return {
				...state,
				users: action.users,
			}
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.count,
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

export const setTotalUsersCount = count => ({
	type: SET_TOTAL_USERS_COUNT,
	count,
})

//ThunkCreators:
export const getAllUsers = (currentPage, PageSize) => async dispatch => {
	try {
		const response = await usersApi.getUsers(currentPage, PageSize)
		dispatch(setUsers(response.items))
		// dispatch(setTotalUsersCount(response.totalCount))
		console.log(response)
	} catch (error) {
		console.log(error)
	}
}
export default userReducer
