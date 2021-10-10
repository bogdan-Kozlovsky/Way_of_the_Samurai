import React from 'react';
import style from './Profile.module.css'

const Profile = () => {
    return (
        <>
            <div className={style.profile}>
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
                <div className={style.profile__post}>
                    <h1 className={style.profile__post_title}>
                        Мои пости
                    </h1>
                    <textarea className={style.profile__post__textarea}></textarea>

                    <ul className={style.profile__post_items}>
                        <li className={style.profile__post_item}>Post 1</li>
                        <li className={style.profile__post_item}>Post 2</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Profile;