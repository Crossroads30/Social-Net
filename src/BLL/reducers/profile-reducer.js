import { stopSubmit } from 'redux-form'
import { profileApi } from '../../DAL/api'

const ADD_POST = 'profile/ADD_POST'
const DELETE_POST = 'profile/DELETE_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_USER_STATUS = 'profile/SET_USER_STATUS'

let initialState = {
	posts: [
		{ id: 1, message: 'Hello everybody!', likes: 2 },
		{
			id: 2,
			message: "I'm trying really hard and I hope it's worth it!!!",
			likes: 12,
		},
		{ id: 3, message: 'Finally i will manage it!', likes: 12 },
	],
	userProfile: null,
	userStatus: '',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: state.posts.length + 1,
				message: action.newPostMessage,
				likes: 0,
			}
			return {
				...state,
				posts: [...state.posts, newPost],
			}
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(post => post.id !== action.postId),
			}
		case SET_USER_PROFILE:
			return {
				...state,
				userProfile: action.userProfile,
			}
		case SET_USER_STATUS:
			return {
				...state,
				userStatus: action.userStatus,
			}
		default:
			return state
	}
}

//actionCreators:
export const addPost = newPostMessage => ({
	type: ADD_POST,
	newPostMessage,
})
export const deletePost = postId => ({
	type: DELETE_POST,
	postId,
})
export const setUserProfile = userProfile => ({
	type: SET_USER_PROFILE,
	userProfile,
})
export const setUserStatus = userStatus => ({
	type: SET_USER_STATUS,
	userStatus,
})

//ThunkCreators:
export const getUserProfile = profileId => async dispatch => {
	try {
		const response = await profileApi.getProfile(profileId)
		dispatch(setUserProfile(response.data))
	} catch (error) {
		console.log(error)
	}
}

export const getUserStatus = profileId => async dispatch => {
	try {
		const response = await profileApi.getStatus(profileId)
		dispatch(setUserStatus(response.data))
	} catch (error) {
		console.log(error)
	}
}

export const getUpdateUserStatus = userStatus => async dispatch => {
	try {
		const response = await profileApi.updateStatus(userStatus)
		response.data.resultCode === 0 && dispatch(getUserProfile(userStatus))
	} catch (error) {
		console.log(error)
	}
}

export const getUpdateUserProfile = userProfile => async (dispatch, getState) => {
		const userId = 30064
		const response = await profileApi.updateProfile(userProfile)
		if (response.data.resultCode === 0) {
			dispatch(getUserProfile(userId))
		}
		// } else {
		// 	dispatch(
		// 		stopSubmit('edit-social', { _error: response.data.messages })
		// 	)
		// 	return Promise.reject(response.data.messages)
		// }
	}

export default profileReducer
