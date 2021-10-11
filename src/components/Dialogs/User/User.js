import React from 'react';
import style from './../Dialogs.module.css'

const User = (props) => {
    return (
        <div>
            <li className={style.dialogs__user_name}>
                <img src="./../images/logo.png" alt=""/>
                <span>{props.name}</span>
                <span>{props.age}</span>
            </li>
        </div>
    );
};

export default User;