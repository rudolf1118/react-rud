import React from "react";
import classes from "./Post1.module.css";

const Post=(props)=>{

    let likes = (props) => {
        props.like+=1
    }


    return (
        <div className={classes.item}>
            <div className={classes.names}>{props.name}</div>
            <img src={"https://images.unsplash.com/photo-16349" +
                "26878768-2a5b3c42f139?ixlib=rb-1.2.1&ixi" +
                "d=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fG" +
                "VufDB8fHx8&auto=format&fit=crop&w=756&q=80"}/>

            <span className={classes.message}>{props.message}</span>

            <div className={classes.like}>
                <span>Likes {props.like}
                    <button  onClick={likes} className={classes.button}>Like</button> <tt/>
                    <button className={classes.share}>Share</button>
                </span>
            </div>
        </div>
    )
}
export default Post;