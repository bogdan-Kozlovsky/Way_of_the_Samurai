import React from 'react';
import User from "./User/User";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
// import {
//     addPostActionCreator,
//     sendMessageCreator,
//     updateNewMessageBodyCreator,
//     updateNewPostTextActionCreator
// } from "../redux/state";

const DialogsContainer = (props) => {

    // //данные из сервера
    // let userElement = props.state.users.map(user => {
    //     return (
    //         <User name={user.name} id={user.id} key={user.id}/>
    //     )
    // })
    //
    //
    // // краткая запись
    // let messageElement = props.state.messages.map(message => <Message
    //     message={message.message}
    //     key={message.message}/>)
    // let newMessageBody = state.newMessageBody;


    //form
    const state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }


    return (
        <Dialogs
            updateNewMessageBodyCreator={onNewMessageChange}
            sendMessageCreator={onSendMessageClick}
            dialogsPage={state}
        />
    );
};

export default DialogsContainer;