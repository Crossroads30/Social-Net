import { usersApi } from '../../DAL/api'

const SET_FOLLOWED_FRIENDS = 'friends-reducer/SET_FOLLOWED_FRIENDS'

let initialState = {
	followedFriends: [],
	totalUsersCount: 50,
}

const friendsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FOLLOWED_FRIENDS:
			return {
				...state,
				followedFriends: action.followedFriends,
			}
		default:
			return state
	}
}

//actionCreators:
export const setFriends = followedFriends => ({
	type: SET_FOLLOWED_FRIENDS,
	followedFriends,
})

//ThunkCreators:
export const getFriends = totalUsersCount => async dispatch => {
	try {
		const response = await usersApi.getFollowedFriends(totalUsersCount)
		dispatch(setFriends(response))
	} catch (error) {
		console.log(error)
	}
}

export default friendsReducer
