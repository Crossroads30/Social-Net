import { usersApi } from '../../DAL/api'

const SET_FOLLOWED_FRIENDS = 'friends-reducer/SET_FOLLOWED_FRIENDS'

let initialState = {
	followedFriends: [],
	totalFriendsCount: 100,
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
export const getFriends = totalFriendsCount => async dispatch => {
	try {
		const response = await usersApi.getFollowedFriends(totalFriendsCount)
		dispatch(setFriends(response))
	} catch (error) {
		console.log(error)
	}
}

export default friendsReducer
