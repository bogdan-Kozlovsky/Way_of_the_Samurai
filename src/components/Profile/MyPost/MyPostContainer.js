import React from 'react'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";
import MyPost from "./MyPost";


const MyPostContainer = (props) => {

    let state = props.store.getState()

    const newPostElement = React.createRef();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    // const onPostChange = (text) => {
    //     let action = newPostElement.current.value;
    //     props.dispatch(updateNewPostTextActionCreator(text))
    // }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }


    return (
        <>
            <MyPost
                posts={state.profilePage.posts}
                newPostChange={state.profilePage.newPostText}
                addPost={addPost}
                updateNewPostText={onPostChange}
            />
        </>
    );
};

export default MyPostContainer;