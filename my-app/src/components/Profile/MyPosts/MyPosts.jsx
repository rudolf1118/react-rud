import React from "react";
import classes from "./Post.module.css";
import Post from "./Post/Post";


const MyPosts=(props)=>{
    let refElement=React.createRef();
    let onAddPost=()=>{
        props.addPost();
    }
    let onChange=()=>{
        let textVal=refElement.current.value;
        props.updateNewPostChange(textVal)
    };

    let postItem=props.posts.map(p=><Post like={p.like} message={p.message} name={p.name}/>)
    return (<div className={classes.text}>
        <div className={classes.mypost}>
            <h3> My posts </h3>
        </div>
        <div>
            <input placeholder={"Enter the text..."} onChange={onChange} ref={refElement} className={classes.input} type={"text"}
                   value={props.newPostText}/>
        </div>
        <div>
            <button onClick={onAddPost} className={classes.button}>Send Message</button>
        </div>
        <div className={classes.posts}>
            {postItem}
        </div>
    </div>)
}
export default MyPosts;