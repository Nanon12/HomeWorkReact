import React from "react";
import {mapDispatchPropsType, mapStatePropsType} from "./UsersContainer";
import * as axios from 'axios';
type UsersStateType = mapStatePropsType & mapDispatchPropsType;

let Users = (props:UsersStateType)=>{
    let getUsers =()=>{
        if(props.users.length === 0 ){
            // @ts-ignore
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
                props.setUsers(response)
            })

        }
    }



    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.photos.small != null ? u.photos.small:'#'}/></div>
                    <div>
                        {u.followed ?
                            <button onClick={()=>{props.unfollow(u.id)}}>follow</button>
                            : <button onClick={()=>{props.follow(u.id)}}>unfollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div></div>
                        <div></div>
                    </span>
                </span>
            </div>)


        }
    </div>
}

export default Users;