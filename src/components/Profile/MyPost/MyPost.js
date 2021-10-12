import React from 'react'
import Post from './Post/Post'
import style from './MyPost.module.css'

const MyPost = () => {

    // данные из сервера
    const postDate = [
        {message:'Bogdan',likes:1},
        {message:'Vasia',likes:2},
        {message:'Vlad',likes:3},
    ]
    return (
        <>
            <div className={style.profile__post}>
                <h1 className={style.profile__post_title}>
                    Мои пости
                </h1>
                <textarea className={style.profile__post__textarea}></textarea>
                <div className={style.profile__post_box}>
                    <button className={style.profile__post_btn}>submit</button>
                    <button className={style.profile__post_btn}>reset</button>
                </div>
                <Post message={postDate[0].message} likes={postDate[0].likes}/>
                <Post message={postDate[1].message} likes={postDate[1].likes}/>
                <Post message={postDate[2].message} likes={postDate[2].likes}/>
            </div>
        </>
    );
};

export default MyPost;