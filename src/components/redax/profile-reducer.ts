let initialState = {
    posts: [
        {id: 1, message: "Hi hove are you ?", likeCounts: 10},
        {id: 2, message: "Hi hove are you ?", likeCounts: 10}
    ] as Array<PostDataType>,
    newPostText : "" as string
}


export type PostDataType = {
    id:number
    message:string
    likeCounts:number
}


type profileStateType = typeof initialState

const profileReducer = (state: profileStateType = initialState, action: actionType) => {
    switch (action.type) {
        case 'ADD_POST':{
            let newPost:PostDataType = {
                id: 1,
                message: state.newPostText,
                likeCounts: 10
            }
            let stateCopy = {
                ...state,
                posts:[...state.posts, newPost],
                newPostText : ''
            };
            return stateCopy;
        }

        case 'UPDATE_NEW_POST_TEXT':{
            let stateCopy = {
                ...state,
                newPostText : action.newText
            }

            return stateCopy;
        }

        default:
            return state;
    }


}

type actionType = inferType<typeof action>
type inferType<T> = T extends { [key: string]: (...arg: any[]) => infer U } ? U : never


export let action = {
    updateNewPostTextActionCreator: (newText: string) => ({type: 'UPDATE_NEW_POST_TEXT', newText: newText} as const),
    addPostActionCreator: () => ({type: 'ADD_POST'} as const)
}


//export const addPostActionCreator = () => ({type: 'ADD_POST'})
//export const updateNewPostTextActionCreator = (newText: any) => ({type: 'UPDATE_NEW_POST_TEXT', nawText: newText})

export default profileReducer;