import React from 'react';
import style from "../Dialogs.module.css";

const Message = (props) => {

    return (
        <div>
            <li className={style.dialogs__descr}>
                {props.message}
            </li>
        </div>
    );
};

export default Message;