import React from 'react';
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={style.profile}>
        <div>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"/>
        </div>
        <div>ava + description</div>
        <div>
            <MyPosts/>
        </div>
    </div>
}

export default Profile;