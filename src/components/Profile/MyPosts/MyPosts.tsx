import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {MapDispatchPropsType, mapStatePropsType} from "./MyPostsContainer";


export type MyPostssType = mapStatePropsType & MapDispatchPropsType;






const MyPosts = (props:MyPostssType) => {

    let postElement = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () =>{
        props.addPost();
    }
    let onPostChenge = ()=>{
        let newText = newPostElement.current?.value;
        props.updateNewPost(newText!);


    }

    return (
        <div>My posts
            <div>
                <textarea ref={newPostElement} onChange={onPostChenge} value={props.newPostText}/>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={style.posts}>
                {postElement}
                <Post/>
            </div>
        </div>

    )
}

export default MyPosts;