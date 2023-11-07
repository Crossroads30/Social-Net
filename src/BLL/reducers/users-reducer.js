import { usersApi } from '../../DAL/api'

const SET_USERS = 'users-reducer/SET_USERS'
const SET_TOTAL_USERS_COUNT = 'users-reducer/SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'users-reducer/SET_CURRENT_PAGE'
const TOGGLE_IS_LOADING = 'users-reducer/TOGGLE_IS_LOADING'
const FOLLOW = 'users-reducer/FOLLOW'
const UNFOLLOW = 'users-reducer/UNFOLLOW'
const DISABLE_BUTTON_WHILE_FOLLOWING_IN_PROGRESS = 'users/DISABLE-FETCHING-BUTTON'

let initialState = {
	users: [],
	currentPage: 1,
	pageSize: 18,
	totalUsersCount: 350,
	isLoading: true,
	followingInProgress: [],
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
		case FOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: true }
					}
					return user
				}),
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: false }
					}
					return user
				}),
			}
		case DISABLE_BUTTON_WHILE_FOLLOWING_IN_PROGRESS:
			return {
				...state,
				followingInProgress: action.isLoading
					? [...state.followingInProgress, action.userId]
					: [state.followingInProgress.filter(id => id != action.userId)],
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

export const followUser = userId => ({
	type: FOLLOW,
	userId,
})

export const unfollowUser = userId => ({
	type: UNFOLLOW,
	userId,
})

export const setDisableFetchingButton = (isLoading, userId) => ({
	type: DISABLE_BUTTON_WHILE_FOLLOWING_IN_PROGRESS,
	isLoading,
	userId,
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

//general function for follow/unfollow
const followUnfollowFlow = async (
	dispatch,
	userId,
	apiMethod,
	actionCreator
) => {
	dispatch(setDisableFetchingButton(true, userId))
	let data = await apiMethod(userId)

	data.resultCode === 0 && dispatch(actionCreator(userId))
	dispatch(setDisableFetchingButton(false, userId))
}

export const getFollowUser = userId => async dispatch => {
	followUnfollowFlow(
		dispatch,
		userId,
		usersApi.getFollow.bind(userId),
		followUser
	)
}

export const getUnfollowUser = userId => async dispatch => {
	followUnfollowFlow(
		dispatch,
		userId,
		usersApi.getUnfollow.bind(userId),
		unfollowUser
	)
}

// without function followUnfollowFlow
// export const getFollowUser = userId => async dispatch => {
// 	try {
// 		dispatch(setDisableFetchingButton(true, userId))
// 		const data = await usersApi.getFollow(userId)
// 		data.resultCose === 0 && dispatch(followUser(userId))
// 		dispatch(setDisableFetchingButton(false, userId))
// 		dispatch(followUser(userId))
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

// export const getUnfollowUser = userId => async dispatch => {
// 	try {
// 		dispatch(setDisableFetchingButton(true, userId))
// 		const data = await usersApi.getUnfollow(userId)
// 		data.resultCose === 0 && dispatch(followUser(userId))
// 		dispatch(setDisableFetchingButton(false, userId))
// 		dispatch(unfollowUser(userId))
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

export default userReducer
