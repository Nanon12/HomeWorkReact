import React from 'react';
import style from './Post.module.css'

type  PostType = {
    message?: string
    likeCounts?: number

}

const Post = (props:PostType) => {
    return <div className={style.items}>
        <img src="https://www.w3schools.com/w3css/img_avatar3.png"/>
        {props.message}
        <div>
            <span>like{props.likeCounts}</span>
        </div>
    </div>

}

export default Post;