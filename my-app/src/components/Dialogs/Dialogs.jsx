import React, {createRef} from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogsItem.jsx"
import Message from "./Message/Message"

const Dialogs=(props)=>{

    let state = props.dialogsPage;
    let dialogsElements=state.dialogs.map(d=><DialogItem name={d.name} id={d.id}/>);
    let messagesElements=state.messages.map(m=><Message message={m.message}/>);
    let newerMessager=state.newerMessage

    let addPost=()=>{
        props.onAddPost()
    }
    let onChange=(e)=>{
        let messageVal=e.target.value;
        props.onChangeAt(messageVal);

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
                <input placeholder={"Enter the text..."} onChange={onChange} value={newerMessager}
                       className={classes.input}/> <br/>
                <button onClick={addPost} className={classes.button}>Send</button>
            </div>
        </div>
    );

}
export default Dialogs;