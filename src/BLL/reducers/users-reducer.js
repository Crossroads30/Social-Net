import { usersApi } from '../../DAL/api'

const SET_USERS = 'users-reducer/SET_USERS'
const SET_TOTAL_USERS_COUNT = 'users-reducer/SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'users-reducer/SET_CURRENT_PAGE'
const TOGGLE_IS_LOADING = 'users-reducer/TOGGLE_IS_LOADING'

let initialState = {
	users: [],
	currentPage: 1,
	pageSize: 15,
	totalUsersCount: 1000,
	isLoading: true,
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
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage,
			}
		case TOGGLE_IS_LOADING:
			return {
				...state,
				isLoading: action.isLoading,
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

export const setCurrentPage = currentPage => ({
	type: SET_CURRENT_PAGE,
	currentPage,
})
export const setIsLoading = isLoading => ({
	type: TOGGLE_IS_LOADING,
	isLoading,
})

//ThunkCreators:
export const getAllUsers = (currentPage, PageSize) => async dispatch => {
	try {
		const response = await usersApi.getUsers(currentPage, PageSize)
		dispatch(setUsers(response.items))
		dispatch(setCurrentPage(currentPage))
		// dispatch(setTotalUsersCount(response.totalCount))// too many users(about 25000)
	} catch (error) {
		console.log(error)
	}
}
export default userReducer
