import React, {createRef} from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogsItem.jsx"
import Message from "./Message/Message"
import {addMessageActionCreator} from "../../redux/DialogsPage-reducer";
import {addNewMessageTextActionCreator} from "../../redux/DialogsPage-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer=(props)=>{
    return (
        <StoreContext.Consumer> 
            {
            (store)=>{
                let state=store.getState().dialogsPage

                let onAddPost=()=>{
                    store.dispatch(addMessageActionCreator());
                }
                let onChangeAt=(messageVal)=>{
                   store.dispatch(addNewMessageTextActionCreator(messageVal));
                }

                return (<Dialogs
                    onAddPost={onAddPost}
                    onChangeAt={onChangeAt}
                    dialogsPage={state}/>)
            }}
        </StoreContext.Consumer>
    )


}
export default DialogsContainer;