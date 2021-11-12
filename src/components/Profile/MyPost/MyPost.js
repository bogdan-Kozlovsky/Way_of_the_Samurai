import React from 'react'
import Post from './Post/Post'
import style from './MyPost.module.css'


const MyPost = (props) => {


    // краткая запись
    let postElement = props.posts.map(post => <Post message={post.description} likes={post.likes}/>)


    const newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPADATE-NEW-POST-TEXT', newText: text})
    }


    return (
        <>
            <div className={style.profile__post}>
                <h1 className={style.profile__post_title}>
                    Мои пости
                </h1>
                <textarea onChange={onPostChange}
                          value={props.newPostText}
                          ref={newPostElement}
                          className={style.profile__post__textarea}></textarea>
                <div className={style.profile__post_box}>

                    <button onClick={addPost} className={style.profile__post_btn}>submit
                    </button>
                    <button className={style.profile__post_btn}>reset</button>
                </div>


                {postElement}


            </div>
        </>
    );
};

export default MyPost;