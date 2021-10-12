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

    const messageDate = [
        {message: 'Hello Bogdan'},
        {message: 'Hello Vasia'},
        {message: 'Hello Vlad'},
        {message: 'Hello Maxs'},
    ]


    return (
        <div className={style.dialogs}>
            <h1 className={style.dialogs__title}>Dialogs</h1>
            <div className={style.dialogs__inner}>
                <ul className={style.dialogs__items}>
                    <User name={userDate[0].name} id={userDate[0].id}/>
                    <User name={userDate[1].name} id={userDate[1].id}/>
                    <User name={userDate[2].name} id={userDate[2].id}/>
                    <User name={userDate[3].name} id={userDate[3].id}/>
                </ul>
                <ul className={style.dialogs__items_message}>
                    <Message message={messageDate[0].message}/>
                    <Message message={messageDate[1].message}/>
                    <Message message={messageDate[2].message}/>
                    <Message message={messageDate[3].message}/>
                </ul>
            </div>
        </div>
    );
};

export default Dialogs;