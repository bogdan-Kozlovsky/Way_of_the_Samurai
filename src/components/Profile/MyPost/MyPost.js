import React from 'react'
import Post from './Post/Post'
import style from './MyPost.module.css'

const MyPost = (props) => {
    // данные из сервера


    // краткая запись
    let postElement = props.posts.map(post => <Post message={post.description} likes={post.likes}/>)


    // let postElement = postDate.map((post)=>{
    //     return(
    //         <Post message={post.message} likes={post.likes}/>
    //     )
    // })

    const newPostElement = React.createRef();

    const newPost = () => {
        let text = newPostElement.current.value;
        props.addPost('Bogdan');
        console.log('props.addPost')
    }


    return (
        <>
            <div className={style.profile__post}>
                <h1 className={style.profile__post_title}>
                    Мои пости
                </h1>
                <textarea ref={newPostElement} className={style.profile__post__textarea}></textarea>
                <div className={style.profile__post_box}>

                    <button onClick={newPost} className={style.profile__post_btn}>submit
                    </button>
                    <button className={style.profile__post_btn}>reset</button>
                </div>


                {postElement}


            </div>
        </>
    );
};

export default MyPost;