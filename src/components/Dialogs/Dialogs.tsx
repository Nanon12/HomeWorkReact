import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {mapDispatchPropsType, mapStatePropsType} from "./DialogsContainer";


type DialogDataStateType = mapStatePropsType & mapDispatchPropsType








const Dialogs = (props:DialogDataStateType) => {

    let dialogsElement = props.dialogsData.map(d => <div className={style.dialog + ' ' + style.active}><NavLink to={"/dialogs/" + d.id}>{d.name}</NavLink></div>)
    let massageElement = props.messageData.map(m => <div className={style.message}>{m.massage}</div>)
    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = ()=>{
        props.sendMessage();
    }

    let onSendMessageChange =(e:any)=>{
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return(
        <div className={style.dialogs}>
            <div className={style.dialog}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                <div>{massageElement}</div>
                <div><textarea value={newMessageBody}
                               onChange={onSendMessageChange}
                               placeholder={'Enter you message'}/></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>
    )


}

export default Dialogs;