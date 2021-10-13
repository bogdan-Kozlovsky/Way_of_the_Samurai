import React from 'react';
import style from './Dialogs.module.css'
import User from "./User/User";
import Message from "./Message/Message";

const Dialogs = (props) => {


    //данные из сервера
    let userElement = props.state.users.map((user) => {
        return (
            <User name={user.name} id={user.id}/>
        )
    })


    // краткая запись
    let messageElement = props.state.messages.map(message => <Message message={message.message}/>)


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
        </div>
    );
};

export default Dialogs;