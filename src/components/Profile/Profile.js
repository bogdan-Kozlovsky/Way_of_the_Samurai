import React from 'react';

const Profile = () => {
    return (
        <>
            <div className="profile">
                <div className="profile__banner">
                    <img className="profile__banner_img" src="./../images/banner.png" alt="banner"/>
                </div>

                <div className="profile__inner">
                    <img className="profile__avatar" src="./../images/logo.png" alt="logo"/>
                    <ul className="profile__items">
                        <li className="profile__item">
                            Город: <span>Киев</span>
                        </li>
                        <li className="profile__item">
                            Образование:<span>среднее-специональное</span>
                        </li>
                        <li className="profile__item">
                            Моя цель: <span>стать профисиональним програмистом</span>
                        </li>
                        <li className="profile__item">
                            Мой девиз: <span>"Делай сегодня то что другие не хотят,завтра будешь иметь о чем другие только
                                мечтают"</span>
                        </li>
                    </ul>
                </div>
                <div className="profile__post">
                    <h1 className="profile__post_title">
                        Мои пости
                    </h1>
                    <textarea className="profile__post__textarea"></textarea>

                    <ul className="profile__post_items">
                        <li className="profile__post_item">Post 1</li>
                        <li className="profile__post_item">Post 2</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Profile;