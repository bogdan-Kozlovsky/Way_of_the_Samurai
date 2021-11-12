//MyPost
const ADD_POST = 'ADD_POST'
const UPADATE_NEW_POST_TEXT = 'UPADATE_NEW_POST_TEXT'
//MyPost

// Dialogs
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'
// Dialogs


const store = {
    _state: {
        profilePage: {
            // данные для постов
            posts: [
                {description: 'Bogdan', likes: 1, id: 1},
                {description: 'Vasia', likes: 2, id: 2},
                {description: 'Vlad', likes: 3, id: 3},
            ],
            newPostText: '',

        },

        dialogsPage: {
            // данные для компонента Диалог данные для отрисовки юзера
            users: [
                {name: 'Bogdan', id: 1},
                {name: 'Vasia', id: 2},
                {name: 'Vlad', id: 3},
                {name: 'Maxs', id: 4}
            ],

// данные для компонента Диалог для отрисовки смс
            messages: [
                {message: 'Hello Bogdan', id: 1},
                {message: 'Hello Vasia', id: 2},
                {message: 'Hello Vlad', id: 3},
                {message: 'Hello Maxs', id: 4},
            ],
            newMessageBody: ''
        }

    },

    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 4,
                description: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)

        } else if (action.type === UPADATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.messages.push({message: body, id: 5})
            this._callSubscriber(this._state)
        }
    },


    subscribe(observer) {
        this._callSubscriber = observer;
    }

}

window.store = store

export default store;

//MyPost
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPADATE_NEW_POST_TEXT, newText: text})
//MyPost

//Dialogs
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
//Dialogs
