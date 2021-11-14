import React from 'react';
import style from './Dialogs.module.css'
import User from "./User/User";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogs-reducer";
// import {
//     addPostActionCreator,
//     sendMessageCreator,
//     updateNewMessageBodyCreator,
//     updateNewPostTextActionCreator
// } from "../redux/state";

const Dialogs = (props) => {
    // debugger

    //данные из сервера
    let userElement = props.dialogsPage.users.map(user => {
        return (
            <User name={user.name} id={user.id} key={user.id}/>
        )
    })


    // краткая запись
    let messageElement = props.dialogsPage.messages.map(message => <Message
        message={message.message}
        key={message.message}/>)


    //form
    const state = props.dialogsPage
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.sendMessageCreator()
    }


    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBodyCreator(body);
    }


    return (
        <div className={style.dialogs}>
            <h1 className={style.dialogs__title}>Dialogs</h1>
            <div className={style.dialogs__inner}>
                <ul className={style.dialogs__items}>

                    {userElement}

                </ul>
                <ul className={style.dialogs__items_message}>

                    {messageElement}

                </ul>
            </div>

            <form>
                <textarea
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                    className={style.dialogs__textarea}
                ></textarea>
                <button
                    onClick={onSendMessageClick}
                    type="button" className={style.dialogs__btn}
                >
                    Создать...
                </button>
            </form>
        </div>
    );
};

export default Dialogs;