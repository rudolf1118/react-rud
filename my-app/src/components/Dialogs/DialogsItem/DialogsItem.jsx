import React from "react";
import classes from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom";

const DialogItem=(props)=>{

    return <div className={classes.dialog + ' ' + classes.active}>
        <NavLink className={classes.nav}  to={"/dialogs/" + props.id}> {props.name}</NavLink>
    </div>
};

export default DialogItem;