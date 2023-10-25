
const ADD_POST = 'profile/ADD_POST'

  let initialState = {
    posts: [
      {id:1, message:'Hello everybody!', likes: 2},
			{id:2, message:"I'm trying really hard and I hope it's worth it!!!", likes: 12},
      {id:3, message:"Finally i will manage it!", likes: 12},
    ]
  }

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
		case ADD_POST:
			const newPost = {
				id: 1,
			}
			return {
				...state,
				posts: [...state.posts, newPostMessageBody],
			}
		default:
			return state
	}
}

//actionCreators:
export const addPost = newPostMessageBody => ({
	type: ADD_POST,
	newPostMessageBody,
})

export default profileReducer


