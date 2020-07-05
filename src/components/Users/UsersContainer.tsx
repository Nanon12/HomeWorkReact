import React from "react";
import {connect} from "react-redux";
import {appStateType} from "../redax/redux-store";
import {action} from "../redax/users-reducer";
import Users from "./Users";
import { UsersDataType} from "../redax/users-reducer";

export type mapStatePropsType = {
    users:Array<UsersDataType>

}

export type mapDispatchPropsType={
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users:Array<UsersDataType>)=>void
}

let mapStateToProps = (state:appStateType):mapStatePropsType =>{
    return {
       users:state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch:any):mapDispatchPropsType =>{
    return {
        follow:(userId:number)=>{dispatch(action.followAC(userId));},
        unfollow:(userId:number)=>{dispatch(action.unfollowAC(userId));},
        setUsers:(users:any)=>{dispatch(action.setUsersAC(users));}

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users) ;