
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
                {message: 'Hello Bogdan'},
                {message: 'Hello Vasia'},
                {message: 'Hello Vlad'},
                {message: 'Hello Maxs'},
            ],
        }

    },

    getState() {
        return this._state
    },

    addPost() {
        const newPost = {
            id: 4,
            description: this._state.profilePage.newPostText,
            likes: 0
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    }
}

window.store = store

export default store;