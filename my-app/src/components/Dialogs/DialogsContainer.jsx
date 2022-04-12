import React, {createRef} from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogsItem.jsx"
import Message from "./Message/Message"
import {addMessageActionCreator} from "../../redux/DialogsPage-reducer";
import {addNewMessageTextActionCreator} from "../../redux/DialogsPage-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";


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


// const mapStateToProps=(state)=>{
//     return {
//         dialogsPage:state.dialogsPage
//     }
// }
//
// const mapDispatchToProps=(dispatch)=>{
//     return {
//         onAddPost: ()=>dispatch(addMessageActionCreator()),
//         onChangeAt:(textVal)=> dispatch(addNewMessageTextActionCreator(textVal))
//     }
// }
//
// const DialogsContainer=connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;