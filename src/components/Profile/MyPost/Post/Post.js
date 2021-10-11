import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    return (
        <>
            <ul className={style.profile__post_items}>
                <li className={style.profile__post_item}>
                    <img className={style.profile__post_icons} src="./../images/logo.png" alt="icons"/>
                    <p className={style.profile__post_descr}>{props.message}</p>
                    <span>{props.likes}</span>
                </li>
            </ul>
        </>
    );
};

export default Post;