import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


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

    dispatch: function (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    },


    subscribe(observer) {
        this._callSubscriber = observer;
    }

}

window.store = store

export default store;


export class sendMessageCreator {
}