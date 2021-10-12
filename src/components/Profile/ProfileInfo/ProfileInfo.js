import React from 'react';
import style from "../Profile.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={style.profile__banner}>
                <img className={style.profile__banner_img} src="./../images/banner.png" alt="banner"/>
            </div>

            <div className={style.profile__inner}>
                <img className={style.profile__avatar} src="./../images/logo.png" alt="logo"/>
                <ul className={style.profile__items}>
                    <li className={style.profile__item}>
                        Город: <span>Киев</span>
                    </li>
                    <li className={style.profile__item}>
                        Образование:<span>среднее-специональное</span>
                    </li>
                    <li className={style.profile__item}>
                        Моя цель: <span>стать профисиональним програмистом</span>
                    </li>
                    <li className={style.profile__item}>
                        Мой девиз: <span>"Делай сегодня то что другие не хотят,завтра будешь иметь о чем другие только
                                мечтают"</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileInfo;