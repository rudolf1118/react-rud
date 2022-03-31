import React from "react";
import classes from "./Post.module.css";
import Post from "./Post/Post";
import {addPostActionCreator} from "../../../redux/ProfilePage-reducer";
import {addNewPostTextActionCreator} from "../../../redux/ProfilePage-reducer";


const MyPosts=(props)=>{
    let newPostText=props.newPostText
    let refElement=React.createRef();
    let text=()=>{
        props.dispatch(addPostActionCreator());
    }
    let onChange=()=>{
        let textVal=refElement.current.value;
        let action = props.dispatch(addNewPostTextActionCreator(textVal));
        props.dispatch(action);
    };

    let postItem=props.posts.map(p=><Post like={p.like} message={p.message} name={p.name}/>)
    return (<div className={classes.text}>
        <div className={classes.mypost}>
            <h3> My posts </h3>
        </div>
        <div>
            <input placeholder={"Enter the text..."} onChange={onChange} ref={refElement} className={classes.input} type={"text"}
                   value={newPostText}/>
        </div>
        <div>
            <button onClick={text} className={classes.button}>Send Message</button>
        </div>
        <div className={classes.posts}>
            {postItem}
        </div>
    </div>)
}
export default MyPosts;