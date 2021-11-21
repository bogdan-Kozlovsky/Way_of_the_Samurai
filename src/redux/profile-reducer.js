//MyPost
const ADD_POST = 'ADD_POST'
const UPADATE_NEW_POST_TEXT = 'UPADATE_NEW_POST_TEXT'
//MyPost

// данные по умолчанию
// начальний state
const initialState = {
    // данные для постов
    posts: [
        {description: 'Bogdan', likes: 1, id: 1},
        {description: 'Vasia', likes: 2, id: 2},
        {description: 'Vlad', likes: 3, id: 3},
    ],
    newPostText: '',
}
// начальний state
// данные по умолчанию

const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 4,
                description: state.newPostText,
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }

        case UPADATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default :
            return state
    }
}


//MyPost
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPADATE_NEW_POST_TEXT, newText: text})
//MyPost

export default profileReducer