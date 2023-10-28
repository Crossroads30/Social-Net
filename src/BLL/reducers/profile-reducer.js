import { profileApi } from '../../DAL/api'

const ADD_POST = 'profile/ADD_POST'
const DELETE_POST = 'profile/DELETE_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_USER_STATUS = 'profile/SET_USER_STATUS'
const UPDATE_USER_PROFILE = 'profile/UPDATE_USER_PROFILE'

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
	UserLocation: 'Minsk, Belarus',
	workAt: 'Altoros',
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
		case UPDATE_USER_PROFILE:
			return {
				...state,
				updateUserProfile: action.updateUserProfile,
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
export const updateUserProfile = userProfile => ({
	type: UPDATE_USER_PROFILE,
	userProfile,
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
		response.data.resultCode === 0 &&
			dispatch(setUserStatus(userStatus))
	} catch (error) {
		console.log(error)
	}
}

export const getUpdateUserProfile = userProfile => async dispatch => {
	try {
		const response = await profileApi.updateProfile(userProfile)
		response.data.resultCode === 0 &&
			dispatch(setUserStatus(userProfile))
	} catch (error) {
		console.log(error)
	}
}

export default profileReducer
