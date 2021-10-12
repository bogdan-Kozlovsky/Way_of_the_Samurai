import React from 'react';
import style from './Dialogs.module.css'
import User from "./User/User";
import Message from "./Message/Message";

const Dialogs = () => {
    //данные из сервера
    const userDate = [
        {name: 'Bogdan', id: 1},
        {name: 'Vasia', id: 2},
        {name: 'Vlad', id: 3},
        {name: 'Maxs', id: 4}
    ]

    let userElement = userDate.map((user) => {
        return (
            <User name={user.name} id={user.id}/>
        )
    })

    const messageDate = [
        {message: 'Hello Bogdan'},
        {message: 'Hello Vasia'},
        {message: 'Hello Vlad'},
        {message: 'Hello Maxs'},
    ]

    // краткая запись
    let messageElement = messageDate.map(message => <Message message={message.message}/>)


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