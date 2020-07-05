let initialState = {
    users: [


    ] as Array<UsersDataType>,

}

type photoType ={
    small: string|null
    large: string|null
}

export type UsersDataType = {
    name:string
    id:number
    photos:photoType
    status:string
    followed:boolean
    error:string
    totalCount:any
}


type profileStateType = typeof initialState

const usersReducer = (state: profileStateType = initialState, action: actionType) => {
    switch (action.type) {
        case 'FOLLOW':{
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u,followed:true}
                    }
                    return u;
                })
            }
        }
        case 'UNFOLLOW':{
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u,followed:false}
                    }
                    return u;
                })
            }
        }
        case "SET_USERS":{
            return {...state,users: [...state.users, action.users]}
        }

        default:
            return state;
    }


}

type actionType = inferType<typeof action>
type inferType<T> = T extends { [key: string]: (...arg: any[]) => infer U } ? U : never

export let action = {
    followAC: (userId: number) => ({type: 'FOLLOW',userId} as const),
    unfollowAC: (userId: number) => ({type: 'UNFOLLOW',userId} as const),
    setUsersAC: (users: UsersDataType) => ({type: 'SET_USERS',users} as const)
}


export default usersReducer;