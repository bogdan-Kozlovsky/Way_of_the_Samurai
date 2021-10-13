let state = {
    profilePage: {
        // данные для постов
        posts: [
            {message: 'Bogdan', likes: 1},
            {message: 'Vasia', likes: 2},
            {message: 'Vlad', likes: 3},
        ],
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
        ]
    }


}

export default state;