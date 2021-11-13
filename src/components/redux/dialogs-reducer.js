// Dialogs
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'
// Dialogs

const dialogsReducer = (state, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody
        state.newMessageBody('')
        state.messages.push({message: body, id: 5})
    }
    return state
}

//Dialogs
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
//Dialogs

export default dialogsReducer