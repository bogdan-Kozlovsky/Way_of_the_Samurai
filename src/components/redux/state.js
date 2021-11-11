import {rerenderEntireTree} from "../../render";

let state = {
    profilePage: {
        // данные для постов
        posts: [
            {description: 'Bogdan', likes: 1, id: 1},
            {description: 'Vasia', likes: 2, id: 2},
            {description: 'Vlad', likes: 3, id: 3},
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

export const addPost = (post) => {
    const newPost = {
        id: 4,
        description: post,
        likes: 0
    }

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
}

export default state;