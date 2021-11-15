import React from 'react'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";


const MyPostContainer = () => {

    return (

        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState()

                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }
                return (
                    <div>
                        <MyPost
                            posts={state.profilePage.posts}
                            newPostChange={state.profilePage.newPostText}
                            addPost={addPost}
                            updateNewPostText={onPostChange}
                        />
                    </div>
                )
            }
        }

        </StoreContext.Consumer>
    );
};

export default MyPostContainer;