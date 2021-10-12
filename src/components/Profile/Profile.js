import React from 'react';
import MyPost from "./MyPost/MyPost";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <>
            <div className={style.profile}>

                <ProfileInfo/>

                <MyPost/>
            </div>
        </>
    );
};

export default Profile;