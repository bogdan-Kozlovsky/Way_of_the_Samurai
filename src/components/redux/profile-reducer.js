//MyPost
const ADD_POST = 'ADD_POST'
const UPADATE_NEW_POST_TEXT = 'UPADATE_NEW_POST_TEXT'
//MyPost

const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        const newPost = {
            id: 4,
            description: state.newPostText,
            likes: 0
        }
        state.posts.push(newPost)
        state.newPostText = ''

    } else if (action.type === UPADATE_NEW_POST_TEXT) {
        state.newPostText = action.newText
    }
    return state
}

//MyPost
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPADATE_NEW_POST_TEXT, newText: text})
//MyPost

export default profileReducer