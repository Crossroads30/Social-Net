
const ADD_POST = 'profile/ADD_POST'
const DELETE_POST = 'profile/DELETE_POST'

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

export default profileReducer


