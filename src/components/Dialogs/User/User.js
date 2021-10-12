import React from 'react';
import style from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div>
            <li className={style.dialogs__user_name}>
                <img src="./../images/logo.png" alt=""/>
                <NavLink className={style.dialogs__user_link} activeClassName={style.active} to={`/dialogs/` + props.id}>
                    {props.name}
                </NavLink>
            </li>
        </div>
    );
};

export default User;