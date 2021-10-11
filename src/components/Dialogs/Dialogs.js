import React from 'react';
import style from './Dialogs.module.css'
import User from "./User/User";

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <h1 className={style.dialogs__title}>Dialogs</h1>
            <div className={style.dialogs__inner}>
                <ul className={style.dialogs__items}>
                   <User name={'Bogdan'} age={22}/>
                   <User name={'Vasia'} age={9}/>
                   <User name={'Vlad'} age={5}/>
                   <User name={'Maxs'} age={2}/>

                </ul>
                <ul className={style.dialogs__items_message}>
                    <li className={style.dialogs__descr}>
                        Message 1
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dialogs;