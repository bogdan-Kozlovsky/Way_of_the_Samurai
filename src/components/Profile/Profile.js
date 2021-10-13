import React from 'react';
import MyPost from "./MyPost/MyPost";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <>
            <div className={style.profile}>

                <ProfileInfo/>

                <MyPost posts={props.state.posts}/>
            </div>
        </>
    );
};

export default Profile;