import React from 'react';
import MyPost from "./MyPost/MyPost";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../redux/state";

const Profile = (props) => {

    return (
        <>
            <div className={style.profile}>

                <ProfileInfo/>

                <MyPost
                    posts={props.profilePage.posts}
                    dispatch={props.dispatch}
                    // newPostText={props.profilePage.newPostText}
                    // addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
                />
            </div>
        </>
    );
};

export default Profile;