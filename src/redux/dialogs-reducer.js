// Dialogs
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'
// Dialogs

// данные по умолчанию
// начальний state
const initialState = {
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
// начальний state
// данные по умолчанию

const dialogsReducer = (state = initialState, action) => {
    // if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //     state.newMessageBody = action.body
    // } else if (action.type === SEND_MESSAGE) {
    //     let body = state.newMessageBody
    //     state.newMessageBody = ''
    //     state.messages.push({message: body, id: 5})
    // }
    // return state

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {message: body, id: 5}]
            }
    }
}

//Dialogs
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
//Dialogs

export default dialogsReducer