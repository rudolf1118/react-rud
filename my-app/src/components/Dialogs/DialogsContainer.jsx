import React, {createRef} from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogsItem.jsx"
import Message from "./Message/Message"
import {addMessageActionCreator} from "../../redux/DialogsPage-reducer";
import {addNewMessageTextActionCreator} from "../../redux/DialogsPage-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer=(props)=>{
    let state=props.store.getState().dialogsPage

    let onAddPost=()=>{
        props.store.dispatch(addMessageActionCreator());
    }
    let onChangeAt=(messageVal)=>{
        props.store.dispatch(addNewMessageTextActionCreator(messageVal));
    }
    return (<Dialogs
            onAddPost={onAddPost}
            onChangeAt={onChangeAt}
                dialogsPage={state}
    />)


}
export default DialogsContainer;