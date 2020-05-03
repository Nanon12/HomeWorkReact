import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={style.posts}>
                <Post message="Hello,How are you ?" likeCounts={0}/>
                <Post message="its, my mews post !" likeCounts={22}/>
                <Post/>
            </div>
        </div>

    )
}

export default MyPosts;