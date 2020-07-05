import React from 'react';
import profileReducer, {action, PostDataType} from "../../redax/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {appStateType} from "../../redax/redux-store";


export type mapStatePropsType = {
    posts:Array<PostDataType>
    newPostText:string
}

export type MapDispatchPropsType={
    updateNewPost:(newText:string)=>void
    addPost:()=>void
}



let mapStateToProps = (state:appStateType):mapStatePropsType =>{
    return {
        posts:state.profileReducer.posts,
        newPostText:state.profileReducer.newPostText
    }
}

let mapDispatchToProps = (dispatch:any):MapDispatchPropsType  =>{
    return {
        updateNewPost:(newText:string)=>{
            let actions = action.updateNewPostTextActionCreator(newText!);
            dispatch(actions);
        },
        addPost:()=>{
            dispatch(action.addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect<mapStatePropsType, MapDispatchPropsType, {}, appStateType
    >(mapStateToProps, mapDispatchToProps)(MyPosts);



export default MyPostsContainer;