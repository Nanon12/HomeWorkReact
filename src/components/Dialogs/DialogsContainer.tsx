import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {action, dialogsDataType, massageDataType} from "../redax/dialogs-reducer";
import {appStateType} from "../redax/redux-store";


export type mapStatePropsType = {
    messageData:Array<massageDataType>
    dialogsData:Array<dialogsDataType>
    newMessageBody:string
}

export type mapDispatchPropsType={
    sendMessage:()=>void
    updateNewMessageBody:(body:string)=>void
}

let mapStateToProps = (state:appStateType):mapStatePropsType =>{
    return {
        messageData:state.dialogsReducer.messageData,
        dialogsData:state.dialogsReducer.dialogsData,
        newMessageBody:state.dialogsReducer.newMessageBody
    }
}

let mapDispatchToProps = (dispatch:any):mapDispatchPropsType =>{
    return {
        sendMessage:()=>{dispatch(action.sendMessageCreator());},
        updateNewMessageBody:(body:string)=>{dispatch(action.updateNewMessageBodyActionCreator(body));}
    }
}

const DialogsContainer = connect<mapStatePropsType, mapDispatchPropsType, {}, appStateType
    >(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;