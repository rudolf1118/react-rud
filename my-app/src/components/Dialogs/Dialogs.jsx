import React, {createRef} from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogsItem.jsx"
import Message from "./Message/Message"
import {addMessageActionCreator} from "../../redux/DialogsPage-reducer";
import {addNewMessageTextActionCreator} from "../../redux/DialogsPage-reducer";



const Dialogs=(props)=>{

    let refElement=React.createRef()
    let dialogsElements=props.state.dialogs.map(d=><DialogItem name={d.name} id={d.id}/>);
    let messagesElements=props.state.messages.map(m=><Message message={m.message}/>);
    let newerMessager=props.state.newerMessage

    let addPost=()=>{
        props.dispatch(addMessageActionCreator());
        console.log("TPUM EM HERIQA");
    }
    let onChange=()=>{
        let messageVal=refElement.current.value;
        let action=props.dispatch(addNewMessageTextActionCreator(messageVal));
        props.dispatch(action);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.module_message}>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
            </div>

            <div className={classes.inputs}>
                <input placeholder={"Enter the text..."} onChange={onChange} ref={refElement} value={newerMessager}
                       className={classes.input}/> <br/>
                <button onClick={addPost} className={classes.button}>Send</button>
            </div>
        </div>
    );

}
export default Dialogs;