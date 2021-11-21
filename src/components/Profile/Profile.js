import React from 'react';
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
// import {updateNewPostText} from "../redux/store";

const Profile = (props) => {
    console.log(props)
    return (
        <>
            <div className={style.profile}>

                <ProfileInfo/>

                <MyPostContainer
                    store={props.store}
                />
            </div>
        </>
    );
};

export default Profile;