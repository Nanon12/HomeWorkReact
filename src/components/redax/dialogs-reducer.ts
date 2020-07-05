
let initialState ={
    dialogsData: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Valera"}
    ] as Array<dialogsDataType>,
    messageData: [
        {id: 1, massage: "He yo"},
        {id: 2, massage: "what are you doing?"},
        {id: 3, massage: "yo"},
        {id: 4, massage: "yo"},
        {id: 5, massage: "yo"}
    ]as Array<massageDataType>,
    newMessageBody:'' as string
}

export type massageDataType={
    id:number
    massage:string
}

export type dialogsDataType={
    id:number
    name:string
}
type dialogsStateType = typeof initialState

const dialogsReducer = (state:dialogsStateType = initialState,action:actionType)=>{
     switch (action.type) {
         case 'UPDATE_NEW_MESSAGE_BODY':{
             let stateCopy = {
                 ...state,
                 newMessageBody: action.body
             };
             return stateCopy;
         }

         case 'SEND_MESSAGE':{
             let body = state.newMessageBody ;
             let stateCopy = {
                 ...state,
                 newMessageBody:'',
                 messageData:[...state.messageData,{id: 6, massage: body}]
             };



             return stateCopy;
         }

         default:
             return state;
     }


}

type actionType = inferType<typeof action>
type inferType<T> = T extends { [key: string]: (...arg: any[]) => infer U } ? U : never


export let action = {
    updateNewMessageBodyActionCreator: (body: string) => ({type: 'UPDATE_NEW_MESSAGE_BODY', body: body} as const),
    sendMessageCreator: () => ({type: 'SEND_MESSAGE'} as const)
}

 //export const sendMessageCreator = () => ( {type:'SEND_MESSAGE'})
 //export const updateNewMessageBodyActionCreator = (body:any) =>({type:'UPDATE_NEW_MESSAGE_BODY', body: body})

export default dialogsReducer;